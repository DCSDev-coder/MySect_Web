export 

export 

export 

export 

export const SERVICES = [
  {
    id: 'incorporation',
    title: 'Sdn Bhd Incorporation',
    tagline: '100% Online Company Registration',
    description: 'Launch your private limited company in Malaysia without visiting government counters. We handle SSM name reservation, documentation, and digital signature submission.',
    iconName: 'Building2',
    highlights: [
      'SSM approval in 3 to 5 working days',
      'Certified true copy (CTC) Section 14, 15 & 17',
      'Free corporate bank account opening assistance',
      'Company constitution drafting included'
    ]
  },
  {
    id: 'secretarial',
    title: 'Digital Company Secretarial (CoSec)',
    tagline: 'Licensed SSM Secretaries On Demand',
    description: 'Never miss an SSM compliance deadline. We maintain your statutory registers, prepare standard board resolutions, and file your annual returns seamlessly.',
    iconName: 'FileCheck',
    highlights: [
      'Named licensed corporate secretary',
      'Unlimited standard board resolutions',
      'Automated SSM annual return filing reminders',
      '24/7 digital company register vault'
    ]
  },
  {
    id: 'registered-office',
    title: 'Registered Office Address',
    tagline: 'Prestigious Commercial Location',
    description: 'Comply with Section 46 of the Companies Act 2016 by having an official registered office address for all official and regulatory correspondences.',
    iconName: 'MapPin',
    highlights: [
      'Prime business address in Kuala Lumpur',
      'Mail notification and digital scanning',
      'Full compliance with statutory register display',
      'Separates your home address from public records'
    ]
  },
  {
    id: 'accounting',
    title: 'Bookkeeping & Accounting',
    tagline: 'Tax-Ready Cloud Accounting',
    description: 'Keep your financial records immaculate. Cloud accounting setup (Xero / QuickBooks), monthly bookkeeping, and management reports for directors and investors.',
    iconName: 'Calculator',
    highlights: [
      'Monthly bank reconciliations & P&L reports',
      'Audit-ready statutory financial statements',
      'Xero & QuickBooks certified specialists',
      'E-invoicing (LHDN) readiness setup'
    ]
  },
  {
    id: 'tax',
    title: 'Corporate Tax & Compliance',
    tagline: 'Maximize Allowable Deductions',
    description: 'Complete corporate tax estimation (CP204) and yearly corporate tax submission (Form C) with licensed tax agents to avoid punitive LHDN penalties.',
    iconName: 'ShieldAlert',
    highlights: [
      'Yearly Form C corporate tax submission',
      'Quarterly CP204 tax estimate adjustments',
      'SME tax relief optimization (up to 15% rate)',
      'Direct liaison with Inland Revenue Board (LHDN)'
    ]
  },
  {
    id: 'advisory',
    title: 'Corporate Advisory & Share Allotment',
    tagline: 'Cap Table & ESOP Management',
    description: 'Scaling your startup? We draft custom resolutions, handle share transfers, rights issues, ESOP schemes, and director appointments smoothly.',
    iconName: 'TrendingUp',
    highlights: [
      'Share allotment & transfer filings (Section 78/105)',
      'Director appointments & resignations',
      'Constitution amendment & capital restructuring',
      'Investor due diligence documentation support'
    ]
  }
];

