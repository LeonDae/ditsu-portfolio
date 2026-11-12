export function getSiteUrl(configuredUrl?: string) {
  const deploymentUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
  const siteUrl =
    configuredUrl || process.env.NEXT_PUBLIC_SITE_URL || deploymentUrl || "http://localhost:3000";

  return new URL(siteUrl);
}
