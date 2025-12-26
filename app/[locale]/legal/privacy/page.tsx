import { Locale } from '@/lib/i18n'

const translations = {
  ja: {
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日',
    content: [
      {
        heading: '1. 収集する情報',
        body: 'お客様から提供される個人情報（氏名、メールアドレス、電話番号など）を収集します。',
      },
      {
        heading: '2. 情報の利用',
        body: '収集した情報は、お問い合わせへの対応、サービスの提供、業務連絡のために使用します。',
      },
      {
        heading: '3. 情報の共有',
        body: 'お客様の同意なしに第三者と個人情報を共有することはありません。',
      },
      {
        heading: '4. セキュリティ',
        body: '個人情報の保護のため、適切な技術的および組織的措置を講じています。',
      },
      {
        heading: '5. お問い合わせ',
        body: 'プライバシーポリシーに関するご質問は、お問い合わせページからご連絡ください。',
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización',
    content: [
      {
        heading: '1. Información que recopilamos',
        body: 'Recopilamos información personal que usted proporciona (nombre, correo electrónico, teléfono, etc.).',
      },
      {
        heading: '2. Uso de la información',
        body: 'La información recopilada se utiliza para responder consultas, proporcionar servicios y comunicaciones comerciales.',
      },
      {
        heading: '3. Compartir información',
        body: 'No compartimos información personal con terceros sin su consentimiento.',
      },
      {
        heading: '4. Seguridad',
        body: 'Implementamos medidas técnicas y organizativas apropiadas para proteger la información personal.',
      },
      {
        heading: '5. Contacto',
        body: 'Para preguntas sobre esta política de privacidad, contáctenos a través de nuestra página de contacto.',
      },
    ],
  },
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-sm text-gray-600">
            {t.lastUpdated}: {new Date().toLocaleDateString(locale)}
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {t.content.map((section, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
