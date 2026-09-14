export const dynamic = "force-static";
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://al-ebdaa.vercel.app/sitemap.xml',
  }
}
