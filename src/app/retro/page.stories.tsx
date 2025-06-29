import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import Retro from "./page";

// Import manual mocks for Storybook usage
import {
  getJourney,
  getMissionStatesWithImages,
} from "./__mocks__/mocked-modules";
import { addToJourney } from "@/api/journey-persistence";

// Optionally, you can create a decorator to provide these mocks via context if needed.
// If Retro uses these as imports, Storybook will still use the real modules, but you can mock browser storage or props if needed.

const meta: Meta<typeof Retro> = {
  title: "Pages/Retro",
  component: Retro,
  decorators: [
    (Story) => {
      // Set up localStorage with mock data expected by getJourney
      addToJourney("mission_b0m1a1");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Retro>;

export const Default: Story = {
  render: () => <Retro />,
};
