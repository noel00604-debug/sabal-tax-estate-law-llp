import { Link } from 'react-router-dom'
import { Button, Card, Notice, PageHeader, PalmDivider, Section, SectionTitle } from '../components/ui.jsx'
import { FIRM, INTERNATIONAL, NOT_HANDLED, PRACTICE_AREAS } from '../content.js'

export default function PracticeAreas() {
  return (
    <>
      <PageHeader
        eyebrow="Practice Areas"
        title="Three connected areas, one standard of care"
        intro="Planning work is paired with controversy work on purpose: a lawyer who has defended a valuation on audit drafts differently from one who has not."
      />

      <Section className="!py-8">
        <nav aria-label="On this page" className="flex flex-wrap gap-3">
          {PRACTICE_AREAS.map((a) => (
            <a
              key={a.slug}
              href={`#${a.slug}`}
              className="inline-flex min-h-12 items-center rounded-sm border border-navy/30 bg-white px-4 font-semibold text-navy hover:border-navy"
            >
              {a.number} &nbsp;{a.title}
            </a>
          ))}
          <a
            href="#international"
            className="inline-flex min-h-12 items-center rounded-sm border border-navy/30 bg-white px-4 font-semibold text-navy hover:border-navy"
          >
            International &amp; Inbound
          </a>
          <a
            href="#not-handled"
            className="inline-flex min-h-12 items-center rounded-sm border border-navy/30 bg-white px-4 font-semibold text-navy hover:border-navy"
          >
            What We Do Not Handle
          </a>
        </nav>
      </Section>

      {PRACTICE_AREAS.map((a, i) => (
        <Section key={a.slug} id={a.slug} tone={i % 2 === 1 ? 'cream-dark' : 'cream'} className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <span className="font-serif text-6xl text-gold">{a.number}</span>
              <h2 className="mt-2 text-3xl md:text-4xl">{a.title}</h2>
              <p className="mt-4 text-ink-soft">
                Led by{' '}
                <Link to="/partners" className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">
                  {a.lead}
                </Link>
              </p>
            </div>
            <div className="prose-sabal lg:col-span-2">
              <h3 className="text-2xl">What this work includes</h3>
              <ul className="text-ink-soft">
                {a.what.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <h3 className="mt-8 text-2xl">How the firm approaches it</h3>
              <p className="mt-3 text-ink-soft">{a.how}</p>
              <h3 className="mt-8 text-2xl">How this work is priced</h3>
              <p className="mt-3 text-ink-soft">{a.fees} Every fee is agreed in writing before work begins, and no fee is nonrefundable.</p>
            </div>
          </div>
        </Section>
      ))}

      <Section id="international" tone="navy" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="eyebrow !text-gold-light">Across all three areas</p>
            <h2 className="mt-2 text-3xl !text-cream md:text-4xl">{INTERNATIONAL.title}</h2>
            <p className="mt-4 text-cream/80">
              Led by{' '}
              <Link to="/partners" className="font-semibold text-cream underline decoration-gold decoration-2 underline-offset-4">
                {INTERNATIONAL.lead}
              </Link>
            </p>
          </div>
          <div className="prose-sabal lg:col-span-2">
            <p className="text-cream/90">{INTERNATIONAL.text}</p>
            <ul className="text-cream/85">
              {INTERNATIONAL.items.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="not-handled" className="scroll-mt-24">
        <SectionTitle
          eyebrow="Scope of Practice"
          title="What the firm does not handle"
          intro="The practice is deliberately limited to tax, trusts, and estates. Matters outside those areas are referred in writing to qualified counsel, with no compensation to the firm."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {NOT_HANDLED.map((n) => (
            <Card key={n.title}>
              <h3 className="text-2xl">{n.title}</h3>
              <p className="mt-2 text-ink-soft">{n.text}</p>
            </Card>
          ))}
        </div>
        <Notice className="mt-8">
          Referral resources include The Florida Bar Lawyer Referral Service and, for qualifying taxpayers, Low Income
          Taxpayer Clinics.
        </Notice>
      </Section>

      <PalmDivider />

      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl">Ready to talk with a partner?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
          Initial consultations are {FIRM.consultationFee}. The fee is for the consultation only, is not a retainer,
          and is credited toward the fee if the firm is engaged.
        </p>
        <Button to="/contact#consultation" className="mt-8">
          Request a Consultation
        </Button>
      </Section>
    </>
  )
}
