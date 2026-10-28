# SpotSign AI — Website Content Document

**Version:** 1.0  
**Date:** 27 October 2026  
**Canonical domain:** `https://spotsign.ai`  
**Primary sources:** `content/site-content.md`, `content/products.json`, `content/industries.json`, `content/personas.json`, `content/competitors.json`, `content/usecases.json`, `content/faqs.json`  
**Audit companion:** `SEO-AEO-GEO-AUDIT-REPORT.md`

---

## 1. Purpose

This document is the content source of truth for the SpotSign AI website. It defines:

- Positioning and approved messaging.
- Page-level information architecture.
- Copy standards for every page template.
- The unique narrative for each of the 86 indexable pages.
- Metadata rules and known content gaps.
- The production backlog for resource and trust content.

Use this document before editing page copy, metadata, schema, or navigation.

---

## 2. Brand Foundation

### 2.1 Entity

- **Brand:** SpotSign AI
- **Legal/parent brand:** DIMENSHION
- **Product lineage:** Powered by Spotsign Workforce360
- **Category:** Enterprise Workforce Operating System (WOS)
- **Canonical promise:** Run your entire workforce on one unified platform.

### 2.2 Category Definition

SpotSign AI is an Enterprise Workforce Operating System that connects corporate HR, frontline work, payroll and money, operations and IT, and executive insights.

It is not positioned as a single-purpose HRMS, attendance tool, payroll bureau, or point-solution ATS. It is the operating layer that connects those functions.

### 2.3 Five Pillars

| Pillar | Scope |
|---|---|
| People | HRIS, employee lifecycle, talent, learning, performance, employee experience, recruitment |
| Work | Workforce management, rostering, attendance, field workforce, shift operations |
| Money | Payroll, statutory compliance, expenses, finance and GL integration |
| Operations & IT | IT assets, access governance, integrations, operational controls |
| Insights | Workforce analytics, planning, board dashboards, attrition and DEI analytics |

### 2.4 Core Differentiators

1. **Workforce breadth:** corporate salaried employees plus industrial blue-collar, shift-based, and piece-rate workers.
2. **Operational depth:** biometric attendance, geofencing, 24/7 rosters, muster rolls, and field operations.
3. **Indian statutory payroll:** Section 192 TDS, EPFO ECR, ESIC, Professional Tax, Form 16, and related workflows.
4. **Workforce analytics and planning:** scenario modelling, attrition risk, capacity planning, and executive dashboards.
5. **Workflow automation:** connected approvals, lifecycle events, payroll inputs, asset actions, and compliance checks.
6. **Industry vertical packs:** 19 pre-configured operating contexts.

---

## 3. Non-Negotiable Messaging Rules

### 3.1 Always

- Lead with operational outcomes, not feature lists.
- Name the audience and the operating environment.
- Connect every module to the unified platform.
- Use “Enterprise Workforce Operating System” in core positioning.
- Use “powered by Spotsign Workforce360” in entity or about contexts.
- Use Indian statutory terminology accurately.
- Distinguish corporate, frontline, and field workforces.
- Use specific workflow examples: shift close, muster roll, ECR, Form 16, asset recovery, payroll journal.

### 3.2 Never

- Do not claim unsupported certifications, customer counts, or market leadership.
- Do not invent competitor weaknesses without a cited source.
- Do not describe the platform as a “multi-tenant”, “sovereign”, “RBAC-tiered”, or “topology-specific” architecture unless product and legal teams approve new evidence.
- Do not use generic AI claims outside the approved AI page and components.
- Do not imply that every resource is already published when it is a future asset.
- Do not use “cheap”, “best”, “guaranteed”, or unverifiable superlatives.

### 3.3 Approved AI Language

Approved AI messaging is limited to:

- `/ai`
- `src/components/AIWorkflowSection.tsx`
- `src/components/DigitalTwinSimulator.tsx`

Approved themes:

- Embedded workflow automation.
- Predictive workforce intelligence.
- Non-destructive planning and scenario simulation.

Do not extend these claims into other pages without review.

---

## 4. Global Content Standards

### 4.1 Metadata Rules

| Field | Rule |
|---|---|
| Title | 50–60 characters preferred; never exceed 60 without review. Include primary keyword and “SpotSign AI” where possible. |
| Meta description | 120–160 characters. State audience, outcome, and proof. |
| H1 | Exactly one per page. Match search intent and page promise. |
| H2 | Use for substantive sections, not decorative labels. |
| Canonical | One self-referencing canonical per page. |
| OG/Twitter | Page-specific title, description, image, and URL on all static pages. |
| Schema | Organization sitewide; one primary page entity; FAQPage only for visible Q&A. |

