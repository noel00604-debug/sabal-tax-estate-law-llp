import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Logo, PalmMark } from './Logo.jsx'
import { Container } from './ui.jsx'
import { FIRM } from '../content.js'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/partners', label: 'Our Partners' },
  { to: '/advisors', label: 'For Advisors' },
  { to: '/contact', label: 'Contact' },
]

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const go = () => {
      if (hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) {
          el.scrollIntoView({ block: 'start', behavior: 'instant' })
          return
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
    go()
    // Run once more after paint so a late layout shift cannot leave us mid-page.
    const id = requestAnimationFrame(go)
    return () => cancelAnimationFrame(id)
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  const linkCls = ({ isActive }) =>
    `whitespace-nowrap rounded-sm px-2.5 py-2 text-[0.95rem] font-semibold transition-colors xl:px-3 xl:text-base ${
      isActive ? 'text-navy underline decoration-gold decoration-2 underline-offset-8' : 'text-ink-soft hover:text-navy'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link to="/" className="rounded-sm" aria-label={`${FIRM.name} home`}>
          <span className="block md:hidden">
            <Logo size="sm" />
          </span>
          <span className="hidden md:block">
            <Logo size="md" />
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={linkCls}>
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact#consultation"
            className="ml-2 inline-flex min-h-12 items-center whitespace-nowrap rounded-sm bg-navy px-4 py-2 text-[0.95rem] font-semibold text-cream hover:bg-navy-700 xl:ml-3 xl:px-5 xl:text-base"
          >
            <span className="xl:hidden">Consultation</span>
            <span className="hidden xl:inline">Request a Consultation</span>
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>
      {open && (
        <nav id="mobile-nav" className="border-t border-line bg-cream lg:hidden" aria-label="Primary mobile">
          <Container className="flex flex-col py-2">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `border-b border-line/70 py-4 text-lg font-semibold ${isActive ? 'text-navy' : 'text-ink-soft'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact#consultation"
              className="my-4 inline-flex min-h-12 items-center justify-center rounded-sm bg-navy px-5 text-base font-semibold text-cream"
            >
              Request a Consultation
            </Link>
          </Container>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <PalmMark className="pointer-events-none absolute -left-16 -bottom-20 h-[380px] opacity-[0.06]" />
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="dark" size="md" />
            <p className="mt-5 max-w-xs text-cream/80">
              A practice focused on estate planning and wealth transfer, trust and estate administration, and tax controversy.
            </p>
          </div>
          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] !text-gold-light">Office</h2>
            <address className="mt-4 not-italic text-cream/90">
              {FIRM.address1}
              <br />
              {FIRM.address2}
              <br />
              <a className="mt-3 inline-block underline decoration-gold/70 underline-offset-4 hover:text-gold-light" href={FIRM.phoneHref}>
                {FIRM.phone}
              </a>
              <br />
              <a className="inline-block underline decoration-gold/70 underline-offset-4 hover:text-gold-light" href={`mailto:${FIRM.email}`}>
                {FIRM.email}
              </a>
            </address>
            <p className="mt-3 text-cream/70">Serving {FIRM.counties}.</p>
          </div>
          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] !text-gold-light">Navigate</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/90 hover:text-gold-light">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact#consultation" className="text-cream/90 hover:text-gold-light">
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/15 pt-8">
          <p className="text-lg font-semibold text-cream">{FIRM.notice}</p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-cream/70">
            This website is for general information and is not legal advice. Viewing it, contacting the firm, or
            submitting a form does not create an attorney-client relationship. The firm represents you only after you
            sign an engagement letter. Initial consultations are {FIRM.consultationFee}; the fee is for the consultation
            only, is not a retainer, and is credited toward the fee if the firm is engaged. Sabal Tax &amp; Estate Law, LLP
            is a Florida limited liability partnership. &copy; {new Date().getFullYear()} {FIRM.name}.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-navy focus:px-4 focus:py-3 focus:text-cream"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
