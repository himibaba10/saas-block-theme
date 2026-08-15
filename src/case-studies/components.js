import { __ } from '@wordpress/i18n';

export function ArrowLeftIcon() {
  return (
    <svg
      className="size-4"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg
      className="size-4"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function CaseStudyCard({ study }) {
  return (
    <article className="min-w-0 flex-[0_0_100%] rounded-3xl border border-border-soft bg-surface p-9 shadow-soft sm:flex-[0_0_60%] lg:flex-[0_0_40%]">
      <div className="flex items-center justify-between gap-4">
        <span className="text-small font-semibold tracking-tight text-ink">
          {study.company}
        </span>
        {study.sector ? (
          <span className="rounded-full bg-background px-3 py-1 text-x-small text-muted">
            {study.sector}
          </span>
        ) : null}
      </div>
      <div className="mt-10 mb-0 text-5xl font-semibold tracking-tight text-primary">
        {study.metric}
      </div>
      <div className="mt-2 mb-0 text-small text-muted">{study.metricLabel}</div>
      <div className="mt-6 mb-0 border-t border-border-soft pt-6 text-small text-muted">
        {study.body}
      </div>
    </article>
  );
}

export function CaseStudiesNav({ onPrev, onNext }) {
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        aria-label={__('Previous case study', 'saas-block-theme')}
        onClick={onPrev}
        className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowLeftIcon />
      </button>
      <button
        type="button"
        aria-label={__('Next case study', 'saas-block-theme')}
        onClick={onNext}
        className="flex size-12 cursor-pointer items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary hover:text-primary"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