### 4.2 Body Copy Rules

- Open with a direct statement of the operational problem.
- Use short paragraphs and scannable sections.
- Include one concrete workflow example per major section.
- Use tables for capability comparisons and role mapping.
- Close with a relevant CTA, not a generic “learn more” on every section.
- Add internal links to the parent hub, two sibling pages, and one relevant use case.

### 4.3 CTA Hierarchy

| Intent | CTA |
|---|---|
| Evaluate platform | Request a Demonstration |
| Compare options | See the Comparison |
| Explore a module | Explore [Module] |
| Validate compliance | Review Compliance |
| Read proof | Read the Guide / Report |
| Contact | Talk to Sales |

---

## 5. Information Architecture

### 5.1 Route Inventory

| Group | Count | Routes |
|---|---:|---|
| Core and static | 24 | `/`, `/platform`, `/ai`, `/industries`, `/solutions`, `/use-cases`, `/compare`, `/security`, `/compliance`, `/pricing`, `/resources` + 9 resource pages, `/llm-info`, `/about`, `/contact`, `/demo` |
| Platform modules | 17 | `/platform/[slug]` |
| Industries | 19 | `/industries/[slug]` |
| Persona solutions | 8 | `/solutions/[slug]` |
| Comparisons | 11 | `/compare/[slug]` |
| Use cases | 7 | `/use-cases/[slug]` |
| **Total indexable** | **86** | |

### 5.2 Navigation Logic

- Platform is the product capability axis.
- Industries is the operating-context axis.
- Solutions is the role axis.
- Use cases is the outcome axis.
- Compare is the evaluation axis.
- Resources is the proof and education axis.

Every child page should link up to its hub, across to two peers, and down to one proof or conversion path.

---

## 6. Core Page Content

### 6.1 Home — `/`

**H1:** Run Your Entire Workforce on One Unified Platform

**Subhead:** SpotSign AI connects HR, payroll, attendance, talent, compliance, finance, IT operations, and workforce analytics for corporate and frontline teams.

**Primary CTA:** Request a Demonstration  
**Secondary CTA:** Explore the Platform

**Required sections:**

1. **The operating gap:** Corporate systems and frontline reality are disconnected. Spreadsheets, biometric devices, shift rosters, payroll inputs, and asset records do not share one operating layer.
2. **The five pillars:** People, Work, Money, Operations & IT, Insights.
3. **One workforce view:** Corporate salaried, industrial blue-collar, piece-rate, and field workers in one platform.
4. **Operational proof:** Biometric attendance, 24/7 rosters, payroll-to-GL, statutory compliance, asset recovery, and executive dashboards.
5. **Industry context:** 19 vertical packs.
6. **Trust:** Security controls, audit logging, enterprise SSO, and governed access.
7. **FAQ:** Use the 12 approved questions from `content/faqs.json`.
8. **Final CTA:** Request a Demonstration.

**Internal links:** `/platform`, `/industries`, `/solutions`, `/use-cases`, `/compare`, `/security`, `/resources/faq`.

---

### 6.2 Platform Hub — `/platform`

**H1:** One Operating System for Every Workforce Function

**Subhead:** Connect HR, work, money, operations, and insights without stitching together disconnected tools.

**Primary CTA:** Request a Demonstration  
**Secondary CTA:** Explore Modules

**Required sections:**

1. Why point solutions create operational gaps.
2. The 17 connected modules, grouped by the five pillars.
3. How data flows from attendance to payroll to finance to analytics.
4. The value of one employee record and one workflow layer.
5. Implementation and integration overview.
6. FAQ and CTA.

**Content gap:** 439 words. Add a module-selection table, a data-flow diagram description, and two operational examples.

---

### 6.3 AI — `/ai`

**H1:** AI That Works Inside Workforce Operations

**Subhead:** Embedded workflow automation, predictive workforce intelligence, and non-destructive planning inside the operating system.

**Primary CTA:** See AI in a Demonstration

**Required sections:**

1. AI embedded in workflows, not bolted on.
2. Workflow automation examples.
3. Predictive workforce intelligence examples.
4. Non-destructive planning and scenario simulation.
5. Governance, human review, and data boundaries.
6. FAQ and CTA.

**Constraint:** This is the primary page for AI claims. Do not duplicate unapproved AI claims on other pages.

---

### 6.4 Industries Hub — `/industries`

**H1:** Workforce Operations Built for Your Industry

**Subhead:** 19 pre-configured industry packs for shift, compliance, payroll, and field realities.

