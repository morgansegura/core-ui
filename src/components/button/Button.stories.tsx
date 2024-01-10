import React from "react";

import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

export default {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: Story = {
  render: () => <Button>Hello, World!</Button>,
};
