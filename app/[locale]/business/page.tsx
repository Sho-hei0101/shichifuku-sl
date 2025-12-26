import { Locale } from '@/lib/i18n'
import Card from '@/components/Card'

const translations = {
  ja: {
    title: '事業内容',
    subtitle: 'Shichifukuは、国際貿易、不動産、スポーツの3つの柱で事業を展開しています。',
    trading: {
      title: '貿易事業',
      desc: '日本とスペイン・EU間の輸出入をサポート',
    },
    realEstate: {
      title: '不動産事業',
      desc: 'スペイン高級不動産の売買・紹介',
    },
    football: {
      title: 'サッカー事業',
      desc: '青少年育成とスポーツ交流プロジェクト',
    },
  },
  es: {
    title: 'Nuestros Negocios',
    subtitle:
      'Shichifuku opera en tres pilares principales: comercio internacional, bienes raíces y deportes.',
    trading: {
      title: 'Comercio Internacional',
      desc: 'Apoyo en exportaciones e importaciones entre Japón y España/UE',
    },
    realEstate: {
      title: 'Bienes Raíces',
      desc: 'Venta e introducción de propiedades de lujo en España',
    },
    football: {
      title: 'Fútbol',
      desc: 'Proyectos de desarrollo juvenil e intercambio deportivo',
    },
  },
}

export default function BusinessPage({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale]

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
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title={t.trading.title}
              description={t.trading.desc}
              href={`/${params.locale}/business/trading`}
            />
            <Card
              title={t.realEstate.title}
              description={t.realEstate.desc}
              href={`/${params.locale}/business/real-estate`}
            />
            <Card
              title={t.football.title}
              description={t.football.desc}
              href={`/${params.locale}/business/football`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