**Primary CTA:** Find Your Industry  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Why generic HR software fails operational industries.
2. The 19 industry packs.
3. Shared capabilities across industries.
4. Industry-specific compliance and payroll examples.
5. Selection guidance.
6. CTA.

---

### 6.5 Solutions Hub — `/solutions`

**H1:** Workforce Solutions by Role

**Subhead:** Give every leader one operating view of the work, money, and risk in their workforce.

**Primary CTA:** Find Your Role  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Role-based workforce decisions.
2. The 8 persona solutions.
3. Shared platform foundation.
4. Role-specific outcomes.
5. CTA.

**Content gap:** 317 words. Add a role-to-module matrix and three cross-role workflow examples.

---

### 6.6 Use Cases Hub — `/use-cases`

**H1:** Solve the Workforce Problems That Matter Most

**Subhead:** From board reporting and workforce planning to M&A integration and payroll accuracy.

**Primary CTA:** Explore Use Cases  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. The seven high-value use cases.
2. The data and workflow requirements for each.
3. Expected operational outcome.
4. Related modules and industries.
5. CTA.

---

### 6.7 Compare Hub — `/compare`

**H1:** Compare SpotSign AI with Your Shortlist

**Subhead:** Evaluate enterprise HCM, mid-market HRMS, payroll platforms, and global employment tools against operational workforce needs.

**Primary CTA:** View Comparisons  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. How to evaluate a workforce operating system.
2. The 11 comparison pages.
3. Evaluation criteria: statutory depth, frontline operations, planning, integration, implementation, and analytics.
4. A neutral “best fit” statement for each category.
5. CTA.

**Content rule:** Every comparison must be factual, dated, and reviewed. Do not publish unsourced competitor claims.

---

### 6.8 Resources Hub — `/resources`

**H1:** Workforce Operations Research and Resources

**Subhead:** Practical guides, reports, templates, webinars, and answers for workforce leaders.

**Primary CTA:** Browse Resources  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Featured resource.
2. Resource libraries.
3. Most-read guides.
4. FAQ.
5. CTA.

**Known issue:** Resource cards currently point to `/demo`. Replace with canonical resource pages as they are published.

---

### 6.9 Security — `/security`

**H1:** Enterprise Security and Trust

**Subhead:** Protect workforce data with secure access controls, enterprise SSO, encryption, and audit logging.

**Primary CTA:** Talk to Security  
**Secondary CTA:** Review Compliance

**Required sections:**

1. Security governance commitment.
2. Identity and access controls.
3. Data protection and encryption.
4. Audit logging and monitoring.
5. Vendor and integration controls.
6. Incident and continuity approach.
7. Security FAQ.
8. CTA.

**Content gap:** 331 words. Expand with control categories, infrastructure boundaries, and a subprocessor section once approved by security.

---

### 6.10 Compliance — `/compliance`

**H1:** Statutory Compliance Built into Workforce Operations

**Subhead:** Automate Indian payroll and labour-law workflows across TDS, EPFO, ESIC, Professional Tax, Factories Act, and maritime rules.

**Primary CTA:** Review Compliance Capabilities  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Compliance as a workflow, not a year-end task.
2. Section 192 TDS and dual tax regimes.
3. EPFO and ECR.
4. ESIC.
5. State-wise Professional Tax.
6. Factories Act and Form 25 muster rolls.
7. STCW 2010 and MLC 2006 for maritime.
8. Controls, evidence, and audit trails.
9. CTA.

**Content gap:** 369 words. Add a compliance calendar and a jurisdiction coverage table.

---

### 6.11 Pricing — `/pricing`

**H1:** Pricing That Fits Your Workforce Model

**Subhead:** Enterprise pricing based on workforce size, modules, entities, and operational complexity.

**Primary CTA:** Request a Quote  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Pricing drivers.
2. Module and industry-pack options.
3. Implementation and support.
4. Security and compliance included.
5. FAQ.
6. CTA.

**Content gap:** 440 words. Add a pricing-factor table and a clear “what is not included” section.

---

### 6.12 About — `/about`

**H1:** Building the Operating System Where Organizations Actually Run

**Subhead:** SpotSign AI, powered by Spotsign Workforce360 and part of DIMENSHION, connects corporate HR systems with frontline workforce reality.

**Primary CTA:** Talk to Us  
**Secondary CTA:** Explore the Platform

**Required sections:**

1. Mission.
2. The structural workforce gap.
3. Product philosophy.
4. Parent brand and lineage.
5. Operating principles.
6. CTA.

