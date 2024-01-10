/**
 * @file Creates a new release version of the app.
 */

import fs from "fs";
import { exec } from "node:child_process";

import calver from "calver";

function updateFile(path: string, newVersion: string) {
  // Read
  const raw = fs.readFileSync(path, "utf-8");
  const parsed = JSON.parse(raw) as {
    version: string;
    packages?: Record<string, any>;
  };

  // Update
  parsed.version = newVersion;
  if (parsed.packages) {
    parsed.packages[""].version = newVersion;
  }

  // Write
  const result = `${JSON.stringify(parsed, null, "  ")}\n`;
  fs.writeFileSync(path, result, "utf-8");
}

async function run() {
  console.log("Creating new release...");

  // Check for uncommitted changes
  await new Promise<void>((res) => {
    exec(
      `git update-index --refresh && git diff-index --quiet HEAD --`,
      (error) => {
        if (error) {
          console.error("Release failed!");
          console.log(
            "You have uncommitted changes. Make sure all changes are committed before creating a release.",
          );
          process.exit(error.code);
        }

        return res();
      },
    );
  });

  // Read data
  const raw = fs.readFileSync("./package.json", "utf-8");
  const pkgJson = JSON.parse(raw) as { version: string };

  // Bump version
  const prevVersion = pkgJson.version;
  const newVersion = calver.inc(
    "yyyy.0m.0d.patch",
    prevVersion,
    "calendar.patch",
  );

  // Update files
  const files = ["./package.json", "./package-lock.json"];

  files.forEach((path) => updateFile(path, newVersion));

  // Create a tag
  const commands = [
    `git add ${files.join(" ")}`,
    `git commit -m "${newVersion}"`,
    `git tag ${newVersion}`,
  ];

  exec(`${commands.join(" && ")}`);

  console.log(`Created new release ${newVersion}`);
}

void run();
