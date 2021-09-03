const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new WebpackNotifierPlugin({ title: 'AlpsBTE Frontend Build completed' }),
    ],
    resolve: {
      ...config.resolve,
      alias: {
        theme: path.join(__dirname, 'lib/shared/theme/index.scss'),
        defaultStyles: path.join(
          __dirname,
          'libs/shared/theme/src/lib/styles/index.scss'
        ),
      },
    },
  };
};