**Content gap:** 368 words. Add leadership, origin story, and customer-outcome sections when approved.

---

### 6.13 Contact — `/contact`

**H1:** Talk to SpotSign AI

**Subhead:** Tell us about your workforce, entities, and operating model. We will route you to the right team.

**Primary CTA:** Send an Enquiry  
**Secondary CTA:** Request a Demonstration

**Required sections:**

1. Contact form.
2. Sales, support, and partnership routing.
3. Response expectations.
4. Location or operating-hours note.
5. FAQ.

---

### 6.14 Demo — `/demo`

**H1:** Request a Demonstration

**Subhead:** See how SpotSign AI connects HR, payroll, attendance, operations, and analytics for your workforce.

**Primary CTA:** Book a Demo

**Required sections:**

1. What the demo covers.
2. Who should attend.
3. What to prepare.
4. Demo form.
5. Privacy note.
6. FAQ.

---

### 6.15 LLM Info — `/llm-info`

**H1:** SpotSign AI Knowledge Specifications for Answer Engines

**Subhead:** Authoritative, structured product definitions for answer engines and automated research crawlers.

**Required sections:**

1. `/llms.txt` summary.
2. `/llms-full.txt` coverage.
3. Canonical factual grounding.
4. Entity, category, pillars, modules, industries, comparisons, and use cases.
5. Crawler access and sitemap note.

**Status:** Updated to match current coverage.

---

## 7. Platform Module Pages

Each module page must follow this template:

1. H1 and one-sentence promise.
2. Operational problem.
3. Three to five capabilities.
4. One workflow example.
5. Connected modules and data flow.
6. Proof or compliance detail.
7. FAQ.
8. CTA.

### 7.1 Module Content Map

| URL | H1 / Promise | Required proof points | Primary links |
|---|---|---|---|
| `/platform/hris` | A Single Source of Truth for Your Entire Workforce | Employee master, hierarchy, multi-entity cost centers, compliance documents, self-service | Payroll, lifecycle, analytics |
| `/platform/workforce-management` | Precision Scheduling, Rostering, and Time Tracking Everywhere | 24/7 rotations, 3-shift factories, maritime crews, hospital shifts, roster adherence | Attendance, payroll, field workforce |
| `/platform/attendance` | Biometric, Facial Check-in, and Geofenced Time Attendance | eSSL/ZKTeco hardware, mobile facial check-in, geofence, fraud prevention, offline capture | Workforce management, payroll, field workforce |
| `/platform/payroll` | Payroll That Connects Time, Pay, Tax, and General Ledger | Multi-entity payroll, overtime, expenses, arrears, journals, payslips | Tax compliance, finance, attendance |
| `/platform/tax-compliance` | Make Payroll and Statutory Compliance Effortless | Section 192 TDS, EPF, ESIC, PT, Form 16, ECR, challans, audit trails | Payroll, compliance, finance |
| `/platform/recruitment` | Recruit Smarter with Assisted Candidate Screening | Kanban pipeline, job distribution, resume screening, interview stages, offers | HRIS, onboarding, talent |
| `/platform/performance` | Turn Performance Data into Continuous Growth | KRAs, OKRs, 360 feedback, 9-box calibration, PIPs | Talent, learning, analytics |
| `/platform/learning` | Build the Capabilities Your Business Needs Next | Compliance training, SCORM, learning paths, assessments, records | Performance, compliance, talent |
| `/platform/employee-experience` | Give Every Employee One Place to Get Work Done | Self-service, helpdesk, SLAs, announcements, policies, peer recognition | HRIS, lifecycle, attendance |
| `/platform/it-assets` | Connect People Operations with Technology Operations | Laptop and device tracking, licenses, cloud accounts, recovery lock, offboarding | Lifecycle, finance, security |
| `/platform/finance` | Connect Workforce Costs Directly to Financial General Ledger | Payroll journals, cost-center allocation, AP, GL, reconciliations | Payroll, expenses, analytics |
| `/platform/expenses` | Expense Management and Travel Reimbursement with Zero Friction | Mobile receipts, per diem, approvals, policy checks, reimbursement | Payroll, finance, employee experience |
| `/platform/employee-lifecycle` | Every Employee Moment, Connected from Day One to Departure | Pre-boarding, 30-60-90 plans, transfers, exits, clearance, final settlement | HRIS, IT assets, payroll |
| `/platform/analytics` | Turn Workforce Data into Strategic Executive Clarity | Headcount, turnover, payroll run-rate, overtime, roster adherence, dashboards | Workforce planning, board dashboard, finance |
| `/platform/integrations` | Connect Seamlessly with Your Existing Enterprise Stack | Biometrics, SSO, banks, ERP/GL, APIs, device sync | Attendance, finance, IT assets |
| `/platform/field-workforce` | Field Workforce Operations, GPS Geofencing, and Route Tracking | GPS tracking, geofence check-in, route plans, visit proof, battery efficiency | Attendance, workforce management, expenses |
| `/platform/talent` | Talent Management, Competency Frameworks, and Succession Planning | Competency maps, 9-box, succession bench, mobility, development plans | Performance, learning, recruitment |

