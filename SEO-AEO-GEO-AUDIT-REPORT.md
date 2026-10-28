# SpotSign AI — SEO, AEO, GEO & LLM Audit Report

**Audit date:** 27 October 2026  
**Canonical origin:** `https://spotsign.ai`  
**Audited environment:** Production build, locally served on `http://localhost:3000`  
**Indexable pages audited:** 86  
**Build output:** 94 routes, including icons and `/sitemap.xml`  
**Raw audit data:** `/var/folders/gz/v88gz6rd1wdfy1wlqhkg9skr0000gn/T/opencode/seo-audit/pages.json`

---

## 1. Executive Summary

The site now has a sound technical SEO foundation:

- All 86 sitemap pages return HTTP 200.
- All 86 pages have a canonical URL, one H1, an OG image, and valid JSON-LD.
- All 86 pages include complete image `alt` text and explicit image dimensions.
- All internal links crawled from indexable pages resolve successfully.
- The generated `/sitemap.xml` contains 86 canonical URLs and no broken M&A or telecom routes.
- `/robots.txt` explicitly allows major search and AI crawlers.
- Both `/llms.txt` and `/llms-full.txt` reference every canonical page.
- All FAQ answers are present in the server-rendered HTML, even when visually collapsed.
- Homepage, dynamic template, Organization, and SoftwareApplication metadata were corrected.

Remaining work is primarily content and social-metadata quality:

- 37 titles are 61–73 characters; Google may truncate them.
- 23 pages, including home, still inherit the root OG URL and OG title because they are static pages.
- 27 pages have fewer than 500 words; 15 have fewer than 400.
- 14 pages begin their visible heading hierarchy with an `h4` or `h5` before an `h2`.
- Platform and industry templates emit two `SoftwareApplication` nodes: a sitewide node and a page-specific node.
- Resource cards still point to `/demo` instead of published article, report, webinar, template, or case-study pages.
- Several resource library pages represent future content rather than live downloadable assets.

### Audit Verdict

| Area | Status | Assessment |
|---|---|---|
| Crawlability and indexing | Strong | All pages return 200, canonicalise correctly, and are in the sitemap. |
| Metadata | Good, with tuning needed | Descriptions are all in range; titles remain slightly long on 37 pages. |
| Structured data | Good | All JSON-LD parses; duplicate app nodes should be consolidated. |
| AEO / answer-engine readiness | Strong | FAQ answers are in HTML, robots allow AI crawlers, and `/llms.txt` is comprehensive. |
| GEO / generative-engine grounding | Strong | Canonical facts, entity schema, industry context, and comparison pages are present. |
| Content depth | Needs work | Nearly one-third of pages are thin, especially resource and static pages. |
| Social sharing | Partial | Dynamic pages have page-level OG/Twitter; 23 static pages still use root social metadata. |
| Internal linking | Good | No broken internal links; resource-card destinations need real assets. |

---

## 2. Scope and Method

The audit covered every URL in the generated sitemap plus internal links discovered in rendered HTML.

Checks performed:

1. HTTP status and redirects.
2. Title, meta description, canonical, robots meta.
3. Open Graph and Twitter Card metadata.
4. H1 count and heading order.
5. Image `alt` text and intrinsic dimensions.
6. JSON-LD presence, parse validity, and schema types.
7. FAQ question and answer visibility in raw HTML.
8. Word count of rendered text.
9. Internal link discovery and resolution.
10. Sitemap, robots, `llms.txt`, and `llms-full.txt` coverage.

The production build was run after the fixes in this report. TypeScript validation and `next build` both passed.

---

## 3. Fixes Implemented During the Audit

