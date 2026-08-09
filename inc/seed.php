<?php
/**
 * One-time theme content seeding (brand + synced patterns).
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ensure site title matches brand once.
 */
function saas_theme_maybe_set_brand_title(): void {
	if ( get_option( 'saas_theme_brand_seeded' ) ) {
		return;
	}

	if ( 'Reactive SaaS' !== get_option( 'blogname' ) ) {
		update_option( 'blogname', 'Reactive SaaS' );
	}

	update_option( 'saas_theme_brand_seeded', 1 );
}
add_action( 'init', 'saas_theme_maybe_set_brand_title', 5 );

/**
 * Seed a synced CTA pattern with pattern overrides.
 */
function saas_theme_maybe_seed_synced_cta(): void {
	if ( get_option( 'saas_theme_cta_synced' ) ) {
		return;
	}

	$existing = get_posts(
		array(
			'post_type'      => 'wp_block',
			'post_status'    => 'publish',
			'name'           => 'cta-band',
			'posts_per_page' => 1,
			'fields'         => 'ids',
		)
	);

	if ( ! empty( $existing ) ) {
		update_option( 'saas_theme_cta_synced', 1 );
		update_option( 'saas_theme_cta_id', (int) $existing[0] );
		return;
	}

	$content = <<<'HTML'
<!-- wp:group {"align":"full","className":"rs-section rs-cta","style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}},"color":{"background":"var:preset|color|dark"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull rs-section rs-cta has-dark-background-color has-background" style="padding-top:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70)"><!-- wp:group {"layout":{"type":"constrained","contentSize":"720px"},"className":"rs-cta__inner"} -->
<div class="wp-block-group rs-cta__inner"><!-- wp:heading {"textAlign":"center","level":2,"textColor":"surface","metadata":{"name":"CTA Heading","bindings":{"__default":{"source":"core/pattern-overrides"}}}} -->
<h2 class="wp-block-heading has-text-align-center has-surface-color has-text-color" id="cta">Ready to take control of your work?</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"color":{"text":"#c8d0d1"}},"metadata":{"name":"CTA Text","bindings":{"__default":{"source":"core/pattern-overrides"}}}} -->
<p class="has-text-align-center" style="color:#c8d0d1">Start a free trial and see how Reactive SaaS brings your team, tools, and workflows into one calm system.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"var:preset|spacing|40"}}}} -->
<div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--40)"><!-- wp:button {"backgroundColor":"spark","textColor":"ink","className":"is-style-fill","metadata":{"name":"CTA Button","bindings":{"__default":{"source":"core/pattern-overrides"}}}} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-ink-color has-spark-background-color has-text-color has-background wp-element-button" href="#">Start Free Trial</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:paragraph {"align":"center","fontSize":"small","style":{"color":{"text":"#9aabab"},"spacing":{"margin":{"top":"var:preset|spacing|30"}}},"metadata":{"name":"CTA Fine Print","bindings":{"__default":{"source":"core/pattern-overrides"}}}} -->
<p class="has-text-align-center has-small-font-size" style="color:#9aabab;margin-top:var(--wp--preset--spacing--30)">No credit card required. 14-day free trial.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
HTML;

	$post_id = wp_insert_post(
		array(
			'post_title'   => 'CTA Band',
			'post_name'    => 'cta-band',
			'post_status'  => 'publish',
			'post_type'    => 'wp_block',
			'post_content' => $content,
		),
		true
	);

	if ( ! is_wp_error( $post_id ) ) {
		update_post_meta( $post_id, 'wp_pattern_sync_status', '' );
		update_option( 'saas_theme_cta_synced', 1 );
		update_option( 'saas_theme_cta_id', (int) $post_id );
	}
}
add_action( 'init', 'saas_theme_maybe_seed_synced_cta', 22 );