export const PRICING_TIERS = [
  {
    id: 'dormant',
    name: 'Starter / Dormant',
    tagline: 'For holding companies and early pre-revenue ventures',
    priceMonthly: 60,
    priceAnnually: 600,
    features: [
      'Named Licensed Company Secretary',
      'Registered office address in KL',
      'Safekeeping of statutory books & registers',
      'Annual Return & Financial Statement SSM submission fee excluded',
      'Up to 3 standard board resolutions per year',
      'Email & WhatsApp support'
    ],
    cta: 'Choose Starter'
  },
  {
    id: 'growth',
    name: 'Active SME (Most Popular)',
    tagline: 'Everything growing Malaysian businesses need to stay compliant',
    priceMonthly: 120,
    priceAnnually: 1200,
    popular: true,
    features: [
      'Named Licensed Company Secretary',
      'Prestigious Registered office address in KL',
      'Unlimited standard board resolutions',
      'SSM Annual Return filing management',
      'Annual General Meeting (AGM) documentation',
      'Digital Corporate Vault with instant CTC access',
      'Priority WhatsApp hotline to your secretarial team',
      'Free bank account opening referral with top banks'
    ],
    cta: 'Start 14-Day Trial'
  },
  {
    id: 'incorporation-bundle',
    name: 'Incorporation All-In',
    tagline: 'Brand new Sdn Bhd setup + full year of secretarial retainer',
    priceMonthly: 149,
    priceAnnually: 1499,
    features: [
      'Full New Sdn Bhd Registration (SSM fees included)',
      '1 Year Company Secretarial Retainer included',
      '1 Year Registered Office Address included',
      'Company Name Search & Reservation (3 rounds)',
      'Section 14, 15, 17 & Constitution e-documents',
      'Free Corporate Bank Account VIP Fast-track',
      'Dedicated compliance officer assigned',
      'RM 1,000+ worth of partner credits (Google Workspace, Stripe, etc.)'
    ],
    cta: 'Incorporate Sdn Bhd Now'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Ahmad Faiz',
    role: 'Co-founder & CEO',
    company: 'FinTrack Asia Sdn Bhd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Switching to MySect was the best operational decision we made. Our previous secretary took 2 weeks just to draft a simple director resolution for a bank facility. With MySect, it is completed and signed digitally in 20 minutes.',
    highlight: 'Saved 80% turnaround time on statutory resolutions'
  },
  {
    name: 'Cheryl Tan',
    role: 'Managing Director',
    company: 'Nordic Bean Roastery Sdn Bhd',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'We registered our new F&B enterprise via MySect while sitting in our café. 4 days later, our SSM certificate arrived in our inbox and the bank account liaison contacted us right away. Zero paperwork hassle.',
    highlight: 'SSM incorporated in just 4 working days'
  },
  {
    name: 'Kenneth Lim',
    role: 'Founder',
    company: 'Apex Logistics & Tech Sdn Bhd',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: 'The pricing is completely transparent. Traditional corporate secretarial firms charge surprise hidden fees for stationery, dispatch, and routine emails. MySect has a clean fixed plan that lets us budget properly.',
    highlight: 'No surprise bills or hidden disbursements'
  }
];

export const FAQS = [
  {
    question: 'What are the minimum requirements to register a Sdn Bhd in Malaysia?',
    answer: 'Under the Malaysian Companies Act 2016, you only need: (1) At least 1 director who is at least 18 years old and ordinarily resides in Malaysia, (2) At least 1 shareholder (individual or corporate, can be the same person as the director), (3) A minimum paid-up capital of RM1, (4) A local registered office address, and (5) A licensed Company Secretary appointed within 30 days of incorporation.',
    category: 'incorporation'
  },
  {
    question: 'How fast can MySect register my company with SSM?',
    answer: 'Once you submit your details and complete digital identity verification (eKYC), our licensed company secretaries review and lodge your application with SSM MyCoID within 24 hours. SSM typically approves new company registrations within 3 to 5 business days, provided there are no naming queries.',
    category: 'incorporation'
  },
  {
    question: 'Can I switch from my current traditional company secretary to MySect?',
    answer: 'Yes, switching is 100% legal, straightforward, and we handle the entire transition for you! We will prepare the resignation and appointment documents, communicate with your outgoing secretary, and safely transfer all physical and statutory registers to our digital vault at zero transition fee.',
    category: 'transfer'
  },
  {
    question: 'Why do Malaysian companies legally require a Company Secretary?',
    answer: 'Section 235 of the Companies Act 2016 mandates that every Sdn Bhd in Malaysia must appoint at least one qualified and licensed Company Secretary (registered with SSM or a member of a prescribed professional body such as MAICSA or MIA). The secretary is responsible for ensuring the company complies with statutory filings, board resolutions, and legal guidelines.',
    category: 'secretarial'
  },
  {
    question: 'How do e-signatures work for board resolutions and SSM filings?',
    answer: 'MySect uses legally binding digital signatures that comply with the Malaysian Digital Signature Act 1997 and Electronic Commerce Act 2006. Directors and shareholders can sign resolutions securely from their smartphone or laptop anywhere in the world.',
    category: 'secretarial'
  },
  {
    question: 'Do you help with opening corporate bank accounts in Malaysia?',
    answer: 'Yes! As an authorized corporate services partner, we introduce you directly to relationship managers at leading commercial and digital banks in Malaysia, including CIMB, Maybank, RHB, Alliance Bank, and GXBank, speeding up your bank account verification process.',
    category: 'incorporation'
  },
  {
    question: 'Are there any hidden disbursements or surprise charges?',
    answer: 'No. Traditional secretarial firms frequently invoice separately for telephone calls, printing, courier, and secretarial file maintenance. MySect operates on clear, upfront pricing with all standard secretarial retainer duties included in your subscription.',
    category: 'secretarial'
  }
];
