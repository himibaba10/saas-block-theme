<?php
/**
 * Register theme blocks.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH'))
	exit;

function saas_theme_register_blocks(): void
{
	$blocks = [
		SAAS_THEME_DIR . '/build/hero-section',
		SAAS_THEME_DIR . '/build/faq-section',
		SAAS_THEME_DIR . '/build/faq-item',
		SAAS_THEME_DIR . '/build/case-studies',
	];

	foreach ($blocks as $block_path) {
		if (file_exists("{$block_path}/block.json")) {
			register_block_type($block_path);
		}
	}
}
add_action('init', 'saas_theme_register_blocks');

/**
 * Register block styles server-side so theme.json variation styles are kept.
 */
function saas_theme_register_block_styles(): void
{
	register_block_style(
		'core/paragraph',
		[
			'name' => 'small',
			'label' => __('Small', 'saas-block-theme'),
		]
	);

	register_block_style(
		'core/paragraph',
		[
			'name' => 'large',
			'label' => __('Large', 'saas-block-theme'),
		]
	);
}
add_action('init', 'saas_theme_register_block_styles');

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