| Area | Change |
|---|---|
| Title template | Removed the global `%s \| SpotSign AI` template that was duplicating branded titles. |
| Homepage description | Reduced to 156 characters. |
| Homepage canonical | Added a root canonical of `https://spotsign.ai`. |
| Organization schema | Added `@id`, description, and sales contact point; removed empty `sameAs`. |
| SoftwareApplication schema | Removed misleading zero-price `offers`; added a stable `@id` and parent relationship for page-level product schemas. |
| Social image | Generated a real 1200×630 `public/og-image.png`. |
| Dynamic social metadata | Added page-specific OG image, OG type, and Twitter metadata to platform, industry, solution, comparison, use-case, and AI pages. |
| Sitemap | Replaced the stale static `public/sitemap.xml` with generated `src/app/sitemap.ts`. |
| Sitemap coverage | Added field-workforce and talent modules; removed the invalid M&A slug. |
| Robots | Rewrote `public/robots.txt` with explicit allowances for search and AI crawlers. |
| LLM files | Rewrote `/llms.txt`; expanded `/llms-full.txt` to cover products, industries, personas, comparisons, use cases, resources, security, compliance, and FAQs. |
| FAQ rendering | Changed the FAQ accordion so every answer remains in the DOM when collapsed. |
| M&A route | Corrected navigation from `/use-cases/ma-integration` to `/use-cases/m-and-a-integration`. |
| Telecom link | Replaced the broken `/industries/telecom` reference with `/industries/information-technology`. |
| Description tuning | Brought all remaining meta descriptions into the 120–160 character range. |
| LLM info page | Synchronised `/llm-info` with current module, industry, comparison, use-case, and crawler coverage. |
| Glossary title | Added brand attribution without the removed global title template. |

---

## 4. Current Sitewide Metrics

| Metric | Result |
|---|---:|
| Sitemap canonical URLs | 86 |
| Pages returning HTTP 200 | 86 / 86 |
| Pages with canonical | 86 / 86 |
| Pages with exactly one H1 | 86 / 86 |
| Pages with OG image | 86 / 86 |
| Pages with valid JSON-LD | 86 / 86 |
| Images missing `alt` | 0 |
| Images missing width/height | 0 |
| Meta descriptions over 160 characters | 0 |
| Meta descriptions under 120 characters | 0 |
| Titles over 60 characters | 37 |
| Maximum title length | 73 |
| Pages with root OG URL/title | 23 |
| Pages under 500 words | 27 |
| Pages under 400 words | 15 |
| Broken internal links | 0 |
| Broken sitemap URLs | 0 |

---

## 5. Technical SEO Findings

### 5.1 Canonicals

All 86 pages have exactly one canonical. Dynamic templates use absolute URLs; static pages use absolute paths resolved through `metadataBase`. Home resolves to `https://spotsign.ai`.

**Status:** Pass.

### 5.2 Sitemap

`src/app/sitemap.ts` generates 86 URLs:

- 24 core/static pages.
- 17 platform modules.
- 19 industries.
- 8 persona solutions.
- 11 competitor comparisons.
- 7 use cases.

The M&A route is correct. Field-workforce and talent modules are included. No telecom URL is present.

**Status:** Pass.

### 5.3 Robots

`public/robots.txt`:

- Allows general crawling.
- Blocks `/api/`, `/admin/`, and `/dashboard/`.
- Explicitly allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Amazonbot, and CCBot.
- Declares `https://spotsign.ai/sitemap.xml`.

**Status:** Pass.

### 5.4 Titles

- No duplicate titles caused by the former global template.
- 49 titles are 60 characters or fewer.
- 37 titles are 61–73 characters.
- Longest titles: `/platform/talent` (73), `/solutions` (72), `/use-cases/payroll-accuracy` (71), `/platform/field-workforce` (70), `/industries/automobile-auto-services` (70).

**Recommendation:** Shorten the 37 over-60 titles by 3–13 characters. Prefer removing secondary keyword phrases rather than sacrificing brand attribution. Titles at 61–63 characters may still render acceptably, but should be tested in SERP previews.

### 5.5 Meta Descriptions

All descriptions now fall between 120 and 160 characters.

**Status:** Pass.

### 5.6 Open Graph and Twitter

- 63 dynamic pages have page-level OG and Twitter title/description/image.
- All 86 pages output an OG image.
- 23 static pages still inherit the root OG URL and root OG title: home, platform hub, industries hub, solutions hub, use-cases hub, compare hub, security, compliance, pricing, all resource pages, LLM info, about, contact, and demo.
- The same 23 pages inherit the root Twitter title.

**Recommendation:** Add page-level `openGraph` and `twitter` blocks to the 22 non-home static pages. Home is correctly using the root social card.

### 5.7 Headings

- Every page has exactly one H1.
- 14 pages begin their visible subheading hierarchy with `h4` or `h5` before an `h2`:
  - `/`
  - `/platform/hris`
  - `/platform/performance`
  - `/platform/learning`
  - `/platform/employee-experience`
  - `/platform/it-assets`
  - `/platform/employee-lifecycle`
  - `/platform/analytics`
  - `/platform/integrations`
  - `/platform/talent`
  - `/use-cases/attrition-retention`
  - `/use-cases/dei-analytics`
  - `/use-cases/identity-audit`
  - `/use-cases/m-and-a-integration`

