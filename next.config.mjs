/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/CompetitorWorkday', destination: '/compare/workday', permanent: true },
      { source: '/competitor-workday', destination: '/compare/workday', permanent: true },
      { source: '/CompetitorSAP', destination: '/compare/sap', permanent: true },
      { source: '/competitor-sap', destination: '/compare/sap', permanent: true },
      { source: '/CompetitorOracle', destination: '/compare/oracle', permanent: true },
      { source: '/competitor-oracle', destination: '/compare/oracle', permanent: true },
      { source: '/CompetitorRippling', destination: '/compare/rippling', permanent: true },
      { source: '/competitor-rippling', destination: '/compare/rippling', permanent: true },
      { source: '/CompetitorDeel', destination: '/compare/deel', permanent: true },
      { source: '/competitor-deel', destination: '/compare/deel', permanent: true },
      { source: '/CompetitorDarwinbox', destination: '/compare/darwinbox', permanent: true },
      { source: '/competitor-darwinbox', destination: '/compare/darwinbox', permanent: true },
      { source: '/CompetitorKeka', destination: '/compare/keka', permanent: true },
      { source: '/competitor-keka', destination: '/compare/keka', permanent: true },
      { source: '/CompetitorZoho', destination: '/compare/zoho', permanent: true },
      { source: '/competitor-zoho', destination: '/compare/zoho', permanent: true },
      { source: '/CompetitorBambooHR', destination: '/compare/bamboohr', permanent: true },
      { source: '/competitor-bamboo-hr', destination: '/compare/bamboohr', permanent: true },
      { source: '/competitorbamboohr', destination: '/compare/bamboohr', permanent: true },
      { source: '/CompetitorHiBob', destination: '/compare/hibob', permanent: true },
      { source: '/competitor-hi-bob', destination: '/compare/hibob', permanent: true },
      { source: '/competitorhibob', destination: '/compare/hibob', permanent: true },
      { source: '/CompetitorGusto', destination: '/compare/gusto', permanent: true },
      { source: '/competitor-gusto', destination: '/compare/gusto', permanent: true },
      { source: '/platform/ai', destination: '/ai', permanent: true },
      { source: '/platform/digital-twin', destination: '/platform/analytics', permanent: true },
      // Legacy use-case redirects
      { source: '/UseCaseBoardDashboard', destination: '/use-cases/board-dashboard', permanent: true },
      { source: '/use-case-board-dashboard', destination: '/use-cases/board-dashboard', permanent: true },
      { source: '/UseCaseWorkforcePlanning', destination: '/use-cases/workforce-planning', permanent: true },
      { source: '/use-case-workforce-planning', destination: '/use-cases/workforce-planning', permanent: true },
      { source: '/UseCaseAttritionRetention', destination: '/use-cases/attrition-retention', permanent: true },
      { source: '/use-case-attrition-retention', destination: '/use-cases/attrition-retention', permanent: true },
      { source: '/UseCaseDEI', destination: '/use-cases/dei-analytics', permanent: true },
      { source: '/use-case-dei', destination: '/use-cases/dei-analytics', permanent: true },
      { source: '/UseCaseIdentityAudit', destination: '/use-cases/identity-audit', permanent: true },
      { source: '/use-case-identity-audit', destination: '/use-cases/identity-audit', permanent: true },
      { source: '/UseCaseMAIntegration', destination: '/use-cases/m-and-a-integration', permanent: true },
      { source: '/use-case-ma-integration', destination: '/use-cases/m-and-a-integration', permanent: true },
      { source: '/UseCasePayrollAccuracy', destination: '/use-cases/payroll-accuracy', permanent: true },
      { source: '/use-case-payroll-accuracy', destination: '/use-cases/payroll-accuracy', permanent: true },
    ];
  },
};

export default nextConfig;
