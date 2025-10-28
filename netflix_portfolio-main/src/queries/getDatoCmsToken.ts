// ✅ Simplified getDatoCmsToken.ts (works everywhere)
export const getDatoCmsToken = (): string => {
  return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';
};
