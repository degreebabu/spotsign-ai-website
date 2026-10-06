# Workforce360 — AI-Native Workforce Operating System

> **Powered by Spotsign • A DIMENSHION Product**  
> *"Run your entire workforce on one intelligent platform."*

Workforce360 connects **People + Work + Money + Operations & IT + Intelligence** into a unified workforce operating layer engineered for both corporate desk and operational frontline/floor workforces.

---

## 🏛️ Enterprise Architecture Overview

Workforce360 departs from traditional record-keeping HRMS platforms by orchestrating the complete workforce operating lifecycle across five foundational pillars:

```
                         WORKFORCE360
                              │
      ┌──────────────┬────────┴─────┬──────────────┐
    PEOPLE          WORK          MONEY        OPERATIONS
      │              │              │              │
     HRIS           WFM          PAYROLL           IT
   Recruit          Time           TAX           Assets
 Performance       Shifts        Finance        Industry
   Learning        Field           GL             Ops
      │              │              │              │
      └──────────────┴──────────────┴──────────────┘
                             │
                        INTELLIGENCE
                             │
                   AI / DIGITAL BRAIN (40 Flows)
                             │
                      DIGITAL TWIN
                             │
                   WORKFORCE STRATEGY
```

### 1. People
- Core HRIS, dynamic org charts, and end-to-end employee lifecycle.
- AI Recruitment ATS with Genkit semantic resume scoring and interview kit generation.
- Performance appraisals, continuous reviews, 9-Box talent grids, and OKR trees.
- SCORM-compliant enterprise learning, skills taxonomies, and AI course builder.
- Frictionless employee experience (EX) from digital offer to exit clearance.

### 2. Work
- Shift scheduling and 24/7 rotational rostering with fatigue & muster guardrails.
- Smart attendance terminal integration (eSSL, ZKTeco, Suprema) and mobile geofenced punch tracking.
- Break management, overtime ceilings (Factories Act compliance), and field workforce telemetry.

### 3. Money
- Automated payroll processing connecting time, piece-rates, overtime, and deductions.
- Deep Indian statutory tax engine (Section 192 TDS, dual regimes, Form 12BB proof verification, EPFO ECR files, ESIC returns, State PT, and Form 16 Part A/B bulk generation).
- Corporate expense claims, multi-tier approvals, and direct General Ledger (GL) double-entry journals syncing with SAP, NetSuite, and Tally.

### 4. Operations & IT
- IT hardware serial number tracking and zero-trust software license reclamation on employee exit.
- Multi-tenant sovereign database isolation and 19 granular RBAC roles.
- 19 specialized vertical industry packs.

### 5. Intelligence
- **Workforce Digital Twin:** Live non-destructive simulation sandbox modeling restructuring scenarios, headcount changes, severance reserves, skill deficits, and monthly P&L impact.
- **Digital Brain:** 40 specialized Genkit AI flows across `RECRUIT`, `PLAN`, `WORK`, `PAY`, `DEVELOP`, `ANALYZE`, and `SIMULATE`.

---

## 🏭 19 Specialized Industry Vertical Packs

Pre-configured department structures, shift rules, and statutory workflows for:

1. **Shipping & Maritime** (`/industries/shipping-maritime`)
2. **Seafood Processing** (`/industries/seafood-processing`)
3. **Logistics & Freight** (`/industries/logistics-freight`)
4. **Manufacturing** (`/industries/manufacturing`)
5. **Chemical & Hazardous Operations** (`/industries/chemical-hazardous`)
6. **Healthcare** (`/industries/healthcare`)
7. **Hotel & Hospitality** (`/industries/hospitality`)
8. **Fisheries & Aquaculture** (`/industries/fisheries-aquaculture`)
9. **Cargo & Freight Forwarding** (`/industries/cargo-freight-forwarding`)
10. **Retail & E-Commerce** (`/industries/retail-ecommerce`)
11. **Petrol Pump & Fuel Stations** (`/industries/petrol-pump-fuel-station`)
12. **Cab & Transport Aggregators** (`/industries/cab-transport-aggregators`)
13. **Field Workforce** (`/industries/field-workforce`)
14. **Automobile & Auto Services** (`/industries/automobile-auto-services`)
15. **Travel & Tourism** (`/industries/travel-tourism`)
16. **School & University** (`/industries/school-university`)
17. **ITES** (`/industries/ites`)
18. **BPO & Call Centers** (`/industries/bpo-call-centers`)
19. **Information Technology** (`/industries/information-technology`)

---

## 🔍 Technical SEO, GEO, AEO & LLM Discoverability

- **Sitemap & Robots:** Clean canonical URLs mapping all 65 public routes (`/sitemap.xml`, `/robots.txt`).
- **Structured Data (JSON-LD):** Fully implemented schemas for `SoftwareApplication`, `Organization`, `BreadcrumbList`, and `FAQPage`.
- **LLM Readiness:** Canonical machine-readable knowledge files served directly at:
  - `/llms.txt` (Structured index for AI search agents)
  - `/llms-full.txt` (Complete architectural knowledge specification)
  - `/llm-info` (Web discovery portal)
- **Zero Cloaking:** 100% semantic server-rendered HTML for bots and users alike.

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build optimized static bundle (SSG 65/65 routes)
npm run build

# Start production server
npm run start -p 3005
```

---

## 🛡️ Security & Governance

- Multi-tenant sovereign database isolation (`tenant_id` query scoping).
- 19 granular Role-Based Access Control (RBAC) tiers.
- TLS 1.3 in transit and AES-256 at rest.
- Zero customer training retention across Genkit AI models.

---

## 📄 License & Attribution

Copyright © 2026 **DIMENSHION**. All rights reserved.  
Workforce360 is powered by Spotsign, a DIMENSHION product.
