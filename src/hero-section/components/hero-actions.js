import {
  __experimentalLinkControl as LinkControl,
  RichText,
} from '@wordpress/block-editor';
import { Popover } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { ArrowRightIcon } from './icons';

function CtaButton({
  className,
  text,
  url,
  opensInNewTab,
  placeholder,
  showArrow,
  textAttribute,
  urlAttribute,
  opensInNewTabAttribute,
  setAttributes,
  isOpen,
  onOpen,
  onClose,
}) {
  const wrapRef = useRef(null);

  return (
    <div className='relative inline-flex' ref={wrapRef}>
      <a
        className={className}
        href={url || '#'}
        onClick={(event) => {
          event.preventDefault();
          onOpen();
        }}
      >
        <RichText
          tagName='span'
          value={text}
          onChange={(value) => setAttributes({ [textAttribute]: value })}
          placeholder={placeholder}
          allowedFormats={[]}
          withoutInteractiveFormatting
        />
        {showArrow && <ArrowRightIcon />}
      </a>
      {isOpen && (
        <Popover
          anchor={wrapRef.current}
          onClose={onClose}
          placement='bottom'
          offset={8}
        >
          <LinkControl
            value={{
              url,
              opensInNewTab,
            }}
            onChange={(next) => {
              setAttributes({
                [urlAttribute]: next?.url || '',
                [opensInNewTabAttribute]: !!next?.opensInNewTab,
              });
            }}
            onRemove={() => {
              setAttributes({
                [urlAttribute]: '',
                [opensInNewTabAttribute]: false,
              });
              onClose();
            }}
          />
        </Popover>
      )}
    </div>
  );
}

export function HeroActionsEdit({
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
  setAttributes,
  isSelected,
}) {
  const [openLink, setOpenLink] = useState(null);

  useEffect(() => {
    if (!isSelected) {
      setOpenLink(null);
    }
  }, [isSelected]);

  return (
    <div className='mt-9 flex flex-wrap items-center gap-3'>
      <CtaButton
        className='inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-small font-semibold text-surface! no-underline shadow-lift transition-[color,background-color,border-color] duration-150 ease-in-out hover:bg-primary-soft hover:text-surface'
        text={primaryCtaText}
        url={primaryCtaUrl}
        opensInNewTab={primaryCtaOpensInNewTab}
        placeholder={__('Primary CTA…', 'saas-block-theme')}
        showArrow
        textAttribute='primaryCtaText'
        urlAttribute='primaryCtaUrl'
        opensInNewTabAttribute='primaryCtaOpensInNewTab'
        setAttributes={setAttributes}
        isOpen={openLink === 'primary'}
        onOpen={() => setOpenLink('primary')}
        onClose={() => setOpenLink(null)}
      />
      <CtaButton
        className='inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-small font-semibold text-ink no-underline transition-[color,background-color,border-color] duration-150 ease-in-out hover:border-primary hover:text-primary'
        text={secondaryCtaText}
        url={secondaryCtaUrl}
        opensInNewTab={secondaryCtaOpensInNewTab}
        placeholder={__('Secondary CTA…', 'saas-block-theme')}
        textAttribute='secondaryCtaText'
        urlAttribute='secondaryCtaUrl'
        opensInNewTabAttribute='secondaryCtaOpensInNewTab'
        setAttributes={setAttributes}
        isOpen={openLink === 'secondary'}
        onOpen={() => setOpenLink('secondary')}
        onClose={() => setOpenLink(null)}
      />
    </div>
  );
}

export function HeroActionsSave({
  primaryCtaText,
  primaryCtaUrl,
  primaryCtaOpensInNewTab,
  secondaryCtaText,
  secondaryCtaUrl,
  secondaryCtaOpensInNewTab,
}) {
  return (
    <div className='mt-9 flex flex-wrap items-center gap-3'>
      <a
        className='inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-small font-semibold text-surface! no-underline shadow-lift transition-[color,background-color,border-color] duration-150 ease-in-out hover:bg-primary-soft hover:text-surface'
        href={primaryCtaUrl || '#'}
        {...(primaryCtaOpensInNewTab
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
      >
        <RichText.Content tagName='span' value={primaryCtaText} />
        <ArrowRightIcon />
      </a>
      <a
        className='inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-small font-semibold text-ink no-underline transition-[color,background-color,border-color] duration-150 ease-in-out hover:border-primary hover:text-primary'
        href={secondaryCtaUrl || '#'}
        {...(secondaryCtaOpensInNewTab
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
      >
        <RichText.Content tagName='span' value={secondaryCtaText} />
      </a>
    </div>
  );
}
