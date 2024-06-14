/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config: import('@storybook/svelte-vite').StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/renderer/src/components/**/*.stories.@(js|jsx|ts|tsx|svelte)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf'
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  framework: {
    name: '@storybook/svelte-vite',
    options: {}
  }
}
export default config
