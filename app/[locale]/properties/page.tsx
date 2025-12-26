import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import Link from 'next/link'

const translations = {
  ja: {
    title: '物件情報',
    subtitle: 'スペイン・マルベーリャエリアの高級不動産',
    noProperties: '現在、掲載可能な物件はありません。',
    contact: 'お問い合わせ',
  },
  es: {
    title: 'Propiedades',
    subtitle: 'Propiedades de lujo en el área de Marbella, España',
    noProperties: 'Actualmente no hay propiedades disponibles.',
    contact: 'Contactar',
  },
}

async function getProperties(locale: Locale) {
  return await client.fetch(
    `*[_type == "property"] | order(publishedAt desc) {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      slug,
      mainImage,
      price,
      currency,
      location,
      bedrooms,
      bathrooms,
      area
    }`
  )
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function PropertiesPage({ params }: Props) {
  const { locale } = await params
  const t = translations[locale]
  const properties = await getProperties(locale)

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {properties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-8">{t.noProperties}</p>
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                {t.contact}
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {properties.map((property: any) => (
                <Link
                  key={property._id}
                  href={`/${locale}/properties/${property.slug.current}`}
                  className="glass rounded-2xl overflow-hidden hover:shadow-xl transition"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      {property.bedrooms && <span>{property.bedrooms} bed</span>}
                      {property.bathrooms && <span>{property.bathrooms} bath</span>}
                      {property.area && <span>{property.area}m²</span>}
                    </div>
                    <p className="text-2xl font-bold">
                      {property.price?.toLocaleString()} {property.currency}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
