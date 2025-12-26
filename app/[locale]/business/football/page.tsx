import { Locale } from '@/lib/i18n'
import Button from '@/components/Button'

const translations = {
  ja: {
    title: 'サッカー事業',
    subtitle: '青少年育成と文化交流を通じたスポーツプロジェクト',
    intro:
      'Shichifukuは、サッカーを通じた青少年の育成と、日本とスペイン間の文化交流を促進するプロジェクトを展開しています。',
    camp: {
      title: 'アドルフォ・アルダナ サッカーキャンプ2025',
      purpose: '目的',
      purposeDesc: '青少年の技術向上、メンタル面の成長、そして文化的な交流を目的としています。',
      overview: '概要',
      overviewDesc:
        'プロサッカー選手アドルフォ・アルダナ氏による直接指導を受けられる貴重な機会。技術だけでなく、スポーツマンシップや国際的な視野を育みます。',
      link: 'PR TIMESプレスリリース',
      linkUrl: 'https://prtimes.jp/main/html/rd/p/000000006.000157827.html',
    },
    future: {
      title: '今後の展開',
      desc: '今後も、サッカーキャンプやスポーツ交流イベントを企画・運営し、若い世代の成長をサポートしていきます。',
    },
    cta: 'お問い合わせ',
  },
  es: {
    title: 'Fútbol',
    subtitle: 'Proyectos deportivos a través del desarrollo juvenil e intercambio cultural',
    intro:
      'Shichifuku desarrolla proyectos que promueven el desarrollo juvenil y el intercambio cultural entre Japón y España a través del fútbol.',
    camp: {
      title: 'Campamento de Fútbol Adolfo Aldana 2025',
      purpose: 'Propósito',
      purposeDesc:
        'Mejorar las habilidades técnicas de los jóvenes, el crecimiento mental y el intercambio cultural.',
      overview: 'Descripción',
      overviewDesc:
        'Una valiosa oportunidad de recibir instrucción directa del futbolista profesional Adolfo Aldana. Más allá de la técnica, se fomenta el espíritu deportivo y la perspectiva internacional.',
      link: 'Comunicado de prensa PR TIMES',
      linkUrl: 'https://prtimes.jp/main/html/rd/p/000000006.000157827.html',
    },
    future: {
      title: 'Desarrollos Futuros',
      desc: 'Seguiremos organizando campamentos de fútbol y eventos de intercambio deportivo para apoyar el crecimiento de las generaciones jóvenes.',
    },
    cta: 'Contactar',
  },
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function FootballPage({ params }: Props) {
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
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-gray-700 mb-16 text-center">{t.intro}</p>

          <div className="glass rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.camp.title}</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">{t.camp.purpose}</h3>
                <p className="text-gray-700">{t.camp.purposeDesc}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t.camp.overview}</h3>
                <p className="text-gray-700">{t.camp.overviewDesc}</p>
              </div>
            </div>

            <a
              href={t.camp.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              {t.camp.link}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="glass rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-6">{t.future.title}</h2>
            <p className="text-lg text-gray-700">{t.future.desc}</p>
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
