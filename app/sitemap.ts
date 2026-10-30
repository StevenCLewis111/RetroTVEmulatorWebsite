import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://www.retrotvemulator.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/download`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tutorial`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
