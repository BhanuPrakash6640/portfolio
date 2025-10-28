// ✅ getDatoCmsToken.ts (fixed for Vercel)
export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    // Localhost / Dev
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

    // 👇 Add your Vercel deployment domain here
    case 'portfolio-9v2mnmc46-bhanuprakash6640s-projects.vercel.app':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    // 👇 If you add a custom domain later (like bhanuprakash.tech)
    // case 'bhanuprakash.tech':
    //   return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
