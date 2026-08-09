const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,
  entry: {
    // Discovers editorScript / viewScript / etc. from each block.json
    ...defaultConfig.entry(),
    'block-variations': './src/block-variations.js',
  },
};
