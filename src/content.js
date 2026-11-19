import noel from './assets/noel-fernandez.jpg'
import mitchell from './assets/mitchell-kazaz.jpg'
import sam from './assets/sam-shir.jpg'
import jonPaul from './assets/jon-paul-churdar.jpg'

export const FIRM = {
  name: 'Sabal Tax & Estate Law, LLP',
  shortName: 'Sabal',
  notice: 'Sabal Tax & Estate Law, LLP, Boca Raton, Florida',
  address1: '150 East Palmetto Park Road, Suite 800',
  address2: 'Boca Raton, Florida 33432',
  counties: 'Palm Beach, Broward, and Miami-Dade counties',
  phone: '(561) 555-0150',
  phoneHref: 'tel:+15615550150',
  email: 'intake@sabaltaxestate.com',
  opens: 'January 5, 2027',
  hours: 'Monday through Friday, 8:30 a.m. to 5:30 p.m.',
  consultationFee: '$350',
}

export const MISSION =
  'Sabal Tax & Estate Law, LLP serves Florida families, closely held business owners, and fiduciaries who need to transfer wealth, administer estates and trusts correctly, and resolve disputes with taxing authorities. The firm combines estate planning, administration, and transfer tax compliance with federal and Florida tax controversy, so that the lawyer who builds a plan is the lawyer who knows how such plans are challenged. What distinguishes the firm is work led by a partner on every matter, plain explanations of technical choices, and documents drafted to be administered rather than admired. The firm stands behind the accuracy of every representation it makes to a client, a court, or a taxing authority, and it declines work it cannot perform competently and on time.'

export const VALUES = [
  {
    title: 'Integrity and independence',
    text: 'Every representation in a filing is traced to a client document before signature. No referral is paid for or accepted, and no commission is earned on a recommended product.',
  },
  {
    title: 'Competence',
    text: 'The practice is limited to tax, trusts, and estates. Irrevocable instruments and transfer tax returns get a second read by a partner who did not draft them.',
  },
  {
    title: 'Communication',
    text: 'Contact is acknowledged within one business day and answered within three. Every open matter receives a written status update every 30 days, and clients hear about any adverse development the same day.',
  },
  {
    title: 'Confidentiality',
    text: 'The firm applies the stricter of Rule 4-1.6 and Internal Revenue Code section 7216. Multi-factor authentication, least-privilege access, and encryption protect every file, and every employee and vendor signs a confidentiality agreement.',
  },
  {
    title: 'Accountability',
    text: 'An error is reported the day it is found, cured first, then disclosed to the client in writing with advice that independent counsel may be wise.',
  },
]

export const NAME_STORY =
  'The sabal palm is Florida’s state tree. It grows slowly, roots deeply, and survives hurricanes by bending rather than breaking. For a practice that moves wealth across generations, the image communicates endurance rather than outcomes.'

