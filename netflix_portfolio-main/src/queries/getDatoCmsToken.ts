// ✅ getDatoCmsToken.ts (final version)
export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    // Local / Dev
    case 'ror.localhost':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    // Production domains
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    // 👇 Your Vercel domains
    case 'portfolio-9v2mnmc46-bhanuprakash6640s-projects.vercel.app':
    case 'portfolio-git-main-bhanuprakash6640s-projects.vercel.app':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
