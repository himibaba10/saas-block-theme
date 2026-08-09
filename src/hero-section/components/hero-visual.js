import { __ } from '@wordpress/i18n';

function getHeroImageUrl( imageUrl ) {
	if ( imageUrl ) {
		return imageUrl;
	}

	return window?.saasBlockTheme?.heroVisualUrl || '';
}

export function HeroVisual( {
	imageUrl,
	imageAlt,
	agentsLabel,
	agentsValue,
	onSelectImage,
	isSelected,
} ) {
	const src = getHeroImageUrl( imageUrl );

	return (
		<div className="saas-hero__visual">
			<div className="saas-hero__visual-glow" aria-hidden="true" />
			{ src ? (
				<img
					className="saas-hero__image"
					src={ src }
					alt={ imageAlt || '' }
					width={ 1280 }
					height={ 1024 }
				/>
			) : (
				<div className="saas-hero__image saas-hero__image--placeholder">
					{ __( 'Add hero image', 'saas-block-theme' ) }
				</div>
			) }
			{ typeof onSelectImage === 'function' && isSelected && (
				<button
					type="button"
					className="saas-hero__replace-image"
					onClick={ onSelectImage }
				>
					{ __( 'Replace image', 'saas-block-theme' ) }
				</button>
			) }
			<div className="saas-hero__agents">
				<p className="saas-hero__agents-label">{ agentsLabel }</p>
				<p className="saas-hero__agents-value">{ agentsValue }</p>
				<div className="saas-hero__agents-bar" aria-hidden="true">
					<span className="saas-hero__agents-bar-fill" />
				</div>
			</div>
		</div>
	);
}
