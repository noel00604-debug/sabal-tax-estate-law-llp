import { useState } from 'react'
import { Button, Card, Notice, PageHeader, PalmDivider, Section, SectionTitle } from '../components/ui.jsx'
import { FIRM } from '../content.js'

const AUDIENCES = [
  {
    title: 'CPAs and accountants',
    text: 'Coordinated handling of examinations, Appeals, and collection matters, with your client returned to you promptly and copies of agency correspondence on request with the client’s consent.',
  },
  {
    title: 'Wealth advisors',
    text: 'Transfer tax planning and trust design that fits the investment plan you already manage. The firm drafts the trust and earns nothing on the policy or investment that funds it.',
  },
  {
    title: 'Trust officers',
    text: 'Counsel to corporate and individual trustees on administration, accountings, and Forms 706 and 709, with statutory fee disclosures provided before any administration matter opens.',
  },
  {
    title: 'Referring attorneys',
    text: 'A defined scope of practice and a written referral back to you for anything outside it. Any fee division follows Rule 4-1.5(g) and is disclosed to the client.',
  },
]

const TOPICS = [
  'Portability and the Form 706 election',
  'Florida homestead and domicile planning for new residents',
  'Fiduciary duties and accountings under the Florida Trust Code',
  'IRS examinations and the Independent Office of Appeals',
  'Collection alternatives and Collection Due Process',
  'Foreign trust, gift, and account reporting',
]

export default function Advisors() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="For Advisors & Resources"
        title="Education, responsiveness, and your client returned to you"
        intro="Most of the firm’s clients are sent by accountants, wealth advisors, trust officers, and other lawyers. The firm invests in educating those professionals and pays nothing, in money or in kind, for a referral."
      />

      <Section>
        <SectionTitle eyebrow="Who We Work With" title="A working relationship, not a referral fee" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a) => (
            <Card key={a.title}>
              <h3 className="text-2xl">{a.title}</h3>
              <p className="mt-2 text-ink-soft">{a.text}</p>
            </Card>
          ))}
        </div>
        <Notice className="mt-8">
          The firm does not pay for referrals and does not accept them in exchange for anything of value (Rules 4-7.17
          and 4-5.4). Reciprocal referral arrangements are entered only if nonexclusive and disclosed to the client.
          Without the client&rsquo;s consent, the firm will not tell a referral source whether the person engaged the firm.
        </Notice>
      </Section>

      <Section tone="navy" id="education">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              dark
              eyebrow="Continuing Education"
              title="CLE and CPE presentations for your team"
              intro="The partners present to CPA firms, advisory teams, trust departments, and bar sections, and publish an annual written survey of transfer tax and Florida fiduciary developments."
            />
            <p className="mt-6 text-cream/80">
              Presentations explain how mechanisms work. They do not discuss outcomes in particular matters, and no one
              is solicited afterward. Professionals who want to continue the conversation request a meeting.
            </p>
            <Button href={`mailto:${FIRM.email}?subject=CLE%20or%20CPE%20presentation%20request`} variant="gold" className="mt-8">
              Request a Presentation
            </Button>
          </div>
          <div>
            <h3 className="text-2xl !text-cream">Sample topics</h3>
            <ul className="mt-4 divide-y divide-cream/15 border-y border-cream/15">
              {TOPICS.map((t) => (
                <li key={t} className="py-3 text-cream/90">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="newsletter">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Quarterly Technical Newsletter"
              title="Subscription only. Written for professionals."
              intro="A quarterly update on federal transfer tax, Florida probate and trust law, and tax procedure, sent only to professionals who subscribe. It is educational, contains no discussion of client matters or results, and you may unsubscribe at any time."
            />
          </div>
          <Card>
            {sent ? (
              <div role="status" aria-live="polite">
                <h3 className="text-2xl">Thank you for subscribing.</h3>
                <p className="mt-3 text-ink-soft">
                  You will receive a confirmation message before the next quarterly issue. Each issue includes an
                  unsubscribe link.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
                <h3 className="text-2xl">Subscribe</h3>
                <Field label="Full name" id="nl-name" required autoComplete="name" />
                <Field label="Work email" id="nl-email" type="email" required autoComplete="email" />
                <Field label="Firm or organization" id="nl-firm" autoComplete="organization" />
                <div>
                  <label htmlFor="nl-role" className="block font-semibold text-navy">
                    Your role
                  </label>
                  <select id="nl-role" name="role" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>CPA or accountant</option>
                    <option>Wealth advisor</option>
                    <option>Trust officer</option>
                    <option>Attorney</option>
                    <option>Other professional</option>
                  </select>
                </div>
                <p className="text-sm text-ink-soft">
                  The newsletter is general information for professionals and is not legal advice. Subscribing does not
                  create an attorney-client relationship.
                </p>
                <Button type="submit" variant="primary">
                  Subscribe to the Newsletter
                </Button>
              </form>
            )}
          </Card>
        </div>
      </Section>

      <PalmDivider />

      <Section tone="cream-dark">
        <SectionTitle
          eyebrow="Resources"
          title="How the firm handles a referral"
          intro="Names before facts. Please share only the person’s name and contact information; the firm speaks with the prospective client directly before hearing anything about the matter."
        />
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['1', 'Introduce', 'Send the person’s name and preferred contact method. Please do not send documents or facts.'],
            ['2', 'Conflicts', 'The firm runs its conflict check and clears it before any partner hears the substance.'],
            ['3', 'Consultation', 'A partner meets the person within five business days of clearance, or two if a deadline is flagged.'],
          ].map(([n, t, d]) => (
            <li key={n} className="rounded-sm border border-line bg-white p-6">
              <span className="font-serif text-4xl text-gold">{n}</span>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-2 text-ink-soft">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}

export const inputCls =
  'mt-2 block w-full rounded-sm border border-line bg-white px-4 py-3 text-lg text-ink placeholder:text-ink-soft/60 focus:border-navy'

export function Field({ label, id, type = 'text', required, hint, ...rest }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-navy">
        {label}
        {required ? <span className="text-bronze-dark"> *</span> : <span className="font-normal text-ink-soft"> (optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-soft">
          {hint}
        </p>
      )}
      <input id={id} name={id} type={type} required={required} aria-describedby={hint ? `${id}-hint` : undefined} className={inputCls} {...rest} />
    </div>
  )
}
