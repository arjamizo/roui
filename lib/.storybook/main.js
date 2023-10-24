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
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Sharp"/>
    <link rel="stylesheet" href="/assets/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/daisyui@3.8.3/dist/full.css" rel="stylesheet" type="text/css" />
  `,
};
export default config;