### 7.2 Module Metadata Note

Titles over 60 characters on `/platform/workforce-management`, `/platform/tax-compliance`, `/platform/performance`, `/platform/integrations`, `/platform/field-workforce`, and `/platform/talent` should be shortened by 2–13 characters.

---

## 8. Industry Pages

Each industry page must follow this template:

1. H1 and industry-specific promise.
2. Operating reality.
3. Workforce and compliance complexity.
4. Pre-configured industry pack.
5. Attendance, roster, payroll, and compliance workflows.
6. Related modules.
7. FAQ.
8. CTA.

### 8.1 Industry Content Map

| URL | Operating reality | Must-show proof |
|---|---|---|
| `/industries/shipping-maritime` | Crew rotations, vessel schedules, rest-hour limits, multi-port operations | STCW 2010 rest hours, MLC 2006, crew payroll, vessel cost allocation |
| `/industries/seafood-processing` | Seasonal peaks, cold-chain shifts, piece-rate yield, hygiene rules | kg-yield piece-rate, shift rosters, attendance, statutory payroll |
| `/industries/logistics-freight` | Hub shifts, driver routes, trip allowances, warehouse labor | Driver pay, trip allowances, geofenced attendance, shift rosters |
| `/industries/manufacturing` | 3-shift lines, contract labor, overtime, muster rolls | Shift scheduling, biometric attendance, overtime, Form 25 muster |
| `/industries/chemical-hazardous` | Hazard controls, shift continuity, EHS records, compliance audits | EHS-aware rosters, attendance, training records, statutory payroll |
| `/industries/healthcare` | 24/7 rotations, licensure, ward staffing, overtime | Hospital rotations, license tracking, attendance, payroll |
| `/industries/hospitality` | Seasonal demand, shift swaps, tips and service charge | Rosters, attendance, service-charge payroll, employee self-service |
| `/industries/fisheries-aquaculture` | Remote sites, seasonal labor, piece-rate work, safety | Remote attendance, piece-rate payroll, shift records, compliance |
| `/industries/cargo-freight-forwarding` | Customs documentation, CFS labor, port deadlines | Documentation staff rosters, CFS attendance, payroll, compliance |
| `/industries/retail-ecommerce` | Store rosters, peak seasons, associates, overtime | Store scheduling, attendance, payroll, performance |
| `/industries/petrol-pump-fuel-station` | Pump attendants, shifts, cash handling, incentives | Shift rosters, attendance, incentive payroll, audit trails |
| `/industries/cab-transport-aggregators` | Driver onboarding, shifts, incentives, compliance | Driver lifecycle, attendance, incentive pay, statutory records |
| `/industries/field-workforce` | Roaming teams, route coverage, visit proof, connectivity gaps | GPS geofencing, route tracking, offline attendance, expenses |
| `/industries/automobile-auto-services` | Dealership staff, service-bay technicians, incentives | Technician scheduling, attendance, incentive payroll, training |
| `/industries/travel-tourism` | Seasonal guides, tour schedules, multilingual staff | Guide scheduling, attendance, payroll, compliance |
| `/industries/school-university` | Faculty, staff, academic calendars, payroll | Faculty attendance, leave, payroll, compliance |
| `/industries/ites` | 24/7 shifts, client SLAs, schedule adherence, billing | Shift rosters, adherence, attendance, payroll |
| `/industries/bpo-call-centers` | Shrinkage, attrition, adherence, incentive pay | Adherence, shrinkage, attrition analytics, payroll |
| `/industries/information-technology` | Hybrid engineering teams, projects, assets, payroll | Hybrid attendance, project mapping, asset tracking, payroll |

### 8.2 Industry Metadata Note

16 of 19 industry titles exceed 60 characters. Prioritise shortening retail, fuel-station, automobile, shipping, BPO, and travel titles.

---

## 9. Persona Solution Pages

Each persona page must follow this template:

1. H1 and role-specific promise.
2. The decisions the role owns.
3. The data fragmentation problem.
4. Three platform workflows that help.
5. Outcome metrics.
6. Related modules and use cases.
7. CTA.

