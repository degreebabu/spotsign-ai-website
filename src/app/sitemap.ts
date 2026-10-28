import type { MetadataRoute } from "next";
import productsData from "../../content/products.json";
import industriesData from "../../content/industries.json";
import personasData from "../../content/personas.json";
import competitorsData from "../../content/competitors.json";
import usecasesData from "../../content/usecases.json";

const BASE_URL = "https://spotsign.ai";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/platform", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ai", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
  { path: "/compare", changeFrequency: "monthly", priority: 0.8 },
  { path: "/security", changeFrequency: "monthly", priority: 0.7 },
  { path: "/compliance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources/reports", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/webinars", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/case-studies", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/templates", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/whitepapers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/articles", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/guides", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/glossary", changeFrequency: "monthly", priority: 0.6 },
  { path: "/llm-info", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/demo", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const toEntry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  const products = Object.values((productsData as any).products);
  const industries = Object.values((industriesData as any).industries);
  const personas = Object.values((personasData as any).personas);
  const competitors = Object.values((competitorsData as any).competitors);
  const usecases = Object.values((usecasesData as any).usecases);

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) =>
      toEntry(path, priority, changeFrequency),
    ),
    ...products.map((product: any) => toEntry(`/platform/${product.slug}`, 0.8)),
    ...industries.map((industry: any) => toEntry(`/industries/${industry.slug}`, 0.8)),
    ...personas.map((persona: any) => toEntry(`/solutions/${persona.slug}`, 0.7)),
    ...competitors.map((competitor: any) => toEntry(`/compare/${competitor.slug}`, 0.7)),
    ...usecases.map((usecase: any) => toEntry(`/use-cases/${usecase.slug}`, 0.7)),
  ];
}
