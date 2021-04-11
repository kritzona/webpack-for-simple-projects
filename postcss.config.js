const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['ie >= 11', '> 1%', 'last 2 versions'],
    }),
  ],
}
