import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const headingClassName =
  'mt-0 mb-10 text-[clamp(2rem,1.5rem+2vw,3rem)] font-semibold tracking-[-0.03em] text-ink';

export function FaqHeadingEdit({ heading, setAttributes }) {
  return (
    <RichText
      tagName='h2'
      className={headingClassName}
      value={heading}
      onChange={(value) => setAttributes({ heading: value })}
      placeholder={__('FAQ heading…', 'saas-block-theme')}
      allowedFormats={['core/text-color']}
    />
  );
}

export function FaqHeadingSave({ heading }) {
  return (
    <RichText.Content
      tagName='h2'
      className={headingClassName}
      value={heading}
    />
  );
}
