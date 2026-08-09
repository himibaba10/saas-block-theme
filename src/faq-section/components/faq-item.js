import { RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function FaqToggleIcon() {
  return (
    <span
      className='saas-faq__icon flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-transform duration-300 ease-out text-2xl'
      aria-hidden='true'
    >
      +
    </span>
  );
}

export function FaqItemEdit({
  question,
  answer,
  onChangeQuestion,
  onChangeAnswer,
  onRemove,
  canRemove,
}) {
  return (
    <div className='relative rounded-2xl border border-border-soft bg-surface px-6 py-5'>
      {canRemove && (
        <div className='absolute top-3 right-3'>
          <Button
            variant='tertiary'
            isDestructive
            size='small'
            onClick={onRemove}
          >
            {__('Remove', 'saas-block-theme')}
          </Button>
        </div>
      )}
      <div className='flex items-start justify-between gap-4 pr-16'>
        <RichText
          tagName='h3'
          className='m-0 text-large font-semibold text-ink'
          value={question}
          onChange={onChangeQuestion}
          placeholder={__('Question…', 'saas-block-theme')}
          allowedFormats={[]}
        />
        <FaqToggleIcon />
      </div>
      <RichText
        tagName='p'
        className='mt-3 mb-0 max-w-3xl text-[1.125rem] leading-6.5 text-muted'
        value={answer}
        onChange={onChangeAnswer}
        placeholder={__('Answer…', 'saas-block-theme')}
        allowedFormats={[]}
      />
    </div>
  );
}

export function FaqItemSave({ question, answer }) {
  return (
    <div className='saas-faq__item rounded-2xl border border-border-soft bg-surface px-6 py-5'>
      <h3 className='m-0'>
        <button
          type='button'
          className='saas-faq__trigger flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent p-0 text-left'
          aria-expanded='false'
        >
          <RichText.Content
            tagName='span'
            className='text-large font-semibold text-ink'
            value={question}
          />
          <FaqToggleIcon />
        </button>
      </h3>
      <div className='saas-faq__panel' aria-hidden='true'>
        <div className='saas-faq__panel-inner'>
          <RichText.Content
            tagName='p'
            className='mt-3 mb-0 max-w-3xl text-[1.125rem] leading-6.5 text-muted'
            value={answer}
          />
        </div>
      </div>
    </div>
  );
}