### 9.1 Persona Content Map

| URL | Role | Core pain | Outcome promise |
|---|---|---|---|
| `/solutions/chro` | Chief Human Resources Officer | Fragmented workforce data and slow planning | Organizational simulation, attrition telemetry, succession bench, board-ready insight |
| `/solutions/hr-leader` | HR Leader and People Operations | Manual onboarding, policy queries, leave and performance cycles | Automated lifecycle workflows, self-service, policy compliance |
| `/solutions/payroll-manager` | Payroll Manager and Compliance Lead | Manual timesheet handoffs and statutory exceptions | Multi-entity payroll, attendance-to-pay, TDS, PF, ESIC, PT, Form 16 |
| `/solutions/cfo-finance` | CFO and Finance Leadership | HR and finance data disconnect | Payroll journals, cost-center allocation, run-rate visibility, audit trail |
| `/solutions/operations` | Operations Head and Plant Leadership | Shift coverage, attendance, overtime, frontline friction | Rosters, muster, adherence, overtime control, field visibility |
| `/solutions/it-leader` | IT Director and Security Lead | Asset sprawl and delayed offboarding | Asset lifecycle, license tracking, recovery lock, access governance |
| `/solutions/recruiter` | Talent Acquisition and Recruiting Head | Slow screening and disconnected hiring data | Kanban pipeline, resume screening, interview workflow, offer handoff |
| `/solutions/employee` | Every Employee and Frontline Worker | Multiple portals and unclear pay or leave status | One self-service place for schedules, attendance, leave, payslips, and proofs |

**Content gap:** All eight persona pages are under 500 words. Add one decision table, one workflow scenario, and one outcome section to each.

---

## 10. Use-Case Pages

Each use-case page must follow this template:

1. H1 and outcome.
2. The operational problem.
3. Why traditional tools fail.
4. The SpotSign AI workflow.
5. Data sources and modules.
6. Expected outcome.
7. Related industry and persona.
8. FAQ.
9. CTA.

### 10.1 Use-Case Content Map

| URL | Problem | Platform workflow | Outcome |
|---|---|---|---|
| `/use-cases/board-dashboard` | Stale monthly PDFs and fragmented governance metrics | Unified dashboards across entities, shifts, payroll, attrition | Real-time board and executive visibility |
| `/use-cases/workforce-planning` | Strategy and workforce capacity are disconnected | Demand forecasting, scenario modelling, capacity planning | Defensible hiring and restructuring decisions |
| `/use-cases/attrition-retention` | Disengagement, pay compression, and burnout surface too late | Attrition analytics, risk signals, compensation review | Earlier retention action and lower regret attrition |
| `/use-cases/dei-analytics` | Pay gaps and promotion disparities are hard to evidence | Demographic distribution, parity audits, promotion analysis | Measurable equity and defensible reporting |
| `/use-cases/identity-audit` | Access and assets remain active after exit | Asset tracking, license mapping, access freeze, settlement hold | Complete offboarding and recovery |
| `/use-cases/m-and-a-integration` | Acquired entities have divergent pay, roles, and attendance rules | Entity consolidation, salary-band reconciliation, role mapping | One operating model after acquisition |
| `/use-cases/payroll-accuracy` | Manual timesheet handoffs create leakage | Biometric, piece-rate, leave, and payroll inputs connected | Lower leakage and faster payroll close |

**Metadata note:** `/use-cases/payroll-accuracy` has a 71-character title and should be shortened.

---

## 11. Comparison Pages

Each comparison page must follow this template:

1. H1 and comparison scope.
2. “Who this comparison is for.”
3. Criteria table.
4. Where SpotSign AI fits.
5. Where the competitor fits.
6. Migration or coexistence notes.
7. FAQ.
8. CTA.

### 11.1 Comparison Content Map

| URL | Competitor | Positioning focus |
|---|---|---|
| `/compare/workday` | Workday | Enterprise HCM depth versus operational workforce breadth and implementation agility |
| `/compare/sap` | SAP SuccessFactors | Global HCM suite versus frontline operations, Indian statutory payroll, and connected execution |
| `/compare/oracle` | Oracle HCM Cloud | Enterprise HCM versus workforce operations, planning, and implementation speed |
| `/compare/rippling` | Rippling | Global employment and IT workflow versus Indian statutory depth and industrial operations |
| `/compare/keka` | Keka | Mid-market HRMS versus enterprise workforce operating system |
| `/compare/darwinbox` | Darwinbox | Regional enterprise HRMS versus operational depth and planning |
| `/compare/zoho` | Zoho People | SMB and mid-market HRIS versus enterprise operational breadth |
| `/compare/deel` | Deel | Global employment and contractor management versus domestic statutory payroll and operations |
| `/compare/bamboohr` | BambooHR | SMB HRIS versus scaling to multi-entity, frontline, and statutory operations |
| `/compare/hibob` | HiBob | Modern HRIS versus operational depth, shift work, and Indian compliance |
| `/compare/gusto` | Gusto | US SMB payroll versus Indian statutory and industrial workforce operations |

