<?php
/**
 * Navigation menus: seed and wire to template parts.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Seed primary navigation (wp_navigation) once.
 */
function saas_theme_maybe_seed_navigation(): void {
	if ( get_option( 'saas_theme_nav_seeded' ) ) {
		return;
	}

	$existing = get_posts(
		array(
			'post_type'      => 'wp_navigation',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'name'           => 'primary',
			'fields'         => 'ids',
		)
	);

	if ( ! empty( $existing ) ) {
		update_option( 'saas_theme_nav_seeded', 1 );
		update_option( 'saas_theme_nav_id', (int) $existing[0] );
		return;
	}

	$items = array(
		array( 'label' => 'Features', 'url' => '#features' ),
		array( 'label' => 'Process', 'url' => '#process' ),
		array( 'label' => 'Benefits', 'url' => '#benefits' ),
		array( 'label' => 'Integrations', 'url' => '#integrations' ),
		array( 'label' => 'Pricing', 'url' => '#pricing' ),
		array( 'label' => 'FAQ', 'url' => '#faq' ),
	);

	$content = '';
	foreach ( $items as $item ) {
		$content .= sprintf(
			'<!-- wp:navigation-link {"label":%s,"url":%s,"kind":"custom","isTopLevelLink":true} /-->' . "\n",
			wp_json_encode( $item['label'] ),
			wp_json_encode( $item['url'] )
		);
	}

	$nav_id = wp_insert_post(
		array(
			'post_title'   => 'Primary',
			'post_name'    => 'primary',
			'post_status'  => 'publish',
			'post_type'    => 'wp_navigation',
			'post_content' => $content,
		),
		true
	);

	if ( ! is_wp_error( $nav_id ) ) {
		update_option( 'saas_theme_nav_seeded', 1 );
		update_option( 'saas_theme_nav_id', (int) $nav_id );
	}
}
add_action( 'init', 'saas_theme_maybe_seed_navigation', 20 );

/**
 * Seed footer navigation once.
 */
function saas_theme_maybe_seed_footer_navigation(): void {
	if ( get_option( 'saas_theme_footer_nav_seeded' ) ) {
		return;
	}

	$existing = get_posts(
		array(
			'post_type'      => 'wp_navigation',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'name'           => 'footer',
			'fields'         => 'ids',
		)
	);

	if ( ! empty( $existing ) ) {
		update_option( 'saas_theme_footer_nav_seeded', 1 );
		update_option( 'saas_theme_footer_nav_id', (int) $existing[0] );
		return;
	}

	$items = array(
		array( 'label' => 'Features', 'url' => '#features' ),
		array( 'label' => 'Pricing', 'url' => '#pricing' ),
		array( 'label' => 'FAQ', 'url' => '#faq' ),
		array( 'label' => 'Privacy', 'url' => '#' ),
		array( 'label' => 'Terms', 'url' => '#' ),
	);

	$content = '';
	foreach ( $items as $item ) {
		$content .= sprintf(
			'<!-- wp:navigation-link {"label":%s,"url":%s,"kind":"custom","isTopLevelLink":true} /-->' . "\n",
			wp_json_encode( $item['label'] ),
			wp_json_encode( $item['url'] )
		);
	}

	$nav_id = wp_insert_post(
		array(
			'post_title'   => 'Footer',
			'post_name'    => 'footer',
			'post_status'  => 'publish',
			'post_type'    => 'wp_navigation',
			'post_content' => $content,
		),
		true
	);

	if ( ! is_wp_error( $nav_id ) ) {
		update_option( 'saas_theme_footer_nav_seeded', 1 );
		update_option( 'saas_theme_footer_nav_id', (int) $nav_id );
	}
}
add_action( 'init', 'saas_theme_maybe_seed_footer_navigation', 21 );

/**
 * Wire template-part navigation blocks to seeded menus when refs are empty.
 *
 * @param array<string, mixed> $parsed_block Parsed block.
 * @return array<string, mixed>
 */
function saas_theme_inject_navigation_refs( array $parsed_block ): array {
	if ( ( $parsed_block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $parsed_block;
	}

	$class = (string) ( $parsed_block['attrs']['className'] ?? '' );
	$ref   = (int) ( $parsed_block['attrs']['ref'] ?? 0 );

	if ( $ref > 0 ) {
		return $parsed_block;
	}

	if ( str_contains( $class, 'rs-header__nav' ) ) {
		$nav_id = (int) get_option( 'saas_theme_nav_id' );
		if ( $nav_id ) {
			$parsed_block['attrs']['ref'] = $nav_id;
		}
	}

	if ( str_contains( $class, 'rs-footer__nav' ) ) {
		$nav_id = (int) get_option( 'saas_theme_footer_nav_id' );
		if ( $nav_id ) {
			$parsed_block['attrs']['ref'] = $nav_id;
		}
	}

	return $parsed_block;
}
add_filter( 'render_block_data', 'saas_theme_inject_navigation_refs' );
