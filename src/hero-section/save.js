import { useBlockProps } from '@wordpress/block-editor';

import { HeroBackdrop } from './components/hero-backdrop';
import { HeroContentSave } from './components/hero-content';
import { HeroVisualSave } from './components/hero-visual-side';

export default function save( { attributes } ) {
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
		imageUrl,
		imageAlt,
		agentsLabel,
		agentsValue,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'saas-hero',
		id: 'top',
	} );

	return (
		<section { ...blockProps }>
			<HeroBackdrop />

			<div className="saas-hero__inner">
				<HeroContentSave
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
				/>

				<HeroVisualSave
					imageUrl={ imageUrl }
					imageAlt={ imageAlt }
					agentsLabel={ agentsLabel }
					agentsValue={ agentsValue }
				/>
			</div>
		</section>
	);
}
