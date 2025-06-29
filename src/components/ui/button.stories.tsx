import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta = {
  title: "UI/Button",
  component: Button,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => <Button text="Button" />,
};
