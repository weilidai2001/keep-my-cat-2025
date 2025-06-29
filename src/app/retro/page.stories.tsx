import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import Retro from "./page";

// Import manual mocks for Storybook usage
import { getJourney, getMissionStatesWithImages } from "./__mocks__/mocked-modules";

// Optionally, you can create a decorator to provide these mocks via context if needed.
// If Retro uses these as imports, Storybook will still use the real modules, but you can mock browser storage or props if needed.

const meta: Meta<typeof Retro> = {
  title: "Pages/Retro",
  component: Retro,
};

export default meta;

type Story = StoryObj<typeof Retro>;

export const Default: Story = {
  render: () => <Retro />,
};
