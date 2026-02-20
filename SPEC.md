# Rush Wealth Solutions LLC — Landing Page Spec

## Client
- **Business:** Rush Wealth Solutions LLC
- **Owner:** Tee (@teetheceo on Instagram)
- **Services:** Credit Repair ($97 offer, results in 30-45 days, money-back guarantee) + Business Funding ($50k+)
- **Target audience:** People with bad credit wanting to build wealth

## Design Direction
- **Dark/black base** with **emerald green** and **silver/white** accents — match the logo exactly
- **Luxury wealth aesthetic** — this needs to look like money. Think high-end financial firm, not budget credit repair
- Smooth animations (fade-ins, counters, glass/glow effects), 60fps
- Bold typography, big numbers for results
- Mobile-first responsive
- Pure HTML/CSS/vanilla JS — NO frameworks, NO CDNs, NO external dependencies
- Logo file: `assets/logo.png`

## Page Structure

### 1. Hero Section
- Dark background with subtle green glow/particles
- Logo prominently displayed
- Bold headline: something like "Your Credit Score Is Holding You Back" or "Transform Your Credit in 30-45 Days"
- Sub: "Results in 30-45 Days or Your Money Back"
- Primary CTA: "Book a Free Consultation" (links to Calendly or scrolls to booking section)
- Secondary CTA: "Get Started for $97"
- Animated score counter (e.g. 500 → 750 animation)

### 2. Services Section
- Two main cards: Credit Repair + Business Funding
- Credit Repair: $97 full credit repair, removal of collections, late payments, medical bills, bankruptcies, student loans, charge-offs, repos
- Business Funding: Get clients funded $50k+
- Emerald green icon accents, dark cards with subtle borders/glow

### 3. Results / Social Proof
- Section title: "Real Results from Real Clients"
- THREE testimonial cards using the provided screenshot images:
  - **Steven V.** — Equifax 607→620 (+13), Experian 549→628 (+79), TransUnion 607→621 (+14), 11 disputes deleted
  - **Hakeem M.** — Equifax 605→702 (+97), Experian 592→623 (+31), TransUnion 588→635 (+47), 9 disputes deleted
  - **Joe P.** — Equifax 615→679 (+64), Experian 665→688 (+23), TransUnion 613→679 (+66), 10 disputes deleted (27 total)
- Display the actual screenshot images (in `assets/`) as testimonial cards
- Or recreate the data as styled cards with animated counters — dealer's choice, whichever looks more premium

### 4. What We Remove
- Grid/list of negative items: Collections, Late Payments, Medical Bills, Bankruptcies, Student Loans, Charge-Offs, Repossessions
- Clean icons or checkmarks, emerald green accents

### 5. How It Works
- 3 steps: 1) Book a Call → 2) We Analyze Your Credit → 3) Watch Your Score Rise
- Numbered steps with icons, clean layout

### 6. CTA / Lead Capture
- **Primary:** "Book a Free Consultation" button (use placeholder href="#book" — client will add Calendly link)
- **Backup:** Contact form (Name, Email, Phone) via Formspree — endpoint TBD, use placeholder action for now
- Keep form simple — name, email, phone only

### 7. Footer
- Rush Wealth Solutions LLC
- Instagram: @teetheceo
- No phone number on the site
- Standard credit repair disclaimer: "Results may vary. Rush Wealth Solutions LLC is not a law firm or CPA..."

## Testimonial Images
Located in `assets/` directory:
- `testimonial-steven.png`
- `testimonial-hakeem.png`
- `testimonial-joe.png`

## Logo
- `assets/logo.png` — dark background with emerald green shield + arrow, silver text
- Use this on the page (hero + footer minimum)

## Deployment
- GitHub repo: will be created at `izzy358/rush-wealth`
- Vercel auto-deploy from GitHub
- No custom domain yet — just get it live on Vercel

## Key Vibes
- This site needs to SCREAM money and success
- Dark + green + silver = wealth
- Big bold numbers, smooth animations
- Trust signals everywhere (results, guarantee, testimonials)
- Fast loading, no heavy assets beyond the testimonial images
