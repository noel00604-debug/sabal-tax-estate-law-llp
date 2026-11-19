import { useState } from 'react'
import { Button, Card, Container, Notice, PageHeader, Section, SectionTitle } from '../components/ui.jsx'
import { Logo, PalmMark } from '../components/Logo.jsx'
import { ACKNOWLEDGMENT, CONTACT_METHODS, FIRM, MATTER_TYPES } from '../content.js'
import { Field, inputCls } from './Advisors.jsx'
import { Accordion } from '../components/Reveal.jsx'

// When the firm has an intake endpoint (for example a Clio Grow web form or a
// form-handling service), set it here and the form will POST to it. Until then
// the form validates in the browser and shows the confirmation view only.
const FORM_ENDPOINT = ''

export default function Contact() {
  const [submitted, setSubmitted] = useState(null)
  const [error, setError] = useState('')
  const [hasNotice, setHasNotice] = useState('no')
  const [hasDeath, setHasDeath] = useState('no')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = Object.fromEntries(new FormData(form).entries())
    if (!data.matterType) {
      setError('Please choose the type of matter that best fits.')
      return
    }
    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Request failed')
      } catch {
        setError(`We could not send your request. Please call ${FIRM.phone} during business hours.`)
        return
      }
    }
    setSubmitted({
      name: data.fullName,
      method: data.contactMethod,
      urgent: data.noticeReceived === 'yes' || data.recentDeath === 'yes' || Boolean(data.scheduledDate),
    })
    window.scrollTo(0, 0)
  }

  if (submitted) return <Confirmation {...submitted} />

  return (
    <>
      <PageHeader
        eyebrow="Contact & Consultation Request"
        title="Several ways to reach the firm"
        intro="Every inquiry is answered within one business day. Until the firm has checked for conflicts, it asks for names, contact information, the type of matter, and key dates only."
      />

      <Section className="!pb-0">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <p className="eyebrow">Telephone</p>
            <a href={FIRM.phoneHref} className="mt-2 block font-serif text-3xl text-navy hover:text-bronze">
              {FIRM.phone}
            </a>
            <p className="mt-2 text-ink-soft">{FIRM.hours}. After hours, an answering service takes your name, number, and type of matter.</p>
          </Card>
          <Card>
            <p className="eyebrow">Email</p>
            <a href={`mailto:${FIRM.email}`} className="mt-2 block break-all font-serif text-2xl text-navy hover:text-bronze">
              {FIRM.email}
            </a>
            <p className="mt-2 text-ink-soft">
              Please include your name and a telephone number. Do not send documents or describe your matter until we contact you.
            </p>
          </Card>
          <Card>
            <p className="eyebrow">Office</p>
            <address className="mt-2 not-italic text-lg text-navy">
              {FIRM.address1}
              <br />
              {FIRM.address2}
            </address>
            <p className="mt-2 text-ink-soft">Covered parking and accessible entry. Meetings by appointment.</p>
          </Card>
        </div>
      </Section>

      <Section className="!pb-0">
        <SectionTitle eyebrow="What to Expect" title="Before you fill out the form" />
        <div className="mt-8 max-w-3xl">
          <Accordion
            items={[
              [
                'Why do you ask for names and dates only?',
                'Until the firm has checked for conflicts, it collects only names, contact information, the type of matter, and key dates. That protects you: information you share before a conflict check could prevent the firm from helping you, and the firm never hears what it could not use.',
              ],
              [
                'What does the consultation cost?',
                `The initial consultation is ${FIRM.consultationFee}. The fee is for the consultation only, is not a retainer, and is credited toward the fee if the firm is engaged. It is collected only at the consultation.`,
              ],
              [
                'How quickly will I hear back?',
                'Every inquiry is answered within one business day. Consultations are scheduled within five business days of conflict clearance, or within two business days when a notice or date is flagged.',
              ],
              [
                'Am I a client once I submit the form?',
                'No. The firm represents you only after you sign an engagement letter. Until then it is not acting on your behalf and is not monitoring any deadline. Every inquiry ends in writing, either an engagement letter or a letter confirming that the firm is not representing you.',
              ],
              [
                'Will my information be kept confidential?',
                'Yes. The firm keeps a prospective client\u2019s information confidential under Rule 4-1.18 of the Rules Regulating The Florida Bar, even if it does not represent you.',
              ],
            ]}
          />
        </div>
      </Section>

      <Section id="consultation" className="scroll-mt-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Consultation Request" title="Request an initial consultation" />
            <div className="prose-sabal mt-6 text-ink-soft">
              <p>
                This form collects only the information the firm needs to check for conflicts and schedule a
                consultation. Please do not include facts about your matter. After our conflict check clears, a
                partner will contact you and, if appropriate, invite you to share more through the firm&rsquo;s secure
                portal.
              </p>
              <p>
                <strong className="text-navy">Consultation fee.</strong> The initial consultation is {FIRM.consultationFee}. The fee is
                for the consultation only, is not a retainer, and is credited toward the fee if the firm is engaged. It
                is collected only at the consultation.
              </p>
              <p>
                <strong className="text-navy">Timing.</strong> Consultations are scheduled within five business days of conflict
                clearance, or within two business days when a notice or date is flagged below.
              </p>
            </div>
            <Notice className="mt-6">
              If you received a notice from the IRS or the Florida Department of Revenue, or a family member recently
              died, tell us the date in the form. Some deadlines cannot be extended. Until an engagement letter is
              signed, the firm is not acting on your behalf and is not monitoring any deadline.
            </Notice>
          </div>

          <Card className="lg:col-span-3">
            <form onSubmit={onSubmit} className="grid gap-6" noValidate>
              <fieldset className="grid gap-5">
                <legend className="text-2xl font-serif text-navy">About you</legend>
                <Field label="Full legal name" id="fullName" required autoComplete="name" />
                <Field label="Other names used" id="otherNames" hint="Maiden, former married, or other names, for conflict checking only." autoComplete="off" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telephone" id="phone" type="tel" required autoComplete="tel" />
                  <Field label="Email" id="email" type="email" required autoComplete="email" />
                </div>
              </fieldset>

              <fieldset className="grid gap-4">
                <legend className="text-2xl font-serif text-navy">Preferred and safe contact method</legend>
                <p className="text-sm text-ink-soft">Choose the method that is private for you.</p>
                <div>
                  <label htmlFor="contactMethod" className="block font-semibold text-navy">
                    Contact me by <span className="text-bronze-dark">*</span>
                  </label>
                  <select id="contactMethod" name="contactMethod" required className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    {CONTACT_METHODS.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <RadioRow
                  name="leaveMessages"
                  legend="May we leave a voicemail or message?"
                  options={[
                    ['yes', 'Yes'],
                    ['no', 'No, please reach me directly'],
                  ]}
                  defaultValue="yes"
                />
                <Field label="Language or accessibility needs" id="accessibility" autoComplete="off" />
              </fieldset>

              <fieldset className="grid gap-4">
                <legend className="text-2xl font-serif text-navy">
                  Type of matter <span className="text-bronze-dark">*</span>
                </legend>
                <p className="text-sm text-ink-soft">Choose the one that fits best. A partner will sort out the details with you.</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {MATTER_TYPES.map((g) => (
                    <div key={g.group} className="rounded-sm border border-line bg-cream/60 p-4">
                      <p className="font-semibold text-navy">{g.group}</p>
                      <div className="mt-2 grid gap-2">
                        {g.options.map((o) => (
                          <label key={o} className="flex min-h-10 cursor-pointer items-center gap-3">
                            <input type="radio" name="matterType" value={o} className="h-5 w-5 accent-navy" />
                            <span>{o}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>

              <fieldset className="grid gap-5">
                <legend className="text-2xl font-serif text-navy">Dates and deadlines</legend>
                <p className="text-sm text-ink-soft">Dates only, please. Do not describe the notice or the circumstances.</p>
                <RadioRow
                  name="noticeReceived"
                  legend="Have you received a notice from the IRS or the Florida Department of Revenue?"
                  options={[
                    ['no', 'No'],
                    ['yes', 'Yes'],
                  ]}
                  defaultValue="no"
                  onChange={setHasNotice}
                />
                {hasNotice === 'yes' && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Date printed on the notice" id="noticeDate" type="date" required />
                    <Field label="Response date stated on the notice" id="noticeResponseDate" type="date" />
                  </div>
                )}
                <RadioRow
                  name="recentDeath"
                  legend="Has a family member or the person whose estate is involved recently died?"
                  options={[
                    ['no', 'No'],
                    ['yes', 'Yes'],
                  ]}
                  defaultValue="no"
                  onChange={setHasDeath}
                />
                {hasDeath === 'yes' && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Date of death" id="dateOfDeath" type="date" required />
                    <RadioRow
                      name="holdsOriginalWill"
                      legend="Is an original will in your possession?"
                      options={[
                        ['no', 'No'],
                        ['yes', 'Yes'],
                        ['unsure', 'Not sure'],
                      ]}
                      defaultValue="unsure"
                    />
                  </div>
                )}
                <Field
                  label="Hearing, IRS meeting, or other scheduled date"
                  id="scheduledDate"
                  type="date"
                  hint="If you have a court date, agency meeting, travel, or health timing we should know about."
                />
              </fieldset>

              <div className="rounded-sm border-2 border-navy/30 bg-cream p-5">
                <label className="flex cursor-pointer items-start gap-4">
                  <input type="checkbox" name="acknowledgment" required className="mt-1 h-6 w-6 shrink-0 accent-navy" />
                  <span className="text-lg font-semibold text-navy">{ACKNOWLEDGMENT}</span>
                </label>
              </div>

              {error && (
                <p role="alert" className="rounded-sm border border-red-800/40 bg-red-50 px-4 py-3 text-red-900">
                  {error}
                </p>
              )}

              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Send Consultation Request
              </Button>
              <p className="text-sm text-ink-soft">
                We will keep your information confidential under Rule 4-1.18 of the Rules Regulating The Florida Bar
                even if the firm does not represent you. Fields marked * are required.
              </p>
            </form>
          </Card>
        </div>
      </Section>
    </>
  )
}

function RadioRow({ name, legend, options, defaultValue, onChange }) {
  return (
    <fieldset>
      <legend className="font-semibold text-navy">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
        {options.map(([v, l]) => (
          <label key={v} className="flex min-h-10 cursor-pointer items-center gap-3">
            <input
              type="radio"
              name={name}
              value={v}
              defaultChecked={v === defaultValue}
              onChange={() => onChange && onChange(v)}
              className="h-5 w-5 accent-navy"
            />
            <span>{l}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function Confirmation({ name, method, urgent }) {
  return (
    <div className="relative overflow-hidden bg-cream">
      <PalmMark className="pointer-events-none absolute -right-20 top-10 h-[520px] opacity-[0.06]" />
      <Container className="relative py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center" role="status" aria-live="polite">
          <Logo size="lg" className="justify-center" />
          <p className="eyebrow mt-12">Consultation Request Received</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Thank you, {name}.</h1>
          <p className="mt-6 text-lg text-ink-soft">
            We will contact you by {method ? method.toLowerCase() : 'your preferred method'} within one business day.
            {urgent && ' Because you flagged a notice or date, the firm will give your request priority.'}
          </p>
          <div className="mt-10 rounded-sm border border-line bg-white p-6 text-left">
            <h2 className="text-2xl">What happens next</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-ink-soft">
              <li>Our coordinator confirms your contact information and runs a conflict check. Only names and dates are reviewed at this stage.</li>
              <li>Once the check clears, we schedule your consultation with the partner whose practice fits your matter.</li>
              <li>
                The {FIRM.consultationFee} consultation fee is collected at the consultation. It is for the consultation only, is not a retainer, and is credited toward the fee if the firm is engaged.
              </li>
            </ol>
          </div>
          <Notice className="mt-8 text-left">
            <strong className="text-navy">Please remember:</strong> {ACKNOWLEDGMENT} Until you sign an engagement letter, the
            firm does not represent you and is not monitoring any deadline.
          </Notice>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="outline">
              Return to Home
            </Button>
            <Button href={FIRM.phoneHref} variant="primary">
              Call {FIRM.phone}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
