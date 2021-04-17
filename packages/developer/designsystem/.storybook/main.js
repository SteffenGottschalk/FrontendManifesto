module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../src/**/docs/*.stories.mdx'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ],
  reactOptions: {
    fastRefresh: true
  }
};
