import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs";

// Inject Pangolin font for Storybook preview
if (typeof window !== 'undefined') {
  const pangolinFont = document.createElement('link');
  pangolinFont.href = 'https://fonts.googleapis.com/css?family=Pangolin';
  pangolinFont.rel = 'stylesheet';
  document.head.appendChild(pangolinFont);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
