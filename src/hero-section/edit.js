import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

import { HeroBackdrop } from './components/hero-backdrop';
import { HeroContentEdit } from './components/hero-content';
import { HeroImageInspector } from './components/hero-image-inspector';
import { HeroVisualEdit } from './components/hero-visual-side';

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const {
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
		imageId,
		imageUrl,
		imageAlt,
		agentsLabel,
		agentsValue,
	} = attributes;

	useEffect( () => {
		if ( ! imageUrl && window.saasBlockTheme?.heroVisualUrl ) {
			setAttributes( {
				imageUrl: window.saasBlockTheme.heroVisualUrl,
			} );
		}
	}, [] );

	const blockProps = useBlockProps( {
		className: 'saas-hero relative overflow-hidden text-ink',
		id: 'top',
	} );

	const onSelectImage = ( media ) => {
		setAttributes( {
			imageId: media.id,
			imageUrl: media.url,
			imageAlt: media.alt || imageAlt || '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<HeroImageInspector
					imageId={ imageId }
					imageUrl={ imageUrl }
					imageAlt={ imageAlt }
					onSelectImage={ onSelectImage }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>

			<section { ...blockProps }>
				<HeroBackdrop />

				<div className="relative mx-auto grid max-w-content items-center gap-14 px-section py-20 pb-24 lg:grid-cols-2 lg:pt-28">
					<HeroContentEdit
						eyebrow={ eyebrow }
						heading={ heading }
						description={ description }
						primaryCtaText={ primaryCtaText }
						primaryCtaUrl={ primaryCtaUrl }
						primaryCtaOpensInNewTab={ primaryCtaOpensInNewTab }
						secondaryCtaText={ secondaryCtaText }
						secondaryCtaUrl={ secondaryCtaUrl }
						secondaryCtaOpensInNewTab={ secondaryCtaOpensInNewTab }
						stats={ stats }
						setAttributes={ setAttributes }
						isSelected={ isSelected }
					/>

					<HeroVisualEdit
						imageId={ imageId }
						imageUrl={ imageUrl }
						imageAlt={ imageAlt }
						agentsLabel={ agentsLabel }
						agentsValue={ agentsValue }
						isSelected={ isSelected }
						onSelectImage={ onSelectImage }
						setAttributes={ setAttributes }
					/>
				</div>
			</section>
		</>
	);
}
