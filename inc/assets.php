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
 * Enqueue theme assets on the front and in the block editor canvas.
 */
function saas_theme_enqueue_assets(): void
{
	$style_path = SAAS_THEME_DIR . '/assets/css/theme.css';
	$script_path = SAAS_THEME_DIR . '/assets/js/theme.js';

	wp_enqueue_style(
		'saas-theme',
		get_template_directory_uri() . '/assets/css/theme.css',
		[],
		file_exists($style_path) ? (string) filemtime($style_path) : '1.0.0'
	);

	wp_enqueue_script(
		'saas-theme',
		get_template_directory_uri() . '/assets/js/theme.js',
		[],
		file_exists($script_path) ? (string) filemtime($script_path) : '1.0.0',
		[
			'strategy' => 'defer',
			'in_footer' => true,
		]
	);
}
add_action('enqueue_block_assets', 'saas_theme_enqueue_assets');

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
