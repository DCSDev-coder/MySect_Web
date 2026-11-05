# MySect Web (Landing & Compliance Portal)

Modern, digital corporate secretarial and Sdn Bhd incorporation website built with **React**, **Tailwind CSS**, and **Vite**.

Designed specifically for **MySect** (`mysect.my`) — empowering Malaysian founders, solo entrepreneurs, and growing SMEs with 100% online company registration, licensed corporate secretarial compliance, cloud document vaults, and transparent pricing.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom typography & responsive design
- **Bundler & Dev Server:** [Vite](https://vite.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Plus Jakarta Sans & system font stack

---

## ✨ Features

- **Interactive SSM Company Name Availability Checker:** Live guideline screening for prohibited keywords and naming conflicts under the Companies Act 2016.
- **Interactive Incorporation & Compliance Fee Calculator:** Transparent simulator itemizing official SSM fees, named secretarial retainers, registered office address, and accounting add-ons.
- **Live Digital CoSec Dashboard Mockup:** Demonstrating real-time compliance status, upcoming annual return countdowns, and digital resolution signing.
- **Side-by-Side Comparison:** Clear feature breakdown of Traditional Secretarial Firms vs. MySect Digital CoSec.
- **Comprehensive Services Breakdown:** Covering Sdn Bhd incorporation, named corporate secretary, registered office address, monthly bookkeeping, and LHDN corporate tax compliance.
- **Interactive FAQ Accordion:** Categorized with instant search filter.
- **Digital Consultation & Inquiry Modal:** Direct lead capture and instant WhatsApp specialist integration.

---

## 🛠️ Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/DCSDev-coder/MySect_Web.git
cd MySectLanding
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build & Preview

```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
MySectLanding/
├── index.html                     # HTML entry point with metadata & fonts
├── package.json                   # Dependencies & scripts
├── vite.config.ts                 # Vite config with React & Tailwind plugins
├── src/
│   ├── main.tsx                   # React root entry
│   ├── App.tsx                    # Main landing page application
│   ├── index.css                  # Global styles & Tailwind imports
│   ├── data/
│   │   └── content.ts             # Structured copy, pricing, services & FAQs
│   └── components/
│       ├── Navbar.tsx             # Sticky responsive navbar with glassmorphism
│       ├── Hero.tsx               # Hero section with interactive name check & portal preview
│       ├── Services.tsx           # 6 core statutory & corporate services
│       ├── HowItWorks.tsx         # 3-step digital incorporation flow
│       ├── CostCalculator.tsx     # Interactive MYR fee estimator
│       ├── Comparison.tsx         # Traditional CoSec vs MySect table
│       ├── Pricing.tsx            # Transparent monthly/annual pricing plans
│       ├── Testimonials.tsx       # Founder reviews & partner bank badges
│       ├── FAQ.tsx                # Interactive categorized FAQ accordion
│       ├── Footer.tsx             # Statutory notices, KL office & legal links
│       ├── CompanyNameSearchModal.tsx # Full SSM name screening tool
│       └── ConsultationModal.tsx  # Free consultation & inquiry modal
```

---

## 📄 License & Compliance

Complies with statutory directives of the **Companies Commission of Malaysia (SSM)** under the **Companies Act 2016**, **Digital Signature Act 1997**, and **Personal Data Protection Act (PDPA) 2010**.
