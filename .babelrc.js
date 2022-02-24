module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '>2%, Firefox ESR, not dead',
          ],
        },
        useBuiltIns: 'usage',
        corejs: '3.30'
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
      },
    ],
  ],
};
