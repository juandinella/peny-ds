module.exports = {
  "stories": [
    '../src/**/*.stories.@(js|mdx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/theming"
  ],
  'staticDirs': ['../public']
}
