import { useId } from 'react'
import { MARK, MARK_VIEWBOX } from './logoGeometry.js'

/** The sabal palm mark alone. `tone` picks the gold for dark or light backgrounds. */
export function PalmMark({ className = '', tone = 'gold', title }) {
  // Unique per instance: a shared id would resolve to a gradient inside a hidden
  // (display:none) copy of the mark and the palm would not paint.
  const id = `sabal-gold-${useId().replace(/:/g, '')}`
  const stops =
    tone === 'mono'
      ? ['currentColor', 'currentColor', 'currentColor']
      : ['#D9B86A', '#BF9449', '#9A7230']
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset=".55" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${id})`} strokeLinecap="round" strokeLinejoin="round">
        <path d={MARK.spines} strokeWidth="1.5" />
        <path d={MARK.petioles} strokeWidth="2.2" />
        <path d={MARK.roots} strokeWidth="2.6" />
        <path d={MARK.ground} strokeWidth="1.6" />
      </g>
      <path d={MARK.trunk} fill={`url(#${id})`} />
      <path d={MARK.hatch} fill="none" stroke="#3A2A0E" strokeOpacity=".45" strokeWidth="1" />
    </svg>
  )
}

/**
 * Full lockup: mark + "Sabal" + rule + "TAX & ESTATE LAW, LLP".
 * variant: "dark" (cream text, for navy backgrounds) or "light" (navy text, for cream backgrounds).
 */
export function Logo({ variant = 'light', size = 'md', className = '' }) {
  const text = variant === 'dark' ? 'text-cream' : 'text-navy'
  const rule = variant === 'dark' ? 'bg-gold' : 'bg-bronze'
  const sizes = {
    sm: { mark: 'h-10', word: 'text-[1.75rem]', sub: 'text-[0.56rem]', gap: 'gap-2.5' },
    md: { mark: 'h-14', word: 'text-[2.5rem]', sub: 'text-[0.72rem]', gap: 'gap-3' },
    lg: { mark: 'h-28', word: 'text-[4.5rem] md:text-[5.5rem]', sub: 'text-[0.95rem] md:text-[1.15rem]', gap: 'gap-6' },
  }[size]
  return (
    <span className={`inline-flex items-center ${sizes.gap} ${text} ${className}`}>
      <PalmMark className={`${sizes.mark} w-auto shrink-0`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-semibold ${sizes.word} leading-[0.9] tracking-tight`}>Sabal</span>
        <span className={`${rule} mt-1.5 h-px w-full`} aria-hidden="true" />
        <span className={`font-serif font-medium uppercase ${sizes.sub} mt-1.5 tracking-[0.22em] whitespace-nowrap`}>
          Tax &amp; Estate Law, LLP
        </span>
      </span>
    </span>
  )
}