export const PRACTICE_AREAS = [
  {
    slug: 'estate-planning',
    number: '01',
    title: 'Estate Planning & Wealth Transfer',
    lead: 'Mitchell Kazaz',
    summary:
      'Wills, revocable and irrevocable trusts, powers of attorney, advance directives, and business succession, drafted to be administered rather than admired.',
    what: [
      'Wills and revocable trusts that comply with Florida law, including homestead and domicile planning for families relocating from other states.',
      'Durable powers of attorney, health care surrogate designations, and living wills.',
      'Irrevocable trusts, including life insurance trusts, spousal lifetime access trusts, and grantor retained annuity trusts, where the plan calls for them.',
      'Lifetime gifting and Form 709 gift tax reporting.',
      'Business succession planning for closely held companies.',
    ],
    how:
      'A partner leads every planning matter and meets privately with the client for part of every meeting where a third party is involved. Irrevocable instruments receive a second read by a partner who did not draft them. The firm supervises execution ceremonies in person with its own witnesses and notary, and it holds original wills in a fire-rated vault.',
    fees: 'Most planning work is priced as a flat fee agreed in writing before work begins. Complex planning and business succession are billed hourly.',
  },
  {
    slug: 'administration',
    number: '02',
    title: 'Trust & Estate Administration and Transfer Tax Compliance',
    lead: 'Sam Shir',
    summary:
      'Formal and summary probate, trust administration, inventories and accountings, and federal estate and gift tax returns (Forms 706 and 709).',
    what: [
      'Formal and summary administration in the Florida probate courts.',
      'Counsel to trustees administering revocable and irrevocable trusts after a death.',
      'Inventories, accountings, notices to creditors and beneficiaries, and fiduciary advice.',
      'Federal estate tax returns (Form 706), including returns filed only to elect portability, and gift tax returns (Form 709).',
      'Depositing an original will with the clerk of court as Florida law requires.',
    ],
    how:
      'Personal representatives and trustees are represented in their fiduciary capacity, and the firm tells beneficiaries in writing that it does not represent them. Every deadline is entered twice and verified by a partner. Transfer tax returns receive a second partner read before filing.',
    fees:
      'Administration may be billed on the statutory basis Florida law provides, or on a flat fee by agreement. When the statutory basis is used, the firm provides the written disclosures Florida law requires and obtains the fiduciary’s signed acknowledgment before the matter opens.',
  },
  {
    slug: 'tax-controversy',
    number: '03',
    title: 'Tax Controversy (IRS & Florida Department of Revenue)',
    lead: 'Noel Fernandez',
    summary:
      'Representation in IRS examinations, Appeals, collection matters, and the United States Tax Court, and in Florida Department of Revenue audits and protests.',
    what: [
      'IRS examinations of individual, estate, gift, and business returns.',
      'Administrative appeals within the IRS Independent Office of Appeals.',
      'Collection matters, including installment agreements, offers in compromise, and Collection Due Process hearings.',
      'Penalty relief requests and reasonable cause positions.',
      'Petitions and litigation in the United States Tax Court.',
      'Florida Department of Revenue audits and protests, including sales, payroll, and corporate income tax matters.',
    ],
    how:
      'Some deadlines in this area cannot be extended. When a prospective client mentions a notice, the firm records the date on the first call, clears conflicts within two business hours, and schedules the consultation within two business days. Until an engagement letter is signed, the firm tells the person in writing that it is not acting and is not monitoring any deadline. Every submission to a taxing authority is accurate and supported; the firm takes no position it cannot defend and claims no relationship with or influence over the IRS.',
    fees: 'Controversy work is billed hourly against a replenishing advance held in trust. Collection alternatives may be priced as a flat fee.',
  },
]

export const INTERNATIONAL = {
  title: 'International & Inbound Planning',
  lead: 'Jon Paul Churdar',
  text:
    'International and inbound work runs through all three practice areas. The firm advises families and individuals who are moving to the United States on planning before immigration, foreign trust and gift reporting, and delinquent international filings, and it coordinates with advisors in the client’s home jurisdiction.',
  items: [
    'Pre-immigration planning for individuals who will become United States residents.',
    'Foreign trust, foreign gift, and foreign account reporting.',
    'Bringing delinquent international information returns current.',
    'Estate and gift tax considerations for non-citizen spouses and non-resident owners of Florida property.',
  ],
}

export const NOT_HANDLED = [
  {
    title: 'Criminal tax defense',
    text: 'When a matter shows criminal indicators, the firm refers it to criminal tax counsel the same day.',
  },
  {
    title: 'Contested probate and trust litigation',
    text: 'Contested litigation is outside the firm’s practice and is referred to qualified counsel.',
  },
  {
    title: 'Family law',
    text: 'Divorce, custody, and related matters are referred out.',
  },
  {
    title: 'Routine income tax return preparation',
    text: 'The firm does not prepare routine income tax returns. It works alongside the client’s accountant.',
  },
]

