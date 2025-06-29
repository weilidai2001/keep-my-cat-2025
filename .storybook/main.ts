import type { StorybookConfig } from '@storybook/nextjs';

import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: [
    "../public"
  ],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["next/navigation"] = path.resolve(__dirname, "../src/__mocks__/next/navigation.js");
    return config;
  },
};
export default config;