### 11.2 Comparison Guardrails

- Date every comparison.
- Cite public sources for competitor claims.
- Separate “not designed for” from “does not do”.
- Avoid unsupported claims about revenue, customers, or market share.
- Include a “choose the competitor if” section to preserve credibility.

---

## 12. Resource Library

### 12.1 Current Resource Pages

| URL | Current state | Required content |
|---|---|---|
| `/resources` | Hub, 349 words, cards link to `/demo` | Featured asset, library descriptions, latest resources |
| `/resources/reports` | 3 report cards, 337 words | Report detail pages, methodology, data sources, download gate |
| `/resources/webinars` | 3 webinar cards, 301 words | Recording pages, speakers, dates, transcript or summary |
| `/resources/case-studies` | 3 case-study cards, 388 words | Approved customer stories with metrics and quotes |
| `/resources/templates` | 4 template cards, 327 words | Real downloadable files, instructions, licence terms |
| `/resources/whitepapers` | 3 whitepaper cards, 261 words | Whitepaper detail pages, authors, abstracts, download |
| `/resources/articles` | 4 article cards, 320 words | Full articles with authors, dates, related content |
| `/resources/guides` | 3 guide cards, 285 words | Full guides or chapter pages with summaries |
| `/resources/faq` | 12 FAQs, 886 words | Keep current; add schema and last-reviewed date |
| `/resources/glossary` | 435 words | Expand to A–Z definitions with canonical anchors |

### 12.2 Required Resource Assets

Create canonical pages for:

1. State of Enterprise Workforce Operations 2026.
2. Indian Statutory Payroll and Labour Law Compliance Index.
3. Embedded vs Bolt-On Tools: ROI of Workflow Automations.
4. Why Traditional HRMS Platforms Fail Operational Workforces.
5. Section 192 TDS Dual Regimes for FY 2026–27.
6. Workforce Planning for Restructuring.
7. Floor Muster Shrinkage in 24/7 Manufacturing.
8. The Building Blocks of a Workforce Operating System.
9. The Dual-Workforce Playbook.
10. Strategic Workforce Simulation.
11. Modelling Organizational Restructuring.
12. Mastering Indian Statutory Payroll.
13. Eliminating Shift Friction.
14. Data Protection, Access Controls and Enterprise Governance.
15. Practical Foundations of Workforce Planning.
16. Workflow Automation with Zero Data Retention.
17. 3-Shift Rotational Roster Matrix.
18. Dual-Regime Salary CTC Structuring Model.
19. Zero-Trust IT Hardware Handover Checklist.
20. STCW 2010 Rest-Hour and Watchkeeping Log.

Each asset needs a title, summary, author, publication date, last-updated date, canonical URL, and CTA.

---

## 13. FAQ Content

The approved FAQ set lives in `content/faqs.json`. It covers:

1. What SpotSign AI is.
2. The five pillars.
3. Corporate and frontline coverage.
4. Indian statutory payroll.
5. Biometric and attendance support.
6. Industry packs.
7. Workforce planning.
8. IT asset management.
9. Security and data protection.
10. Integrations.
11. Implementation.
12. Getting started.

**Rules:**

- Keep every answer in the DOM even when visually collapsed.
- Match FAQPage JSON-LD to visible questions.
- Add a last-reviewed date.
- Avoid duplicating the same FAQ verbatim across unrelated pages.

---

## 14. Metadata Register

### 14.1 Current State

- All 86 pages have a canonical, OG image, one H1, and valid JSON-LD.
- All descriptions are 120–160 characters.
- 37 titles exceed 60 characters.
- 23 static pages inherit root OG URL/title.

### 14.2 Title Shortening Backlog

