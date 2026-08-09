<?php
/**
 * Register theme blocks.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Register compiled blocks from /build.
 */
function saas_theme_register_blocks(): void
{
	$hero_block = SAAS_THEME_DIR . '/build/hero-section';

	if (file_exists($hero_block . '/block.json')) {
		register_block_type($hero_block);
	}
}
add_action('init', 'saas_theme_register_blocks');

/**
 * Pass theme asset URLs into the hero block editor script.
 */
function saas_theme_hero_block_editor_data(): void
{
	$handle = 'saas-block-theme-hero-section-editor-script';

	if (!wp_script_is($handle, 'registered') && !wp_script_is($handle, 'enqueued')) {
		return;
	}

	$data = [
		'heroVisualUrl' => get_template_directory_uri() . '/assets/images/hero-visual.jpeg',
	];

	wp_add_inline_script(
		$handle,
		'window.saasBlockTheme = Object.assign(window.saasBlockTheme || {}, ' . wp_json_encode($data) . ');',
		'before'
	);
}
add_action('enqueue_block_editor_assets', 'saas_theme_hero_block_editor_data', 20);
