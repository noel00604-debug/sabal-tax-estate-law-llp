import { Link } from 'react-router-dom'
import { PalmMark } from './Logo.jsx'
import { Reveal } from './Reveal.jsx'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ id, tone = 'cream', className = '', children }) {
  const bg = {
    cream: 'bg-cream',
    'cream-dark': 'bg-cream-dark',
    navy: 'bg-navy text-cream',
    white: 'bg-white',
  }[tone]
  return (
    <section id={id} className={`${bg} py-14 md:py-20 ${className}`}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  )
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="relative overflow-hidden bg-navy text-cream">
      <PalmMark className="pointer-events-none absolute -right-10 -bottom-16 h-[420px] opacity-[0.07]" />
      <Container className="relative py-16 md:py-24">
        {eyebrow && <p className="eyebrow !text-gold-light">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-4xl !text-cream md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-3xl text-lg text-cream/85 md:text-xl">{intro}</p>}
      </Container>
    </div>
  )
}

export function SectionTitle({ eyebrow, title, intro, align = 'left', dark = false }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className={`eyebrow ${dark ? '!text-gold-light' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-2 text-3xl md:text-5xl ${dark ? '!text-cream' : ''}`}>{title}</h2>
      {intro && <p className={`mt-4 text-lg ${dark ? 'text-cream/85' : 'text-ink-soft'}`}>{intro}</p>}
    </div>
  )
}

export function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const base =
    'inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-base font-semibold transition-colors focus-visible:outline-gold'
  const styles = {
    primary: 'bg-navy text-cream hover:bg-navy-700',
    gold: 'bg-gold text-navy hover:bg-gold-light',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-cream',
    'outline-light': 'border-2 border-cream/80 text-cream hover:bg-cream hover:text-navy',
  }[variant]
  const cls = `${base} ${styles} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}

/** Thin gold rule with the palm mark in the middle, used between major sections. */
export function PalmDivider({ dark = false }) {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className={`h-px w-16 md:w-32 ${dark ? 'bg-gold/60' : 'bg-bronze/40'}`} />
      <PalmMark className="h-9" />
      <span className={`h-px w-16 md:w-32 ${dark ? 'bg-gold/60' : 'bg-bronze/40'}`} />
    </div>
  )
}

export function Card({ className = '', children }) {
  return (
    <div className={`card-hover rounded-sm border border-line bg-white p-6 shadow-[0_1px_0_rgba(11,26,51,0.04)] md:p-8 ${className}`}>
      {children}
    </div>
  )
}

export function Notice({ children, className = '' }) {
  return (
    <div className={`rounded-sm border-l-4 border-gold bg-white/70 px-5 py-4 text-ink-soft ${className}`}>{children}</div>
  )
}
