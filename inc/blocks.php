<?php
/**
 * Theme block styles (core block variations registered server-side).
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

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
