import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

const translations: Record<Locale, { backToBlog: string }> = {
  ja: {
    backToBlog: 'ブログ一覧に戻る',
  },
  es: {
    backToBlog: 'Volver al blog',
  },
}

async function getPost(slug: string, locale: Locale) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      "title": title_${locale},
      "body": body_${locale},
      slug,
      mainImage,
      category,
      publishedAt
    }`,
    { slug }
  )
}

type Props = {
  params: Promise<{ locale: Locale; slug: string }>
}

export default async function BlogPage({ params }: Props) {
  const { locale, slug } = await params
  const t = translations[locale]
  const post = await getPost(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href={`/${locale}/blog`}
            className="inline-flex items-center text-gray-600 hover:text-black mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToBlog}
          </a>

          <p className="text-sm text-gray-500 mb-4">
            {new Date(post.publishedAt).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <h1 className="text-5xl font-bold mb-12">{post.title}</h1>

          {post.body && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
