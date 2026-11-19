import { PageHeader, PalmDivider, Section, SectionTitle } from '../components/ui.jsx'
import { PARTNERS } from '../content.js'

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Our Partners"
        title="Four partners. One practice area each. One management portfolio each."
        intro="Every partner leads one area of practice and owns one part of the firm, so no client matter and no firm function goes without a named owner."
      />

      <Section className="!pb-6">
        <nav aria-label="Partners" className="flex flex-wrap gap-3">
          {PARTNERS.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex min-h-12 items-center rounded-sm border border-navy/30 bg-white px-4 font-semibold text-navy hover:border-navy"
            >
              {p.name}
            </a>
          ))}
        </nav>
      </Section>

      {PARTNERS.map((p, i) => (
        <Section key={p.slug} id={p.slug} tone={i % 2 === 1 ? 'cream-dark' : 'cream'} className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm border border-line bg-white shadow-sm lg:mx-0">
                <img src={p.photo} alt={`Portrait of ${p.name}`} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="eyebrow">{p.title}</p>
              <h2 className="mt-2 text-4xl">{p.name}</h2>
              <p className="mt-2 font-serif text-2xl text-bronze-dark">Practice focused on {p.focus.toLowerCase()}</p>
              <div className="prose-sabal mt-6 text-ink-soft">
                {p.bio.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <PalmDivider />

      <Section>
        <SectionTitle
          eyebrow="How We Work"
          title="A partner on every matter"
          intro="Irrevocable instruments and transfer tax returns receive a second read by a partner who did not draft them. Clients hear from the firm within one business day, receive a written status update every 30 days, and learn of any adverse development the same day."
        />
      </Section>
    </>
  )
}
