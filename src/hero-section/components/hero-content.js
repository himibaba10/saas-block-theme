import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { HeroActionsEdit, HeroActionsSave } from './hero-actions';
import { HeroStatsEdit, HeroStatsSave } from './hero-stats';
import { SparklesIcon } from './icons';

export function HeroContentEdit({
  eyebrow,
  headingBefore,
  headingHighlight,
  headingAfter,
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
}) {
  return (
    <div className='saas-hero__content'>
      <div className='saas-hero__eyebrow'>
        <SparklesIcon />
        <RichText
          tagName='span'
          value={eyebrow}
          onChange={(value) => setAttributes({ eyebrow: value })}
          placeholder={__('Eyebrow text…', 'saas-block-theme')}
          allowedFormats={[]}
        />
      </div>

      <h1 className='saas-hero__heading'>
        <RichText
          tagName='span'
          value={headingBefore}
          onChange={(value) => setAttributes({ headingBefore: value })}
          placeholder={__('Heading…', 'saas-block-theme')}
          allowedFormats={[]}
        />
        <RichText
          tagName='span'
          className='saas-hero__heading-highlight'
          value={headingHighlight}
          onChange={(value) => setAttributes({ headingHighlight: value })}
          placeholder={__('Highlight…', 'saas-block-theme')}
          allowedFormats={[]}
        />
        <RichText
          tagName='span'
          value={headingAfter}
          onChange={(value) => setAttributes({ headingAfter: value })}
          placeholder={__('Heading end…', 'saas-block-theme')}
          allowedFormats={[]}
        />
      </h1>

      <RichText
        tagName='p'
        className='saas-hero__description'
        value={description}
        onChange={(value) => setAttributes({ description: value })}
        placeholder={__('Description…', 'saas-block-theme')}
        allowedFormats={[]}
      />

      <HeroActionsEdit
        primaryCtaText={primaryCtaText}
        primaryCtaUrl={primaryCtaUrl}
        primaryCtaOpensInNewTab={primaryCtaOpensInNewTab}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaUrl={secondaryCtaUrl}
        secondaryCtaOpensInNewTab={secondaryCtaOpensInNewTab}
        setAttributes={setAttributes}
        isSelected={isSelected}
      />

      <HeroStatsEdit stats={stats} setAttributes={setAttributes} />
    </div>
  );
}

export function HeroContentSave({
  eyebrow,
  headingBefore,
  headingHighlight,
  headingAfter,
  description,
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
  stats,
}) {
  return (
    <div className='saas-hero__content'>
      <div className='saas-hero__eyebrow'>
        <SparklesIcon />
        <RichText.Content tagName='span' value={eyebrow} />
      </div>

      <h1 className='saas-hero__heading'>
        <RichText.Content tagName='span' value={headingBefore} />
        <RichText.Content
          tagName='span'
          className='saas-hero__heading-highlight'
          value={headingHighlight}
        />
        <RichText.Content tagName='span' value={headingAfter} />
      </h1>

      <RichText.Content
        tagName='p'
        className='saas-hero__description'
        value={description}
      />

      <HeroActionsSave
        primaryCtaText={primaryCtaText}
        primaryCtaUrl={primaryCtaUrl}
        primaryCtaOpensInNewTab={primaryCtaOpensInNewTab}
        secondaryCtaText={secondaryCtaText}
        secondaryCtaUrl={secondaryCtaUrl}
        secondaryCtaOpensInNewTab={secondaryCtaOpensInNewTab}
      />

      <HeroStatsSave stats={stats} />
    </div>
  );
}
