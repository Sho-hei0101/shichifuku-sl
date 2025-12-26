import { Locale } from '@/lib/i18n'
import Button from '@/components/Button'

const translations = {
  ja: {
    title: '不動産事業',
    subtitle: 'スペイン高級不動産の売買・紹介をサポート',
    spain: {
      title: 'スペイン不動産（マルベーリャエリア）',
      intro: 'マルベーリャエリアを中心に、高級不動産の売買・紹介を行います。',
      lamborghini: 'ランボルギーニブランドヴィラの販売権を保有',
      support: '日本語サポートで安心の取引',
      note: '投機的な表現は避け、誠実なサポートを提供します。',
    },
    japan: {
      title: '日本市場へのサポート',
      intro: 'スペイン企業の日本不動産市場への参入をサポートします。',
      niseko: 'ニセコ地域の紹介と投資サポート',
      tokyo: '東京都内の物件へのアクセス支援',
      approach: '「市場参入サポート」「アクセス支援」の形でサポートを提供します。',
    },
    cta: 'お問い合わせ',
  },
  es: {
    title: 'Bienes Raíces',
    subtitle: 'Apoyo en compra-venta e introducción de propiedades de lujo en España',
    spain: {
      title: 'Bienes Raíces en España (Área de Marbella)',
      intro:
        'Nos enfocamos en el área de Marbella, ofreciendo venta e introducción de propiedades de lujo.',
      lamborghini: 'Tenemos derechos de venta exclusivos de villas de marca Lamborghini',
      support: 'Transacciones seguras con soporte en japonés',
      note: 'Evitamos expresiones especulativas y proporcionamos apoyo honesto.',
    },
    japan: {
      title: 'Apoyo al Mercado Japonés',
      intro:
        'Apoyamos a empresas españolas en la entrada al mercado inmobiliario japonés.',
      niseko: 'Introducción y apoyo de inversión en el área de Niseko',
      tokyo: 'Asistencia de acceso a propiedades en Tokio',
      approach: 'Proporcionamos apoyo como "asistencia de entrada al mercado" y "apoyo de acceso".',
    },
    cta: 'Contactar',
  },
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function RealEstatePage({ params }: Props) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600 mb-12">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Spain Real Estate */}
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">{t.spain.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{t.spain.intro}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏎️</span>
                <p className="text-lg text-gray-700">{t.spain.lamborghini}</p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🇯🇵</span>
                <p className="text-lg text-gray-700">{t.spain.support}</p>
              </div>
            </div>

            <p className="text-gray-600 italic">{t.spain.note}</p>
          </div>

          {/* Japan Market Support */}
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">{t.japan.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{t.japan.intro}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">⛷️</span>
                <p className="text-lg text-gray-700">{t.japan.niseko}</p>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏙️</span>
                <p className="text-lg text-gray-700">{t.japan.tokyo}</p>
              </div>
            </div>

            <p className="text-gray-600 italic">{t.japan.approach}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Button href={`/${locale}/contact`}>{t.cta}</Button>
        </div>
      </section>
    </div>
  )
}
