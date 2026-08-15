<?php
/**
 * Front-end render for the Case Studies block.
 *
 * @package saas-block-theme
 *
 * @var array    $attributes
 * @var string   $content
 * @var WP_Block $block
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

$studies = function_exists('saas_theme_get_client_case_studies')
	? saas_theme_get_client_case_studies()
	: [];

$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => 'saas-case-studies relative overflow-hidden',
	]
);

$arrow_left = '<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>';
$arrow_right = '<svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<div class="relative mx-auto max-w-content">
		<?php if (empty($studies)): ?>
			<p class="m-0 text-muted"><?php esc_html_e('No published clients yet.', 'saas-block-theme'); ?></p>
		<?php else: ?>
			<?php if (count($studies) > 1): ?>
				<div class="flex justify-end gap-3">
					<button type="button" data-case-studies-prev
						aria-label="<?php esc_attr_e('Previous case study', 'saas-block-theme'); ?>"
						class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary">
						<?php echo $arrow_left; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</button>
					<button type="button" data-case-studies-next
						aria-label="<?php esc_attr_e('Next case study', 'saas-block-theme'); ?>"
						class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary">
						<?php echo $arrow_right; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</button>
				</div>
			<?php endif; ?>

			<div class="<?php echo count($studies) > 1 ? 'mt-12 ' : ''; ?>saas-case-studies__viewport overflow-hidden">
				<div class="flex gap-6">
					<?php foreach ($studies as $study): ?>
						<article
							class="min-w-0 flex-[0_0_100%] rounded-3xl border border-border-soft bg-surface p-9 shadow-soft sm:flex-[0_0_60%] lg:flex-[0_0_40%]">
							<div class="flex items-center justify-between gap-4">
								<span
									class="text-small font-semibold tracking-tight text-ink"><?php echo esc_html($study['company']); ?></span>
								<?php if ($study['sector'] !== ''): ?>
									<span
										class="rounded-full bg-background px-3 py-1 text-x-small text-muted"><?php echo esc_html($study['sector']); ?></span>
								<?php endif; ?>
							</div>
							<div class="mt-10 mb-0 text-5xl font-semibold tracking-tight text-primary">
								<?php echo esc_html($study['metric']); ?>
							</div>
							<div class="mt-2 mb-0 text-small text-muted"><?php echo esc_html($study['metricLabel']); ?></div>
							<div class="mt-6 mb-0 border-t border-border-soft pt-6 text-small text-muted">
								<?php echo esc_html($study['body']); ?>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>

			<?php if (count($studies) > 1): ?>
				<div class="mt-8 flex gap-2">
					<?php foreach ($studies as $index => $study): ?>
						<button type="button" data-case-studies-dot
							aria-label="<?php echo esc_attr(sprintf(__('Go to %s', 'saas-block-theme'), $study['company'])); ?>"
							class="h-1.5 rounded-full border-0 p-0 transition-all <?php echo $index === 0 ? 'w-10 bg-primary' : 'w-5 bg-border'; ?>"></button>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		<?php endif; ?>
	</div>
</section>