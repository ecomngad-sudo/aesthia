export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#solution' },
  { label: 'Results', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_ITEMS = [
  'Luxury Website Architecture',
  'Google Business Optimization',
  'Local SEO Dominance',
  'AI Patient Assistant',
  'Review Automation',
  'Premium Booking Systems',
  'Conversion Optimization',
  'Lightning-Fast Performance',
  'Mobile-First Experience',
  'Premium Patient Acquisition',
];

export interface Problem {
  icon: string;
  title: string;
  description: string;
}

export const PROBLEMS: Problem[] = [
  {
    icon: 'EyeOff',
    title: 'Poor first impression',
    description: 'A dated website quietly tells premium clients you are not premium — before they ever read a word.',
  },
  {
    icon: 'Gauge',
    title: 'Slow website',
    description: 'Every extra second of load time costs you bookings and buries you lower on Google.',
  },
  {
    icon: 'SearchX',
    title: 'Weak Google visibility',
    description: 'When locals search "med spa near me," your competitors capture the patients that should be yours.',
  },
  {
    icon: 'TrendingDown',
    title: 'No conversion strategy',
    description: 'Traffic arrives, but nothing is engineered to turn those visits into booked consultations.',
  },
  {
    icon: 'ShieldOff',
    title: 'Low trust',
    description: 'Few reviews, no proof, no polish — patients hesitate and book with a clinic that feels safer.',
  },
  {
    icon: 'Crown',
    title: 'Poor luxury positioning',
    description: 'You deliver a premium experience in person. Your digital presence sells you short.',
  },
];

export interface Solution {
  icon: string;
  title: string;
  description: string;
  span: string;
  accent?: boolean;
}

export const SOLUTIONS: Solution[] = [
  {
    icon: 'MonitorSmartphone',
    title: 'Luxury Website Architecture',
    description:
      'Bespoke, conversion-engineered sites that mirror the caliber of your clinic and make premium clients feel at home.',
    span: 'lg:col-span-2 lg:row-span-2',
    accent: true,
  },
  {
    icon: 'MapPin',
    title: 'Local SEO',
    description: 'Own the map pack for "med spa" + your city and capture high-intent local searches.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'Building2',
    title: 'Google Business Optimization',
    description: 'A polished profile that ranks, converts, and builds trust at first glance.',
    span: '',
  },
  {
    icon: 'CalendarCheck',
    title: 'Booking Automation',
    description: 'Frictionless scheduling that fills your calendar while you focus on patients.',
    span: '',
  },
  {
    icon: 'Sparkles',
    title: 'AI Patient Assistant',
    description: 'A 24/7 concierge that answers questions, qualifies leads, and books consultations.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'Star',
    title: 'Review Automation',
    description: 'Steadily grow a 5-star reputation on autopilot across Google and RealSelf.',
    span: '',
  },
  {
    icon: 'LineChart',
    title: 'Analytics Dashboard',
    description: 'Clarity on bookings, traffic, and revenue — in one elegant, real-time view.',
    span: '',
  },
  {
    icon: 'LifeBuoy',
    title: 'Monthly Growth Support',
    description: 'A dedicated growth partner refining your system every single month.',
    span: 'lg:col-span-2',
  },
];

export interface ComparisonRow {
  label: string;
  generic: string;
  aesthia: string;
}

export const COMPARISON: ComparisonRow[] = [
  { label: 'Strategy', generic: 'One-size-fits-all templates', aesthia: 'Custom growth system built around your clinic' },
  { label: 'Luxury Positioning', generic: 'Looks like every other agency site', aesthia: 'Bespoke design worthy of your brand' },
  { label: 'SEO', generic: 'Generic keywords, slow results', aesthia: 'Med-spa-specific local SEO that ranks you #1' },
  { label: 'Speed', generic: 'Bloated, 4–6s load times', aesthia: 'Sub-1s performance on every device' },
  { label: 'Conversions', generic: 'Pretty, but no booking strategy', aesthia: 'Every section engineered to book consultations' },
  { label: 'Support', generic: 'Deliver and disappear', aesthia: 'A dedicated partner, every month' },
  { label: 'Business Growth', generic: 'You get a website', aesthia: 'You get a measurable revenue system' },
];

export interface Study {
  name: string;
  city: string;
  image: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  impact: string;
}

export const CASE_STUDIES: CaseStudy[] = [
{
  name: 'Luxury Med Spa',
  city: 'Premium Growth Campaign',
  image:
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',

  challenge:
    'The clinic had a beautiful in-person experience, but its online presence failed to generate consistent premium consultations.',

  solution:
    'We rebuilt the website, optimized Google Business Profile, implemented Local SEO, and created a high-converting booking system.',

  metrics: [
    { label: 'Qualified Leads', value: '+147%' },
    { label: 'Organic Traffic', value: '+92%' },
    { label: 'Google Rating', value: '4.9★' },
  ],

  impact:
    'Within months, the clinic became one of the most visible aesthetic providers in its local market, generating significantly more premium consultations.',
},
{
  name: 'Elite Aesthetic Clinic',
  city: 'Local SEO Growth System',
  image:
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',

  challenge:
    'The clinic was invisible on Google Maps despite offering premium treatments and an excellent patient experience.',

  solution:
    'We optimized the Google Business Profile, improved local SEO, strengthened reviews, and redesigned the patient journey.',

  metrics: [
    { label: 'Google Calls', value: '+126%' },
    { label: 'Map Rankings', value: '#1' },
    { label: '5★ Reviews', value: '+214' },
  ],

  impact:
    'The clinic became one of the top-ranked aesthetic practices in its city, generating a steady flow of high-intent patients.',
},
{
  name: 'Élysia Skin & Laser',
  city: 'Miami, FL',
  image:
    'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80',

  challenge:
    'The clinic had exceptional treatments but struggled to attract affluent patients online. Their website looked generic and converted very few visitors into consultations.',

  solution:
    'We designed a premium luxury website, optimized every service page for local SEO, integrated an AI booking assistant, and rebuilt the entire patient journey around conversions.',

  metrics: [
    { label: 'Booked Consultations', value: '+189%' },
    { label: 'Google Traffic', value: '+154%' },
    { label: 'Monthly Revenue', value: '+$71K' },
  ],

  impact:
    'Within eight months, the clinic established itself as one of Miami’s leading luxury med spas, consistently generating high-value consultations every week.',
},
];

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const PROCESS: ProcessStep[] = [
  { num: '01', title: 'Discovery Call', description: 'We learn your clinic, your patients, your goals, and your local market.' },
  { num: '02', title: 'Competitive Research', description: 'Deep competitive analysis of the med spas ranking above you in your city.' },
  { num: '03', title: 'Strategy', description: 'A custom growth blueprint with clear revenue targets and a 12-month plan.' },
  { num: '04', title: 'Design', description: 'A bespoke luxury experience crafted around your brand and your patients.' },
  { num: '05', title: 'Development', description: 'Engineered for speed, conversions, and flawless performance on every device.' },
  { num: '06', title: 'Launch', description: 'A meticulous, monitored rollout with SEO and tracking fully in place.' },
  { num: '07', title: 'Scale', description: 'Monthly optimization that compounds your rankings, reputation, and revenue.' },
];

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'Founder, Lumière Aesthetics',
   image:
'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80',
    quote:
      'Aesthia did not build us a website. They built us a patient acquisition system. Our consult calendar has never been this full — and the patients we are attracting are exactly the premium clients we wanted.',
  },
  {
    name: 'Marcus Reed',
    role: 'CEO, Maison Dermé',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
    quote:
      'Across three locations we were invisible on Google. Now we own the map pack. The ROI is not even close — this is the best business decision we have made in five years.',
  },
 {
  name: 'Dr. Priya Anand',
  role: 'Medical Director, Élysia Skin & Laser',
  image:
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
  quote:
    'The level of taste and strategy is something I did not know existed in marketing. Our brand finally looks as premium online as it feels in person — and the bookings prove it.',
},
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'Do you only work with Med Spas?',
    a: 'Yes. We are exclusively focused on premium Med Spas and aesthetic clinics in the United States. That specialization is exactly why our clients outperform generalist agencies.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see a measurable lift in qualified bookings within the first 60–90 days. Local SEO compounding typically delivers its largest gains between months 4 and 9.',
  },
  {
    q: 'Do I need a new website?',
    a: 'Often, yes — but not always. In your free strategy call we will assess your current site honestly and tell you exactly what is holding back your growth, with no pressure to rebuild.',
  },
  {
    q: 'What does the monthly growth retainer include?',
    a: 'Ongoing SEO, content, review automation, conversion optimization, analytics reporting, and a dedicated growth partner who treats your revenue as their own KPI.',
  },
  {
    q: 'How is Aesthia different from a typical agency?',
    a: 'We do not sell websites. We sell a complete growth system — strategy, design, SEO, automation, and ongoing optimization — engineered to produce bookings, not just impressions.',
  },
  {
    q: 'What does a strategy call cost?',
    a: 'It is free, and there is no obligation. You will leave with a clear understanding of where your clinic is leaking revenue and exactly what it would take to fix it.',
  },
];

export const FOOTER_NAV = {
  Studio: ['Services', 'Results', 'Process', 'About', 'Contact'],
  Growth: ['Luxury Web Design', 'Local SEO', 'Booking Automation', 'AI Assistant', 'Review Automation'],
  Company: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};
