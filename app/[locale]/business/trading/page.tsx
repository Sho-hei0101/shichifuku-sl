import { Locale } from '@/lib/i18n'
import Button from '@/components/Button'
import Card from '@/components/Card'

const translations = {
  ja: {
    title: '貿易事業',
    subtitle: '日本とスペイン・EU間の貿易をサポートします',
    japanToSpain: {
      title: '日本からスペイン・EUへ',
      intro:
        '和牛、冷凍食品、日本酒などの日本製品をスペイン・EUへ輸出するためのサポートを提供します。',
      products: '取扱製品例（限定されません）',
      productList: ['和牛', '冷凍食品', '日本酒・焼酎', 'その他日本特産品'],
      note: '規制要件は案件ごとに異なります。詳細はお問い合わせください。',
    },
    spainToJapan: {
      title: 'スペインから日本へ',
      intro: 'スペイン製品の日本への輸入をサポートします。',
      products: '取扱製品例',
      productList: ['ワイン', 'ハム', 'チーズ', 'ミネラルウォーター'],
      strength: '小規模生産者との直接取引により、ユニークでニッチな製品の発掘が可能です。',
      export: '日本企業のスペインへの輸出に関するご相談も承ります。',
    },
    cta: 'お問い合わせ',
  },
  es: {
    title: 'Comercio Internacional',
    subtitle: 'Apoyamos el comercio entre Japón y España/UE',
    japanToSpain: {
      title: 'De Japón a España/UE',
      intro:
        'Brindamos apoyo para exportar productos japoneses como wagyu, alimentos congelados y sake a España y la UE.',
      products: 'Ejemplos de productos (no limitados)',
      productList: ['Wagyu', 'Alimentos congelados', 'Sake y licores japoneses', 'Otros productos japoneses'],
      note: 'Los requisitos regulatorios varían según el caso. Contáctenos para más detalles.',
    },
    spainToJapan: {
      title: 'De España a Japón',
      intro: 'Apoyamos la importación de productos españoles a Japón.',
      products: 'Ejemplos de productos',
      productList: ['Vino', 'Jamón', 'Queso', 'Agua mineral'],
      strength:
        'Nuestra fortaleza radica en descubrir pequeños productores y productos únicos y de nicho.',
      export:
        'También aceptamos consultas de empresas japonesas que deseen exportar a España.',
    },
    cta: 'Contactar',
  },
}

export default function TradingPage({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale]

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
          {/* Japan to Spain/EU */}
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">{t.japanToSpain.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{t.japanToSpain.intro}</p>

            <h3 className="text-xl font-semibold mb-4">{t.japanToSpain.products}</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              {t.japanToSpain.productList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-gray-600 italic">{t.japanToSpain.note}</p>
          </div>

          {/* Spain to Japan */}
          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">{t.spainToJapan.title}</h2>
            <p className="text-lg text-gray-700 mb-8">{t.spainToJapan.intro}</p>

            <h3 className="text-xl font-semibold mb-4">{t.spainToJapan.products}</h3>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              {t.spainToJapan.productList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-lg text-gray-700 mb-4 font-medium">{t.spainToJapan.strength}</p>
            <p className="text-gray-600">{t.spainToJapan.export}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Button href={`/${params.locale}/contact`}>{t.cta}</Button>
        </div>
      </section>
    </div>
  )
}
