import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import Retro from "./page";

import { addToJourney } from "@/api/journey-persistence";

const meta: Meta<typeof Retro> = {
  title: "Pages/Retro",
  component: Retro,
  decorators: [
    (Story) => {
      // Set up localStorage with mock data expected by getJourney
      addToJourney("mission_b0m1a1");
      addToJourney("mission_b0m1a2");
      addToJourney("mission_b4m2");
      addToJourney("mission_b1m2");
      addToJourney("mission_b1m2");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Retro>;

export const Default: Story = {
  render: () => <Retro />,
};
