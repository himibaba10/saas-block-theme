import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { HeroActionsEdit, HeroActionsSave } from './hero-actions';
import { HeroStatsEdit, HeroStatsSave } from './hero-stats';
import { SparklesIcon } from './icons';

export function HeroContentEdit( {
	eyebrow,
	heading,
	description,
	primaryCtaText,
	primaryCtaUrl,
	primaryCtaOpensInNewTab,
	secondaryCtaText,
	secondaryCtaUrl,
	secondaryCtaOpensInNewTab,
	stats,
	setAttributes,
	isSelected,
} ) {
	return (
		<div>
			<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-x-small font-medium tracking-[0.04em] text-primary uppercase">
				<SparklesIcon />
				<RichText
					tagName="span"
					value={ eyebrow }
					onChange={ ( value ) =>
						setAttributes( { eyebrow: value } )
					}
					placeholder={ __( 'Eyebrow text…', 'saas-block-theme' ) }
					allowedFormats={ [] }
				/>
			</div>

			<RichText
				tagName="h1"
				className="mt-6 mb-0 text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance"
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
				placeholder={ __( 'Heading…', 'saas-block-theme' ) }
				allowedFormats={ [ 'core/text-color' ] }
			/>

			<RichText
				tagName="p"
				className="mt-6 mb-0 max-w-xl text-large leading-relaxed text-muted"
				value={ description }
				onChange={ ( value ) =>
					setAttributes( { description: value } )
				}
				placeholder={ __( 'Description…', 'saas-block-theme' ) }
				allowedFormats={ [] }
			/>

			<HeroActionsEdit
				primaryCtaText={ primaryCtaText }
				primaryCtaUrl={ primaryCtaUrl }
				primaryCtaOpensInNewTab={ primaryCtaOpensInNewTab }
				secondaryCtaText={ secondaryCtaText }
				secondaryCtaUrl={ secondaryCtaUrl }
				secondaryCtaOpensInNewTab={ secondaryCtaOpensInNewTab }
				setAttributes={ setAttributes }
				isSelected={ isSelected }
			/>

			<HeroStatsEdit stats={ stats } setAttributes={ setAttributes } />
		</div>
	);
}

export function HeroContentSave( {
	eyebrow,
	heading,
	description,
	primaryCtaText,
	primaryCtaUrl,
	primaryCtaOpensInNewTab,
	secondaryCtaText,
	secondaryCtaUrl,
	secondaryCtaOpensInNewTab,
	stats,
} ) {
	return (
		<div>
			<div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-x-small font-medium tracking-[0.04em] text-primary uppercase">
				<SparklesIcon />
				<RichText.Content tagName="span" value={ eyebrow } />
			</div>

			<RichText.Content
				tagName="h1"
				className="mt-6 mb-0 text-[clamp(2.5rem,1.5rem+4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance"
				value={ heading }
			/>

			<RichText.Content
				tagName="p"
				className="mt-6 mb-0 max-w-xl text-large leading-relaxed text-muted"
				value={ description }
			/>

			<HeroActionsSave
				primaryCtaText={ primaryCtaText }
				primaryCtaUrl={ primaryCtaUrl }
				primaryCtaOpensInNewTab={ primaryCtaOpensInNewTab }
				secondaryCtaText={ secondaryCtaText }
				secondaryCtaUrl={ secondaryCtaUrl }
				secondaryCtaOpensInNewTab={ secondaryCtaOpensInNewTab }
			/>

			<HeroStatsSave stats={ stats } />
		</div>
	);
}
