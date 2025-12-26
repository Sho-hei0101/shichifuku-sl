import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import Link from 'next/link'

const translations = {
  ja: {
    title: 'ブログ',
    subtitle: '最新の情報とインサイト',
    categories: {
      all: 'すべて',
      trade: '貿易',
      'real-estate': '不動産',
      football: 'サッカー',
    },
    noPosts: '記事はまだありません。',
  },
  es: {
    title: 'Blog',
    subtitle: 'Últimas noticias e insights',
    categories: {
      all: 'Todos',
      trade: 'Comercio',
      'real-estate': 'Inmobiliaria',
      football: 'Fútbol',
    },
    noPosts: 'No hay publicaciones aún.',
  },
}

async function getPosts(locale: Locale, category?: string) {
  const categoryFilter = category ? `&& category == "${category}"` : ''
  return await client.fetch(
    `*[_type == "post" ${categoryFilter}] | order(publishedAt desc) {
      _id,
      "title": title_${locale},
      "excerpt": excerpt_${locale},
      slug,
      mainImage,
      category,
      publishedAt
    }`
  )
}

type Props = {
  params: Promise<{ locale: Locale }>
  searchParams?: Promise<{ category?: string }>
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params
  const resolvedSearchParams = await searchParams
  const category = resolvedSearchParams?.category
  const t = translations[locale]
  const posts = await getPosts(locale, category)

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            {Object.entries(t.categories).map(([key, label]) => (
              <Link
                key={key}
                href={key === 'all' ? `/${locale}/blog` : `/${locale}/blog?category=${key}`}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  (key === 'all' && !category) || category === key
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{t.noPosts}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/${locale}/blog/${post.slug.current}`}
                  className="glass rounded-2xl p-6 hover:shadow-xl transition"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString(locale)}
                  </p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  {post.excerpt && <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
