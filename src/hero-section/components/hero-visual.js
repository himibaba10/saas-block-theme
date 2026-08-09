import { __ } from '@wordpress/i18n';

function getHeroImageUrl(imageUrl) {
  if (imageUrl) {
    return imageUrl;
  }

  return window?.saasBlockTheme?.heroVisualUrl || '';
}

export function HeroVisual({
  imageUrl,
  imageAlt,
  agentsLabel,
  agentsValue,
  onSelectImage,
  isSelected,
}) {
  const src = getHeroImageUrl(imageUrl);

  return (
    <div className='relative'>
      <div
        className='absolute -inset-6 rounded-[2.5rem] bg-spark/25 blur-2xl'
        aria-hidden='true'
      />
      {src ? (
        <img
          className='relative block h-auto w-full rounded-4xl border border-border-soft object-cover shadow-lift'
          src={src}
          alt={imageAlt || ''}
          width={1280}
          height={1024}
        />
      ) : (
        <div className='relative grid min-h-80 w-full place-items-center rounded-4xl border border-border-soft bg-surface text-small text-muted shadow-lift'>
          {__('Add hero image', 'saas-block-theme')}
        </div>
      )}
      {typeof onSelectImage === 'function' && isSelected && (
        <button
          type='button'
          className='absolute top-4 right-4 z-2 cursor-pointer rounded-full border-0 bg-surface px-3 py-2 text-xs font-semibold text-ink shadow-soft'
          onClick={onSelectImage}
        >
          {__('Replace image', 'saas-block-theme')}
        </button>
      )}
      <div className='absolute -bottom-6 -left-6 hidden rounded-2xl border border-border-soft bg-surface p-5 shadow-soft sm:block'>
        <p className='m-0 text-x-small text-muted'>{agentsLabel}</p>
        <p className='mt-1 mb-0 text-2xl font-semibold tracking-[-0.02em] text-primary'>
          {agentsValue}
        </p>
        <div
          className='mt-3 h-1.5 w-36 overflow-hidden rounded-full bg-background'
          aria-hidden='true'
        >
          <span className='block h-full w-4/5 rounded-[inherit] bg-spark' />
        </div>
      </div>
    </div>
  );
}