| Current length | URL | Suggested direction |
|---:|---|---|
| 73 | `/platform/talent` | “Talent Management & Succession Planning \| SpotSign AI” |
| 72 | `/solutions` | “Workforce Solutions by Role \| SpotSign AI” |
| 71 | `/use-cases/payroll-accuracy` | “Zero-Leakage Payroll Accuracy \| SpotSign AI” |
| 70 | `/platform/field-workforce` | “Field Workforce Management \| SpotSign AI” |
| 70 | `/industries/automobile-auto-services` | “Auto Dealer HRMS & Technician Scheduling \| SpotSign AI” |
| 69 | `/industries/retail-ecommerce` | “Retail Workforce Management \| SpotSign AI” |
| 69 | `/industries/petrol-pump-fuel-station` | “Fuel Station Workforce Management \| SpotSign AI” |
| 68 | `/industries/bpo-call-centers` | “BPO Workforce Management \| SpotSign AI” |
| 66 | `/industries/travel-tourism` | “Tourism Workforce Management \| SpotSign AI” |
| 65 | `/platform/performance` | “Performance & 9-Box Software \| SpotSign AI” |

Apply the same approach to the remaining over-60 titles in the audit report.

### 14.3 Static OG Backlog

Add page-specific `openGraph` and `twitter` metadata to:

`/platform`, `/industries`, `/solutions`, `/use-cases`, `/compare`, `/security`, `/compliance`, `/pricing`, `/resources`, `/resources/reports`, `/resources/webinars`, `/resources/case-studies`, `/resources/templates`, `/resources/whitepapers`, `/resources/articles`, `/resources/guides`, `/resources/faq`, `/resources/glossary`, `/llm-info`, `/about`, `/contact`, `/demo`.

Home should continue to use the root social card.

---

## 15. Content Production Backlog

### Priority 1 — Publish Real Resources

- Build 20 canonical resource detail pages.
- Replace `/demo` card destinations.
- Add downloads, authors, dates, and related content.
- Add resource schema where appropriate.

### Priority 2 — Expand Thin Pages

- Raise all persona pages above 600 words.
- Expand `/security`, `/compliance`, `/pricing`, `/platform`, `/solutions`, `/use-cases`, `/about`, and `/llm-info`.
- Add two proof-backed sections to each thin resource library.

### Priority 3 — Complete Static Metadata

- Add page-level OG/Twitter to 22 static pages.
- Shorten 37 over-60 titles.
- Add social preview QA to the release checklist.

### Priority 4 — Fix Heading Semantics

- Replace decorative `h4`/`h5` mockup labels with `p` or `span`.
- Ensure every page follows `h1 → h2 → h3`.

### Priority 5 — Strengthen Evidence

- Add citations and methodology to compliance and industry content.
- Add public, dated sources to comparison pages.
- Add named authors and reviewers to resource content.

### Priority 6 — Consolidate Schema

- Review sitewide and page-level SoftwareApplication nodes.
- Keep one primary product entity per page.
- Ensure FAQ schema matches visible FAQ content.

### Priority 7 — Improve Internal Linking

- Link every module to two sibling modules and one use case.
- Link every industry to three relevant modules and one comparison.
- Link every persona to two modules and one use case.
- Link every comparison to the platform hub and one industry.

---

## 16. Editorial Governance

### 16.1 Review Requirements

| Content type | Required review |
|---|---|
| Core positioning | Product marketing + leadership |
| Security | Security lead + legal |
| Compliance | Payroll/compliance SME + legal |
| Competitor comparison | Product marketing + legal |
| Customer case study | Customer approval + legal |
| AI claims | Product + legal |
| Pricing | Sales + finance + legal |

### 16.2 Change Checklist

Before publishing:

- [ ] H1 is unique and matches intent.
- [ ] Title is 60 characters or fewer.
- [ ] Description is 120–160 characters.
- [ ] Canonical is correct.
- [ ] OG/Twitter metadata is page-specific.
- [ ] One H1 and valid heading order.
- [ ] Every image has `alt` and dimensions.
- [ ] JSON-LD parses.
- [ ] FAQ schema matches visible answers.
- [ ] Internal links resolve.
- [ ] Claims are sourced or approved.
- [ ] CTA matches page intent.
- [ ] Sitemap and LLM files are updated if a route is added or removed.

---

## 17. Definition of Done

A page is complete when:

1. It has a unique intent and is not a duplicate of a sibling page.
2. It explains the operational problem before listing features.
3. It includes at least one concrete workflow example.
4. It links to its hub, two peers, and one proof or use-case page.
5. Its metadata passes the rules in Section 4.1.
6. Its FAQ answers are visible in the DOM.
7. Its schema is valid and matches the page.
8. Its claims are approved and dated.
9. Its CTA is specific to the page intent.
10. It is included in `/sitemap.xml`, `/llms.txt`, and `/llms-full.txt`.
