<?php
/**
 * Custom post types.
 *
 * @package saas-block-theme
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the Clients post type and industry taxonomy.
 * Metric fields are managed with ACF.
 */
function saas_theme_register_custom_post_types(): void
{
    register_post_type(
        'client',
        [
            'labels' => [
                'name' => __('Clients', 'saas-block-theme'),
                'singular_name' => __('Client', 'saas-block-theme'),
                'add_new' => __('Add Client', 'saas-block-theme'),
                'add_new_item' => __('Add New Client', 'saas-block-theme'),
                'edit_item' => __('Edit Client', 'saas-block-theme'),
                'new_item' => __('New Client', 'saas-block-theme'),
                'view_item' => __('View Client', 'saas-block-theme'),
                'view_items' => __('View Clients', 'saas-block-theme'),
                'search_items' => __('Search Clients', 'saas-block-theme'),
                'not_found' => __('No clients found.', 'saas-block-theme'),
                'not_found_in_trash' => __('No clients found in Trash.', 'saas-block-theme'),
                'all_items' => __('All Clients', 'saas-block-theme'),
                'menu_name' => __('Clients', 'saas-block-theme'),
            ],
            'public' => true,
            'show_in_rest' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-groups',
            'menu_position' => 6,
            'rewrite' => [
                'slug' => 'clients',
                'with_front' => false,
            ],
            'supports' => [
                'title',
                'editor',
            ],
        ]
    );

    register_taxonomy(
        'client_industry',
        'client',
        [
            'labels' => [
                'name' => __('Industries', 'saas-block-theme'),
                'singular_name' => __('Industry', 'saas-block-theme'),
                'search_items' => __('Search Industries', 'saas-block-theme'),
                'all_items' => __('All Industries', 'saas-block-theme'),
                'edit_item' => __('Edit Industry', 'saas-block-theme'),
                'update_item' => __('Update Industry', 'saas-block-theme'),
                'add_new_item' => __('Add New Industry', 'saas-block-theme'),
                'new_item_name' => __('New Industry Name', 'saas-block-theme'),
                'menu_name' => __('Industries', 'saas-block-theme'),
            ],
            'public' => true,
            'show_in_rest' => true,
            'hierarchical' => true,
            'show_admin_column' => true,
            'rewrite' => [
                'slug' => 'client-industry',
                'with_front' => false,
            ],
        ]
    );
}
add_action('init', 'saas_theme_register_custom_post_types');

/**
 * Case-study data for one client post.
 *
 * @return array{company: string, sector: string, metric: string, metricLabel: string, body: string}
 */
function saas_theme_get_client_case_study(int $post_id): array
{
    $terms = get_the_terms($post_id, 'client_industry');
    $sector = '';

    if (is_array($terms) && isset($terms[0]) && !is_wp_error($terms)) {
        $sector = $terms[0]->name;
    }

    $metric = function_exists('get_field') ? (string) get_field('increment_number', $post_id) : '';
    $metric_label = function_exists('get_field') ? (string) get_field('increment_text', $post_id) : '';
    $body = wp_strip_all_tags((string) get_post_field('post_content', $post_id));

    return [
        'company' => get_the_title($post_id),
        'sector' => $sector,
        'metric' => $metric,
        'metricLabel' => $metric_label,
        'body' => trim($body),
    ];
}

/**
 * @return list<array{company: string, sector: string, metric: string, metricLabel: string, body: string}>
 */
function saas_theme_get_client_case_studies(): array
{
    $posts = get_posts(
        [
            'post_type' => 'client',
            'post_status' => 'publish',
            'posts_per_page' => 20,
            'orderby' => [
                'menu_order' => 'ASC',
                'date' => 'DESC',
            ],
        ]
    );

    $studies = [];

    foreach ($posts as $post) {
        $studies[] = saas_theme_get_client_case_study((int) $post->ID);
    }

    return $studies;
}

/**
 * Expose case-study fields on the client REST type for the editor preview.
 */
function saas_theme_register_client_rest_fields(): void
{
    register_rest_field(
        'client',
        'case_study',
        [
            'get_callback' => static function (array $post): array {
                return saas_theme_get_client_case_study((int) $post['id']);
            },
            'schema' => [
                'type' => 'object',
                'context' => ['view', 'edit'],
            ],
        ]
    );
}
add_action('rest_api_init', 'saas_theme_register_client_rest_fields');