These are primarily visual mockup labels rendered as headings. Convert decorative labels to paragraphs or spans, or promote the first substantive section to `h2`.

### 5.8 Images

- No missing `alt` attributes.
- No empty `alt` attributes.
- All images declare width and height.

**Status:** Pass.

### 5.9 Unused Metadata File

`content/seo-metadata.json` is not imported by any route or component. Either migrate its data into page metadata or remove it to avoid two competing metadata sources.

---

## 6. AEO, GEO, and LLM Readiness

### 6.1 Answer-Engine Content

- 56 pages include FAQPage JSON-LD.
- FAQ answers are now present in the initial HTML rather than conditionally unmounted.
- Headings, product definitions, industry context, and comparison data are server-rendered.
- `/resources/faq` contains 12 questions and 12 answer containers.

**Status:** Strong.

### 6.2 Structured Data

Schema types observed:

| Type | Approximate count |
|---|---:|
| Organization | 172 |
| SoftwareApplication | 122 |
| BreadcrumbList | 85 |
| FAQPage | 56 |
| Question / Answer | 169 each |
| ListItem | 241 |
| Brand / ContactPoint | 86 each |

All JSON-LD parsed successfully.

**Issue:** 36 platform and industry pages emit both the sitewide SoftwareApplication node and a page-specific SoftwareApplication node. The nodes now have distinct `@id` values and a parent relationship, but consolidation should still be reviewed to avoid entity ambiguity.

### 6.3 LLM Discovery Files

- `/llms.txt` covers every canonical page in the sitemap.
- `/llms-full.txt` covers every canonical page and includes product, industry, persona, comparison, use-case, resource, security, compliance, and FAQ context.
- Both files are linked from `/llm-info`.

**Status:** Pass.

### 6.4 AEO/GEO Gaps

1. Deploy substantive resource pages. Current article, guide, report, webinar, template, whitepaper, and case-study cards largely route to `/demo`.
2. Add original data, named methodology, and citations to comparison pages. Comparison content is currently capability-led but lacks independent evidence.
3. Add author, reviewed-by, and last-updated metadata to resource and FAQ content.
4. Expand industry pages with regulation-specific citations and operational terminology.
5. Consider a dedicated `/glossary` A–Z or definition index for entity grounding.

---

## 7. Content Depth

### 7.1 Pages Under 500 Words

| Words | URL |
|---:|---|
| 257 | `/contact` |
| 261 | `/resources/whitepapers` |
| 285 | `/resources/guides` |
| 301 | `/resources/webinars` |
| 317 | `/solutions` |
| 320 | `/resources/articles` |
| 321 | `/demo` |
| 327 | `/resources/templates` |
| 331 | `/security` |
| 337 | `/resources/reports` |
| 349 | `/resources` |
| 368 | `/about` |
| 369 | `/compliance` |
| 388 | `/resources/case-studies` |
| 393 | `/llm-info` |
| 428 | `/solutions/operations` |
| 430 | `/solutions/chro` |
| 433 | `/solutions/cfo-finance` |
| 435 | `/resources/glossary` |
| 438 | `/solutions/recruiter` |
| 439 | `/platform` |
| 440 | `/pricing` |
| 441 | `/solutions/hr-leader` |
| 447 | `/solutions/it-leader` |
| 458 | `/solutions/payroll-manager` |
| 468 | `/use-cases` |
| 485 | `/solutions/employee` |

### 7.2 Interpretation

- Contact, demo, and pricing pages can legitimately be shorter, but should still answer common pre-sales questions.
- Hub pages need stronger category explanations and links to child pages.
- Resource library pages need real summaries, authors, publication dates, and asset descriptions.
- Persona pages at 428–485 words are close to the threshold; adding two proof-backed sections would bring them above 600 words.
- Compliance and security pages should be expanded with control details, audit evidence, and subprocessors.

---

## 8. Internal Linking

- 92 unique internal paths were discovered.
- 84 are indexable pages; 8 are assets or LLM files.
- All internal links resolved successfully.
- The broken M&A and telecom links are gone.

**Remaining issue:** Resource cards on `/resources` and its child libraries typically link to `/demo`. This wastes internal link equity and prevents discovery of resource detail pages.

