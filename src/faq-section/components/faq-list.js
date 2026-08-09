import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { FaqItemEdit, FaqItemSave } from './faq-item';

export function FaqListEdit( { faqs = [], setAttributes } ) {
	const updateFaq = ( index, key, value ) => {
		const next = faqs.map( ( faq, i ) =>
			i === index ? { ...faq, [ key ]: value } : faq
		);
		setAttributes( { faqs: next } );
	};

	const addFaq = () => {
		setAttributes( {
			faqs: [
				...faqs,
				{
					question: '',
					answer: '',
				},
			],
		} );
	};

	const removeFaq = ( index ) => {
		if ( faqs.length <= 1 ) {
			return;
		}

		setAttributes( {
			faqs: faqs.filter( ( _, i ) => i !== index ),
		} );
	};

	return (
		<div className="flex flex-col gap-4">
			{ faqs.map( ( faq, index ) => (
				<FaqItemEdit
					key={ index }
					question={ faq.question }
					answer={ faq.answer }
					onChangeQuestion={ ( value ) =>
						updateFaq( index, 'question', value )
					}
					onChangeAnswer={ ( value ) =>
						updateFaq( index, 'answer', value )
					}
					onRemove={ () => removeFaq( index ) }
					canRemove={ faqs.length > 1 }
				/>
			) ) }

			<Button variant="secondary" onClick={ addFaq }>
				{ __( 'Add FAQ', 'saas-block-theme' ) }
			</Button>
		</div>
	);
}

export function FaqListSave( { faqs = [] } ) {
	return (
		<div className="flex flex-col gap-4">
			{ faqs.map( ( faq, index ) => (
				<FaqItemSave
					key={ index }
					question={ faq.question }
					answer={ faq.answer }
				/>
			) ) }
		</div>
	);
}