export const PARTNERS = [
  {
    slug: 'noel-fernandez',
    name: 'Noel Fernandez',
    title: 'Managing Partner',
    focus: 'Tax Controversy',
    photo: noel,
    bio: [
      'Noel Fernandez is Sabal’s Managing Partner and leads the firm’s tax controversy practice before the Internal Revenue Service and the Florida Department of Revenue. He is responsible for the firm’s operations, personnel, banking, and vendor relationships, and he prepared the firm’s business plan, formation documents, and startup budget.',
      'Noel built a career in retail and wholesale distribution alongside law school. Since 2019 he has owned and operated five franchised fuel and convenience store locations, handling compliance, staffing, inventory, and financial performance. In 2022 he founded Alder Trading Group, a wholesale distribution company, where he oversees regulatory compliance, pricing, and operations.',
      'He is a J.D. candidate at St. Thomas University College of Law (expected May 2027), where he has earned Dean’s List recognition and serves as Senior ABA Representative, Treasurer of the Food Law Society, and Secretary of the Chess Club. He interned with the Miami-Dade State Attorney’s Office in 2026, graduated magna cum laude from Florida International University, and is fluent in English and Spanish.',
    ],
  },
  {
    slug: 'mitchell-kazaz',
    name: 'Mitchell Kazaz',
    title: 'Business Development Partner',
    focus: 'Estate Planning and Wealth Transfer',
    photo: mitchell,
    bio: [
      'Mitchell Kazaz leads Sabal’s estate planning and business succession practice and oversees the firm’s business development, referral relationships, and advertising compliance. He reviews every firm communication, from the website to seminar materials, under the Florida advertising rules before it is published.',
      'Before law school, Mitchell spent five years in management consulting, analysis, and real estate finance with Big Think Capital in Miami and with Vantage Mortgage & Realty Group and Wealthy Commercials, Inc. in Montreal.',
      'He is a J.D. candidate at St. Thomas University College of Law (expected 2027), where he has received three CALI Excellence for the Future Awards, earned Dean’s List recognition, and competes on the Trial Team. He is a law clerk at Panther Law Group and a judicial intern to the Honorable Antonio Arzola of the Eleventh Judicial Circuit Court of Florida. He holds a B.A. in Political Science and Government from Concordia University.',
    ],
  },
  {
    slug: 'sam-shir',
    name: 'Sam Shir',
    title: 'Compliance Partner',
    focus: 'Trust and Estate Administration',
    photo: sam,
    bio: [
      'Sam Shir leads Sabal’s trust and estate administration and transfer tax compliance practice. As Compliance Partner he is responsible for trust accounting and the written trust supervision plan, the conflicts system, docket and deadline control, Circular 230 compliance, file retention, and the partner transition review.',
      'Before law school, Sam worked in sales and marketing, with internships at BHAKTA Spirits in Vermont and Prime Wine & Spirits in Atlanta, where he supported marketing and distribution teams.',
      'He is a J.D. candidate at St. Thomas University College of Law (expected May 2027) and holds a B.B.A. in Marketing from the University of Georgia’s Terry College of Business.',
    ],
  },
  {
    slug: 'jon-paul-churdar',
    name: 'Jon Paul Churdar',
    title: 'Risk Partner',
    focus: 'International and Inbound Planning',
    photo: jonPaul,
    bio: [
      'Jon Paul Churdar focuses on tax law and estate planning, with an emphasis on helping clients protect their assets and navigate complex financial matters, and he leads the firm’s international and inbound planning work across all three practice areas.',
      'As the firm’s Risk Partner, he oversees risk management, insurance, business continuity, and the integration of technology into daily operations, and he serves as the backup conflicts reviewer.',
      'He is a J.D. candidate at St. Thomas University College of Law. Outside the office, Jon Paul enjoys spending time with his dog, Reggie, playing golf, and enjoying the outdoors.',
    ],
  },
]

export const CLIENT_GROUPS = [
  { who: 'Families relocating from high-tax states', need: 'Documents that comply with Florida law, homestead and domicile planning' },
  { who: 'Taxable and nearly taxable estates', need: 'Transfer tax planning, portability, and trust design' },
  { who: 'Closely held business owners', need: 'Succession planning and representation in payroll, income, and sales tax audits' },
  { who: 'Personal representatives and trustees', need: 'Administration, accountings, fiduciary advice, and Forms 706 and 709' },
  { who: 'Taxpayers in dispute', need: 'Examinations, Appeals, collection alternatives, and Tax Court' },
  { who: 'Inbound and international families', need: 'Planning before immigration and foreign reporting compliance' },
]

export const MATTER_TYPES = [
  {
    group: 'Estate planning',
    options: ['Will or trust', 'Update an existing plan', 'Business succession', 'Gifting', 'Incapacity documents'],
  },
  {
    group: 'Trust or estate administration',
    options: ['Probate', 'Trust administration', 'Estate or gift tax return', 'Fiduciary advice'],
  },
  {
    group: 'Tax controversy',
    options: ['IRS examination', 'IRS Appeals', 'Tax Court', 'Collection', 'Penalty relief', 'Florida Department of Revenue'],
  },
  {
    group: 'International',
    options: ['Non-U.S. citizen or resident', 'Foreign assets, trusts, or gifts', 'Inbound planning'],
  },
  {
    group: 'Not sure',
    options: ['I am not sure which applies'],
  },
]

export const CONTACT_METHODS = ['Phone', 'Email', 'Text message', 'Mail', 'Secure client portal']

export const ACKNOWLEDGMENT =
  'Submitting this form does not make you a client. Please do not send details or documents until we contact you.'
