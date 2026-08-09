import {
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function HeroImageInspector( {
	imageId,
	imageUrl,
	imageAlt,
	onSelectImage,
	setAttributes,
} ) {
	return (
		<PanelBody
			title={ __( 'Hero image', 'saas-block-theme' ) }
			initialOpen={ false }
		>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes={ [ 'image' ] }
					value={ imageId }
					render={ ( { open } ) => (
						<Button variant="secondary" onClick={ open }>
							{ imageUrl
								? __( 'Replace image', 'saas-block-theme' )
								: __( 'Select image', 'saas-block-theme' ) }
						</Button>
					) }
				/>
			</MediaUploadCheck>
			{ imageUrl && (
				<Button
					variant="link"
					isDestructive
					onClick={ () =>
						setAttributes( {
							imageId: 0,
							imageUrl:
								window.saasBlockTheme?.heroVisualUrl || '',
						} )
					}
					style={ { marginTop: '8px' } }
				>
					{ __( 'Reset to theme default', 'saas-block-theme' ) }
				</Button>
			) }
			<TextControl
				label={ __( 'Image alt text', 'saas-block-theme' ) }
				value={ imageAlt }
				onChange={ ( value ) =>
					setAttributes( { imageAlt: value } )
				}
			/>
		</PanelBody>
	);
}