**Recommendation:** Publish each resource as a real page or downloadable asset with a canonical URL, then link cards to those URLs. Keep `/demo` as the conversion CTA, not the content destination.

---

## 9. Page-by-Page Inventory

Legend:

- **T** — title over 60 characters.
- **D** — description outside 120–160 characters.
- **C** — under 500 words.
- **O** — static page inheriting root OG URL/title.
- **L** — resource links currently point to `/demo`.
- **OK** — no automated flag from this audit.

### 9.1 Core Pages

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/` | 51 | 156 | 2381 | OK |
| `/platform` | 57 | 134 | 439 | C, O |
| `/ai` | 48 | 137 | 727 | OK |
| `/industries` | 63 | 160 | 582 | T, O |
| `/solutions` | 72 | 134 | 317 | T, C, O |
| `/use-cases` | 44 | 151 | 468 | C, O |
| `/compare` | 56 | 138 | 1024 | O |
| `/security` | 41 | 130 | 331 | C, O |
| `/compliance` | 57 | 144 | 369 | C, O |
| `/pricing` | 52 | 155 | 440 | C, O |
| `/resources` | 49 | 122 | 349 | C, O, L |
| `/resources/reports` | 63 | 157 | 337 | T, C, O, L |
| `/resources/webinars` | 55 | 151 | 301 | C, O, L |
| `/resources/case-studies` | 62 | 128 | 388 | T, C, O, L |
| `/resources/templates` | 65 | 132 | 327 | T, C, O, L |
| `/resources/whitepapers` | 45 | 125 | 261 | C, O, L |
| `/resources/articles` | 63 | 138 | 320 | T, C, O, L |
| `/resources/guides` | 53 | 135 | 285 | C, O, L |
| `/resources/faq` | 58 | 146 | 886 | O |
| `/resources/glossary` | 43 | 146 | 435 | C, O |
| `/llm-info` | 54 | 120 | 393 | C, O |
| `/about` | 52 | 140 | 368 | C, O |
| `/contact` | 38 | 147 | 257 | C, O |
| `/demo` | 57 | 129 | 321 | C, O |

### 9.2 Platform Modules

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/platform/hris` | 59 | 159 | 717 | OK |
| `/platform/workforce-management` | 62 | 156 | 694 | T |
| `/platform/attendance` | 60 | 151 | 665 | OK |
| `/platform/payroll` | 56 | 154 | 658 | OK |
| `/platform/tax-compliance` | 64 | 147 | 666 | T |
| `/platform/recruitment` | 49 | 143 | 659 | OK |
| `/platform/performance` | 65 | 131 | 647 | T |
| `/platform/learning` | 57 | 127 | 639 | OK |
| `/platform/employee-experience` | 56 | 146 | 641 | OK |
| `/platform/it-assets` | 52 | 143 | 638 | OK |
| `/platform/finance` | 60 | 135 | 605 | OK |
| `/platform/expenses` | 59 | 122 | 599 | OK |
| `/platform/employee-lifecycle` | 56 | 136 | 682 | OK |
| `/platform/analytics` | 60 | 142 | 622 | OK |
| `/platform/integrations` | 63 | 144 | 608 | T |
| `/platform/field-workforce` | 70 | 142 | 686 | T |
| `/platform/talent` | 73 | 126 | 635 | T |

### 9.3 Industries

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/industries/shipping-maritime` | 64 | 139 | 704 | T |
| `/industries/seafood-processing` | 63 | 135 | 680 | T |
| `/industries/logistics-freight` | 61 | 124 | 671 | T |
| `/industries/manufacturing` | 58 | 144 | 673 | OK |
| `/industries/chemical-hazardous` | 64 | 137 | 664 | T |
| `/industries/healthcare` | 54 | 127 | 647 | OK |
| `/industries/hospitality` | 59 | 126 | 663 | OK |
| `/industries/fisheries-aquaculture` | 64 | 128 | 646 | T |
| `/industries/cargo-freight-forwarding` | 63 | 122 | 646 | T |
| `/industries/retail-ecommerce` | 69 | 127 | 649 | T |
| `/industries/petrol-pump-fuel-station` | 69 | 126 | 688 | T |
| `/industries/cab-transport-aggregators` | 59 | 122 | 685 | OK |
| `/industries/field-workforce` | 64 | 124 | 649 | T |
| `/industries/automobile-auto-services` | 70 | 128 | 679 | T |
| `/industries/travel-tourism` | 66 | 130 | 652 | T |
| `/industries/school-university` | 58 | 139 | 663 | OK |
| `/industries/ites` | 62 | 124 | 671 | T |
| `/industries/bpo-call-centers` | 68 | 121 | 665 | T |
| `/industries/information-technology` | 64 | 124 | 651 | T |

### 9.4 Persona Solutions

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/solutions/chro` | 59 | 127 | 430 | C |
| `/solutions/hr-leader` | 58 | 129 | 441 | C |
| `/solutions/payroll-manager` | 61 | 120 | 458 | T, C |
| `/solutions/cfo-finance` | 50 | 139 | 433 | C |
| `/solutions/operations` | 53 | 129 | 428 | C |
| `/solutions/it-leader` | 64 | 130 | 447 | T, C |
| `/solutions/recruiter` | 60 | 122 | 438 | C |
| `/solutions/employee` | 55 | 132 | 485 | C |

