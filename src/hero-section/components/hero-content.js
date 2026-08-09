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
		<div className="saas-hero__content">
			<div className="saas-hero__eyebrow">
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
				className="saas-hero__heading"
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
				placeholder={ __( 'Heading…', 'saas-block-theme' ) }
				allowedFormats={ [ 'core/text-color' ] }
			/>

			<RichText
				tagName="p"
				className="saas-hero__description"
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
		<div className="saas-hero__content">
			<div className="saas-hero__eyebrow">
				<SparklesIcon />
				<RichText.Content tagName="span" value={ eyebrow } />
			</div>

			<RichText.Content
				tagName="h1"
				className="saas-hero__heading"
				value={ heading }
			/>

			<RichText.Content
				tagName="p"
				className="saas-hero__description"
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
