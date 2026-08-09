const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'block-variations': './src/block-variations.js',
		'hero-section/index': './src/hero-section/index.js',
	},
};
