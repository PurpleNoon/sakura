const path = require('path');
const resolve = (...dirs) => path.resolve(__dirname, ...dirs);

module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: [
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../../element'),
      ],
      exclude: /node_modules/,
    });

    config.resolve.alias['sakura'] = resolve('../packages')
    config.resolve.alias['sakura-style'] = resolve('../packages/theme-chalk/src')
    config.resolve.alias['ele'] = resolve('../../element/packages')
    config.resolve.alias['ele-style'] = resolve('../../element/packages/theme-chalk/src')

    // Return the altered config
    return config;
  },
}
