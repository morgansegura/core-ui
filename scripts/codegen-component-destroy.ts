import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const name = process.argv.slice(2)[0];
const directory = name.charAt(0).toLowerCase() + name.slice(1);
const output = path.join.bind(path, __dirname, "../src/components");
// Remove all Remincence
const REMOVAL_TEMPLATE = `
export { ${name} } from "./${name.toLowerCase()}/${name}";
`;

async function run() {
  try {
    fs.rmSync(output(directory), { recursive: true });
    console.log(`Successfully removed component ${name}`);
    fs.readFile(output(`index.ts`), "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(REMOVAL_TEMPLATE, "");

      fs.writeFile(output(`index.ts`), result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
    console.log(`Successfully removed component ${name} from index.ts`);
  } catch (error) {
    console.error(error);
  }
}

void run();
