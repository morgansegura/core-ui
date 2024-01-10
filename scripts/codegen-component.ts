import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

import { format } from "prettier";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const CSS_TEMPLATE = (name: string) => `
.${name} {
  @apply text-inherit;
}
`;

const COMPONENT_TEMPLATE = (name: string) => `

import clsx from "clsx";
import React from "react";

import "./${name}.css";

import type { ReactNode } from "react";

export interface ${name}Props {
  children?: ReactNode;
  className?: string;
}

export function ${name}({ children, className }: ${name}Props) {
  const baseProps = {
    className: clsx("${name}", className)
  }
  return <div {...baseProps}>{children}</div>;
}
`;

const STORY_TEMPLATE = (name: string) => `
import React from "react";

import { ${name} } from "./${name}";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ${name}>;

export default {
  title: "Components/${name}",
  component: ${name},
} satisfies Meta<typeof ${name}>;

export const Default: Story = {
  render: () => (
    <${name}>
      Hello, World!
    </${name}>
  ),
};
`;

const TEST_TEMPLATE = (name: string) => `
import React from "react";

import { render } from "@testing-library/react";

import { ${name} } from "../${name}";

describe("${name}", () => {
  it("works", () => {
    render(<${name} />);
  });
});
`;

const EXPORT_TEMPLATE = (name: string) => `
export { ${name} } from "./${name}";
`;

const EXPORTS_TEMPLATE = (name: string) => `
export { ${name} } from "./${name.toLowerCase()}/${name}";
`;

const name = process.argv.slice(2)[0];
const directory = name.charAt(0).toLowerCase() + name.slice(1);
const output = path.join.bind(path, __dirname, "../src/components");

async function run() {
  try {
    fs.mkdirSync(output(directory));
    fs.mkdirSync(output(directory, "__tests__"));
    //  Write to output file
    fs.appendFile(
      output(`index.ts`),
      await format(EXPORTS_TEMPLATE(name), { parser: "typescript" }),
      function (err) {
        if (err) throw err;
        console.log("IS WRITTEN");
      },
    );

    fs.writeFileSync(
      output(directory, `${name}.css`),
      await format(CSS_TEMPLATE(name), { parser: "css" }),
    );
    fs.writeFileSync(
      output(directory, `${name}.tsx`),
      await format(COMPONENT_TEMPLATE(name), { parser: "typescript" }),
    );
    fs.writeFileSync(
      output(directory, `index.ts`),
      await format(EXPORT_TEMPLATE(name), { parser: "typescript" }),
    );
    fs.writeFileSync(
      output(directory, `${name}.stories.tsx`),
      await format(STORY_TEMPLATE(name), { parser: "typescript" }),
    );
    fs.writeFileSync(
      output(directory, "__tests__", `${name}.test.tsx`),
      await format(TEST_TEMPLATE(name), { parser: "typescript" }),
    );
  } catch (error) {
    console.error(error);
  }
}

void run();
