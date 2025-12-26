import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const hasProjectId = Boolean(projectId)

const fallbackClient = {
  fetch: async (query: string) => (query.includes('[0]') ? null : []),
}

export const client = hasProjectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : (fallbackClient as ReturnType<typeof createClient>)

const builder = hasProjectId ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    return {
      url: () => '',
    } as unknown as ReturnType<typeof imageUrlBuilder>['image']
  }

  return builder.image(source)
}
