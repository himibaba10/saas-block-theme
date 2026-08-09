import { useBlockProps } from '@wordpress/block-editor';

import { FaqHeadingSave } from './components/faq-heading';
import { FaqListSave } from './components/faq-list';

export default function save( { attributes } ) {
	const { heading, faqs = [] } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'saas-faq',
	} );

	return (
		<section { ...blockProps }>
			<div className="relative mx-auto max-w-content px-section py-20">
				<FaqHeadingSave heading={ heading } />
				<FaqListSave faqs={ faqs } />
			</div>
		</section>
	);
}
