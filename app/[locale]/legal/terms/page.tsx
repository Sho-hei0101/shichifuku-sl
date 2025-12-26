import { Locale } from '@/lib/i18n'

const translations = {
  ja: {
    title: '利用規約',
    lastUpdated: '最終更新日',
    content: [
      {
        heading: '1. 利用規約の適用',
        body: '本ウェブサイトをご利用いただくことで、これらの利用規約に同意したものとみなされます。',
      },
      {
        heading: '2. サービスの内容',
        body: '当社は、国際貿易、不動産、スポーツ事業に関する情報提供およびサービスを提供します。',
      },
      {
        heading: '3. 免責事項',
        body: '当社は、本ウェブサイトの情報の正確性、完全性、有用性について保証しません。',
      },
      {
        heading: '4. 知的財産権',
        body: '本ウェブサイトのコンテンツは、著作権法により保護されています。',
      },
      {
        heading: '5. 準拠法',
        body: '本規約は、スペイン法に準拠し、解釈されるものとします。',
      },
    ],
  },
  es: {
    title: 'Términos de Uso',
    lastUpdated: 'Última actualización',
    content: [
      {
        heading: '1. Aplicación de los términos',
        body: 'Al utilizar este sitio web, usted acepta estos términos de uso.',
      },
      {
        heading: '2. Contenido del servicio',
        body: 'Proporcionamos información y servicios relacionados con comercio internacional, bienes raíces y proyectos deportivos.',
      },
      {
        heading: '3. Descargo de responsabilidad',
        body: 'No garantizamos la precisión, integridad o utilidad de la información en este sitio web.',
      },
      {
        heading: '4. Propiedad intelectual',
        body: 'El contenido de este sitio web está protegido por leyes de derechos de autor.',
      },
      {
        heading: '5. Ley aplicable',
        body: 'Estos términos se rigen e interpretan de acuerdo con las leyes de España.',
      },
    ],
  },
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale]

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-sm text-gray-600">
            {t.lastUpdated}: {new Date().toLocaleDateString(params.locale)}
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
