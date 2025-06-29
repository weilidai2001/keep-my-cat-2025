import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import Page from "./page";

const meta: Meta<typeof Page> = {
  title: "Pages/Dashboard",
  component: Page,
  decorators: [],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  render: () => <Page params={{ stateId: "mission_b4m2" }} />,
};
