import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';

import { HeroVisual } from './hero-visual';

export function HeroVisualEdit( {
	imageId,
	imageUrl,
	imageAlt,
	agentsLabel,
	agentsValue,
	isSelected,
	onSelectImage,
	setAttributes,
} ) {
	return (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={ onSelectImage }
				allowedTypes={ [ 'image' ] }
				value={ imageId }
				render={ ( { open } ) => (
					<HeroVisual
						imageUrl={ imageUrl }
						imageAlt={ imageAlt }
						agentsLabel={
							<RichText
								tagName="span"
								value={ agentsLabel }
								onChange={ ( value ) =>
									setAttributes( { agentsLabel: value } )
								}
								allowedFormats={ [] }
							/>
						}
						agentsValue={
							<RichText
								tagName="span"
								value={ agentsValue }
								onChange={ ( value ) =>
									setAttributes( { agentsValue: value } )
								}
								allowedFormats={ [] }
							/>
						}
						onSelectImage={ open }
						isSelected={ isSelected }
					/>
				) }
			/>
		</MediaUploadCheck>
	);
}

export function HeroVisualSave( {
	imageUrl,
	imageAlt,
	agentsLabel,
	agentsValue,
} ) {
	return (
		<HeroVisual
			imageUrl={ imageUrl }
			imageAlt={ imageAlt }
			agentsLabel={ agentsLabel }
			agentsValue={ agentsValue }
		/>
	);
}
