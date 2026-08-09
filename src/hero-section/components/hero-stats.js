import { RichText } from '@wordpress/block-editor';

export function HeroStatsEdit({ stats, setAttributes }) {
  const updateStat = (index, key, value) => {
    const next = stats.map((stat, i) =>
      i === index ? { ...stat, [key]: value } : stat,
    );
    setAttributes({ stats: next });
  };

  return (
    <dl className='mt-14 mb-0 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8'>
      {stats.map((stat, index) => (
        <div key={index} className='m-0'>
          <RichText
            tagName='dt'
            className='m-0 text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-[-0.02em]'
            value={stat.value}
            onChange={(value) => updateStat(index, 'value', value)}
            allowedFormats={[]}
          />
          <RichText
            tagName='dd'
            className='mt-1 mb-0 ml-0 text-x-small text-muted'
            value={stat.label}
            onChange={(value) => updateStat(index, 'label', value)}
            allowedFormats={[]}
          />
        </div>
      ))}
    </dl>
  );
}

export function HeroStatsSave({ stats }) {
  return (
    <dl className='mt-14 mb-0 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8'>
      {stats.map((stat, index) => (
        <div key={index} className='m-0'>
          <RichText.Content
            tagName='dt'
            className='m-0 text-[clamp(1.5rem,1.2rem+1vw,1.875rem)] font-semibold tracking-[-0.02em]'
            value={stat.value}
          />
          <RichText.Content
            tagName='dd'
            className='mt-1 mb-0 ml-0 text-x-small text-muted'
            value={stat.label}
          />
        </div>
      ))}
    </dl>
  );
}
