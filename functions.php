<?php
/**
 * SaaS Block Theme functions.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

define('SAAS_THEME_VERSION', '1.0.0');
define('SAAS_THEME_DIR', get_template_directory());

$saas_theme_includes = array(
	'/inc/assets.php',
	'/inc/blocks.php',
	'/inc/custom-post-types.php',
	'/inc/icons.php',
	'/inc/navigation.php',
	'/inc/seed.php',
);

foreach ($saas_theme_includes as $saas_theme_file) {
	require_once SAAS_THEME_DIR . $saas_theme_file;
}
