import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'
import { client } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://shichifuku.com'

  // Static pages
  const staticPages = [
    '',
    '/business',
    '/business/trading',
    '/business/real-estate',
    '/business/football',
    '/properties',
    '/projects',
    '/blog',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ]

  // Get dynamic content
  const properties = await client.fetch(`*[_type == "property"]{ slug }`)
  const posts = await client.fetch(`*[_type == "post"]{ slug }`)
  const projects = await client.fetch(`*[_type == "project"]{ slug }`)

  const sitemap: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    })

    // Add dynamic property pages
    properties.forEach((property: any) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/properties/${property.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })

    // Add dynamic blog pages
    posts.forEach((post: any) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })

    // Add dynamic project pages
    projects.forEach((project: any) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/projects/${project.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    })
  })

  return sitemap
}
