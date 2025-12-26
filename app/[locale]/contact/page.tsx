import { Locale } from '@/lib/i18n'

const translations = {
  ja: {
    title: 'お問い合わせ',
    subtitle: 'ビジネスに関するご質問やご相談はお気軽にどうぞ',
    form: {
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      submit: '送信',
    },
    info: {
      title: '連絡先情報',
      email: 'メール',
      phone: '電話',
      address: '住所',
    },
    note: 'フォーム送信機能は、実装時にバックエンドAPIと連携してください。',
  },
  es: {
    title: 'Contacto',
    subtitle: 'Consulte sus necesidades de negocio con nosotros',
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      submit: 'Enviar',
    },
    info: {
      title: 'Información de contacto',
      email: 'Correo',
      phone: 'Teléfono',
      address: 'Dirección',
    },
    note: 'La funcionalidad de envío del formulario debe integrarse con una API backend en la implementación.',
  },
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t.info.title}</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.info.email}</p>
                <p className="text-lg font-medium">info@shichifuku.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.info.phone}</p>
                <p className="text-lg font-medium">+34 XXX XXX XXX</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t.info.address}</p>
                <p className="text-lg font-medium">Marbella, Spain</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.form.name}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.form.email}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.form.subject}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.form.message}</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition"
              >
                {t.form.submit}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">{t.note}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
