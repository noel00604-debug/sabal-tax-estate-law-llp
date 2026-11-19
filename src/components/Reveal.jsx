/**
 * Lifts children into view as they scroll on screen, using a CSS scroll-driven
 * animation (see .reveal in index.css). Browsers without support simply show the
 * content, so the page is always complete at rest and needs no observer script.
 */
export function Reveal({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>
}

/** Accessible accordion built on <details>, styled for the site. */
export function Accordion({ items }) {
  return (
    <div className="divide-y divide-line rounded-sm border border-line bg-white">
      {items.map(([q, a]) => (
        <details key={q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold text-navy marker:content-none hover:bg-cream/60 [&::-webkit-details-marker]:hidden">
            {q}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-bronze transition-transform group-open:rotate-45" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <div className="px-5 pb-5 text-ink-soft">{a}</div>
        </details>
      ))}
    </div>
  )
}
