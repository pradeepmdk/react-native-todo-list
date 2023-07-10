const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp('src'),
  resolveApp('../components/src'),
  resolveApp('node_modules/react-native-vector-icons'),
];

const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-gesture-handler'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};
// const babelLoaderConfiguration = {
//     test: /\.js$/,
//     include: [
//       path.resolve(appDirectory, 'index.web.js'),
//       path.resolve(appDirectory, 'src'),
//       path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
//       path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
//       path.resolve(appDirectory, 'node_modules/react-native-elements'),
//     ],
//     use: {
//       loader: 'babel-loader',
//       options: {
//         cacheDirectory: true,
//         presets: ['react-native'],
//         plugins: ['react-native-web'],
//       },
//     },
//   };
//   const compileNodeModules = [
//     // Add every react-native package that needs compiling
//     // 'react-native-gesture-handler',
//   'react-native-vector-icons',
//    ].map((moduleName) => path.resolve(appDirectory,
//   `node_modules/${moduleName}`));

module.exports = function override(config, env) {
  config.plugins.push(
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  );
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    // Transform all direct `react-native` imports to `react-native-web`
    'react-native$': 'react-native-web',
  };
  config.module.rules.push(babelLoaderConfiguration),
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: ['url-loader?limit=10000', 'img-loader'],
    });
  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'url-loader', // or directly file-loader
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  });
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin',
  );
  //   config.resolve.
  //   config.module.rules[0].include = appIncludes
  //   config.module.rules[1] = null
  //   config.module.rules[2].oneOf[1].include = appIncludes
  //   config.module.rules[2].oneOf[1].options.plugins = [
  //     require.resolve('babel-plugin-react-native-web'),
  //   ].concat(config.module.rules[2].oneOf[1].options.plugins)
  //   config.module.rules = config.module.rules.filter(Boolean)
  //   config.plugins.push(
  //     new webpack.DefinePlugin({ __DEV__: env !== 'production' })
  //   )

  return config;
};
