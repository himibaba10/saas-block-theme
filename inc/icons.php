<?php
/**
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH'))
	exit;

/**
 * @return array<string, string> Icon slug => label.
 */
function saas_theme_get_lucide_icons(): array
{
	return [
		'workflow' => __('Workflow', 'saas-block-theme'),
		'bot' => __('Bot', 'saas-block-theme'),
		'chart-line' => __('Chart Line', 'saas-block-theme'),
		'plug' => __('Plug', 'saas-block-theme'),
		'lock' => __('Lock', 'saas-block-theme'),
		'gauge' => __('Gauge', 'saas-block-theme'),
	];
}

function saas_theme_get_lucide_svg(string $slug): string
{
	$file_path = SAAS_THEME_DIR . '/assets/icons/lucide/' . $slug . '.svg';

	if (!is_readable($file_path)) {
		return '';
	}

	$content = file_get_contents($file_path);

	return is_string($content) ? trim($content) : '';
}

function saas_theme_register_lucide_icons(): void
{
	$icons = saas_theme_get_lucide_icons();

	if (!class_exists('WP_Icons_Registry')) {
		return;
	}

	$registry = WP_Icons_Registry::get_instance();

	try {
		$method = new ReflectionMethod($registry, 'register');
	} catch (ReflectionException $e) {
		return;
	}

	foreach ($icons as $slug => $label) {
		$content = saas_theme_get_lucide_svg($slug);

		if ($content === '') {
			continue;
		}

		$method->invoke(
			$registry,
			"lucide/$slug",
			[
				'label' => $label,
				'content' => $content,
			]
		);
	}
}
add_action('init', 'saas_theme_register_lucide_icons');
