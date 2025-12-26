import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Button from '@/components/Button'
import { notFound } from 'next/navigation'

const translations = {
  ja: {
    backToList: '物件一覧に戻る',
    details: '物件詳細',
    bedrooms: 'ベッドルーム',
    bathrooms: 'バスルーム',
    area: '面積',
    location: '所在地',
    contact: 'お問い合わせ',
  },
  es: {
    backToList: 'Volver a propiedades',
    details: 'Detalles de la propiedad',
    bedrooms: 'Habitaciones',
    bathrooms: 'Baños',
    area: 'Área',
    location: 'Ubicación',
    contact: 'Contactar',
  },
}

async function getProperty(slug: string, locale: Locale) {
  return await client.fetch(
    `*[_type == "property" && slug.current == $slug][0] {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      "body": body_${locale},
      slug,
      mainImage,
      gallery,
      price,
      currency,
      location,
      bedrooms,
      bathrooms,
      area
    }`,
    { slug }
  )
}

export default async function PropertyDetailPage({
  params,
}: {
  params: { locale: Locale; slug: string }
}) {
  const t = translations[params.locale]
  const property = await getProperty(params.slug, params.locale)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <a
            href={`/${params.locale}/properties`}
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
            {t.backToList}
          </a>

          <h1 className="text-5xl font-bold mb-4">{property.title}</h1>
          <p className="text-2xl text-gray-600 mb-8">{property.location}</p>

          <div className="glass rounded-3xl p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.bedrooms}</p>
                <p className="text-2xl font-semibold">{property.bedrooms || '-'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.bathrooms}</p>
                <p className="text-2xl font-semibold">{property.bathrooms || '-'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.area}</p>
                <p className="text-2xl font-semibold">{property.area ? `${property.area}m²` : '-'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-2xl font-semibold">
                  {property.price?.toLocaleString()} {property.currency}
                </p>
              </div>
            </div>
          </div>

          {property.description && (
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">{property.description}</p>
            </div>
          )}

          {property.body && (
            <div className="prose max-w-none mb-12">
              <PortableText value={property.body} />
            </div>
          )}

          <div className="text-center py-12">
            <Button href={`/${params.locale}/contact`}>{t.contact}</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
