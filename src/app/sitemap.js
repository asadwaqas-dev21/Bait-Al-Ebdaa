export const dynamic = "force-static";
export default function sitemap() {
  return [
    {
      url: 'https://al-ebdaa.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://al-ebdaa.vercel.app/en',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://al-ebdaa.vercel.app/ar',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
