import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

const translations = {
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

export default async function BlogPostPage({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  const t = translations[params.locale]
  const post = await getPost(params.slug, params.locale)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href={`/${params.locale}/blog`}
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
            {new Date(post.publishedAt).toLocaleDateString(params.locale, {
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
