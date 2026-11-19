import { Link } from 'react-router-dom'
import { Button, Card, Container, PalmDivider, Section, SectionTitle } from '../components/ui.jsx'
import { Logo, PalmMark } from '../components/Logo.jsx'
import { CLIENT_GROUPS, FIRM, MISSION, NAME_STORY, PRACTICE_AREAS, VALUES } from '../content.js'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy text-cream">
        <PalmMark className="pointer-events-none absolute -right-24 top-6 h-[560px] opacity-[0.07] md:-right-10" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow !text-gold-light">Boca Raton, Florida</p>
            <h1 className="mt-4 text-5xl !text-cream md:text-7xl">
              Tax, trust, and estate counsel built to endure.
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-cream/85">
              A practice focused on estate planning and wealth transfer, trust and estate administration, and tax
              controversy before the IRS and the Florida Department of Revenue. A partner leads every matter.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contact#consultation" variant="gold">
                Request a Consultation
              </Button>
              <Button to="/practice-areas" variant="outline-light">
                Explore Practice Areas
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mission */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Our Mission" title="The lawyer who builds the plan knows how plans are challenged." />
            <p className="mt-6 text-ink-soft">{NAME_STORY}</p>
          </div>
          <div className="lg:col-span-3">
            <blockquote className="border-l-4 border-gold pl-6 font-serif text-xl leading-snug text-navy md:text-2xl">
              {MISSION}
            </blockquote>
          </div>
        </div>
      </Section>

      <PalmDivider />

      {/* Practice areas */}
      <Section id="practice-areas">
        <SectionTitle
          eyebrow="Practice Areas"
          title="Three connected areas of practice"
          intro="International and inbound planning runs through all three."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((a) => (
            <Card key={a.slug} className="flex flex-col">
              <span className="font-serif text-4xl text-gold">{a.number}</span>
              <h3 className="mt-3 text-2xl">{a.title}</h3>
              <p className="mt-3 flex-1 text-ink-soft">{a.summary}</p>
              <Link
                to={`/practice-areas#${a.slug}`}
                className="mt-6 inline-flex min-h-12 items-center font-semibold text-navy underline decoration-gold decoration-2 underline-offset-8 hover:text-bronze"
              >
                Learn more
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="navy">
        <SectionTitle
          dark
          eyebrow="Core Professional Values"
          title="Values tied to operating rules"
          intro="Each value is tied to a specific operating rule, because a value with no rule behind it does not last through a busy week."
        />
        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t border-gold/50 pt-5">
              <h3 className="text-2xl !text-cream">{v.title}</h3>
              <p className="mt-2 text-cream/80">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionTitle eyebrow="Who the Firm Serves" title="Florida families, business owners, and fiduciaries" />
        <div className="mt-10 overflow-hidden rounded-sm border border-line bg-white">
          <table className="w-full text-left">
            <thead className="bg-cream-dark text-sm uppercase tracking-wider text-navy">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Client group</th>
                <th scope="col" className="px-5 py-3 font-semibold">What they typically need</th>
              </tr>
            </thead>
            <tbody>
              {CLIENT_GROUPS.map((g) => (
                <tr key={g.who} className="border-t border-line align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-navy">{g.who}</th>
                  <td className="px-5 py-4 text-ink-soft">{g.need}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Office */}
      <Section tone="cream-dark" id="office">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Our Office" title="A hybrid office anchored in Boca Raton" />
            <div className="prose-sabal mt-6 text-ink-soft">
              <p>
                The firm operates as a hybrid office anchored in a physical location. Execution ceremonies are
                supervised in person with the firm&rsquo;s own witnesses and notary, original wills are held in a
                fire-rated vault, and the office is accessible, with covered parking and a conference room suited to a
                family meeting.
              </p>
              <p>
                Secure cloud systems keep the firm running when the office is closed in hurricane season, and
                documents move only through an encrypted client portal.
              </p>
              <p>The firm opens to clients on {FIRM.opens}.</p>
            </div>
          </div>
          <Card>
            <Logo size="md" />
            <address className="mt-6 not-italic text-lg">
              <strong className="text-navy">{FIRM.name}</strong>
              <br />
              {FIRM.address1}
              <br />
              {FIRM.address2}
            </address>
            <p className="mt-4 text-ink-soft">Serving {FIRM.counties}.</p>
            <p className="mt-1 text-ink-soft">{FIRM.hours}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={FIRM.phoneHref} variant="outline">
                {FIRM.phone}
              </Button>
              <Button to="/contact" variant="primary">
                Contact the Firm
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
