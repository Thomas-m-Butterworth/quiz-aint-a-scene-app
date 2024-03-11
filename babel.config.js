module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigators': './src/navigators',
          '@assets': './assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