### 9.5 Comparisons

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/compare/workday` | 57 | 159 | 924 | OK |
| `/compare/sap` | 57 | 153 | 783 | OK |
| `/compare/oracle` | 64 | 144 | 702 | T |
| `/compare/rippling` | 61 | 133 | 788 | T |
| `/compare/keka` | 63 | 124 | 796 | T |
| `/compare/darwinbox` | 48 | 154 | 690 | OK |
| `/compare/zoho` | 58 | 132 | 721 | OK |
| `/compare/deel` | 52 | 134 | 721 | OK |
| `/compare/bamboohr` | 65 | 139 | 733 | T |
| `/compare/hibob` | 64 | 153 | 744 | T |
| `/compare/gusto` | 63 | 158 | 718 | T |

### 9.6 Use Cases

| URL | Title | Desc | Words | Notes |
|---|---:|---:|---:|---|
| `/use-cases/board-dashboard` | 60 | 141 | 659 | OK |
| `/use-cases/workforce-planning` | 62 | 138 | 627 | T |
| `/use-cases/attrition-retention` | 50 | 130 | 566 | OK |
| `/use-cases/dei-analytics` | 55 | 136 | 546 | OK |
| `/use-cases/identity-audit` | 57 | 129 | 597 | OK |
| `/use-cases/m-and-a-integration` | 62 | 131 | 557 | T |
| `/use-cases/payroll-accuracy` | 71 | 128 | 533 | T |

---

## 10. Prioritised Roadmap

### Priority 1 — Publish Real Resource Assets

- Replace `/demo` card destinations with canonical article, guide, report, webinar, template, whitepaper, and case-study pages.
- Add author, published date, updated date, and download or read CTA.
- Expand each resource library from a card grid into an index with summaries and filters.

### Priority 2 — Complete Static Social Metadata

- Add page-level Open Graph and Twitter blocks to the 22 non-home static pages.
- Verify the social card preview for each page.

### Priority 3 — Reduce Thin Content

- Expand `/security`, `/compliance`, `/pricing`, `/platform`, `/solutions`, `/use-cases`, `/about`, and `/llm-info`.
- Add two or three substantive sections to every persona page.
- Add FAQ blocks to thin pages where questions match search intent.

### Priority 4 — Shorten Long Titles

- Reduce 37 titles to 60 characters or fewer.
- Preserve the primary keyword and brand while removing secondary keywords.

### Priority 5 — Fix Heading Hierarchy

- Replace decorative `h4`/`h5` labels in mockups with `p`/`span`.
- Ensure each page follows `h1 → h2 → h3` for substantive content.

### Priority 6 — Consolidate Structured Data

- Review the dual SoftwareApplication nodes on platform and industry pages.
- Keep one primary product entity per page or merge page-specific features into a referenced product node.

### Priority 7 — Strengthen GEO Evidence

- Add regulatory citations, methodology notes, and named sources to industry and compliance content.
- Add independent benchmark data to comparison pages.
- Create a definition index for core workforce-operating-system terms.

---

## 11. Validation Commands

```bash
npx tsc --noEmit
npm run build
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"
curl -sI http://localhost:3000/og-image.png
curl -s http://localhost:3000/llms.txt | wc -c
curl -s http://localhost:3000/llms-full.txt | wc -c
```

Production build result: **94 routes generated successfully**.  
TypeScript result: **passed**.  
Sitemap result: **86 canonical URLs, zero failed fetches**.
