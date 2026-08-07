<?php
/**
 * Theme assets and helpers.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue theme assets.
 */
function saas_theme_enqueue_assets(): void
{
	$theme_uri_assets = get_template_directory_uri() . '/assets';

	wp_enqueue_style(
		'saas-theme',
		"$theme_uri_assets/css/theme.css",
		[],
		'1.0.0'
	);

	wp_enqueue_script(
		'saas-theme',
		"$theme_uri_assets/js/theme.js",
		[],
		'1.0.0',
		[
			'strategy' => 'defer',
			'in_footer' => true,
		]
	);
}
add_action('wp_enqueue_scripts', 'saas_theme_enqueue_assets');

/**
 * Editor styles so the canvas matches the front.
 */
function saas_theme_editor_assets(): void
{
	$theme_uri_assets = get_template_directory_uri() . '/assets';
	add_editor_style("$theme_uri_assets/css/theme.css");
}
add_action('after_setup_theme', 'saas_theme_editor_assets');

/**
 * Register block variations in the block editor.
 */
function saas_block_theme_register_block_variations(): void
{
	$asset_file = SAAS_THEME_DIR . '/build/block-variations.asset.php';

	if (!file_exists($asset_file)) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'saas-block-theme-block-variations',
		get_template_directory_uri() . '/build/block-variations.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);
}
add_action('enqueue_block_editor_assets', 'saas_block_theme_register_block_variations');
