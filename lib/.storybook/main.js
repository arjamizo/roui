/** @type { import('@storybook/vue-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    disableTelemetry: true,
  },
  staticDirs: [{ from: './assets', to: '/assets' }],
  framework: {
    name: "@storybook/vue-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="/assets/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
  `,
};
export default config;
