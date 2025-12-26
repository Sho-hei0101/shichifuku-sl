import Link from 'next/link'
import { Locale } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

const translations = {
  ja: {
    company: '会社概要',
    business: '事業内容',
    properties: '物件情報',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    copyright: '© 2025 Shichifuku S.L. All rights reserved.',
  },
  es: {
    company: 'Empresa',
    business: 'Negocios',
    properties: 'Propiedades',
    blog: 'Blog',
    contact: 'Contacto',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    copyright: '© 2025 Shichifuku S.L. Todos los derechos reservados.',
  },
}

export default function Footer({ locale }: FooterProps) {
  const t = translations[locale]

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shichifuku S.L.</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ja'
                ? 'スペインを拠点に、国際貿易、不動産、スポーツ事業を展開しています。'
                : 'Con sede en España, operamos en comercio internacional, bienes raíces y proyectos deportivos.'}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              {locale === 'ja' ? 'サービス' : 'Servicios'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/business/trading`} className="text-gray-600 hover:text-gray-900">
                  {locale === 'ja' ? '貿易事業' : 'Comercio'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/business/real-estate`} className="text-gray-600 hover:text-gray-900">
                  {locale === 'ja' ? '不動産事業' : 'Inmobiliaria'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/business/football`} className="text-gray-600 hover:text-gray-900">
                  {locale === 'ja' ? 'サッカー事業' : 'Fútbol'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              {locale === 'ja' ? '情報' : 'Información'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/properties`} className="text-gray-600 hover:text-gray-900">
                  {t.properties}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-600 hover:text-gray-900">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-gray-900">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">
              {locale === 'ja' ? '法的情報' : 'Legal'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/legal/privacy`} className="text-gray-600 hover:text-gray-900">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/terms`} className="text-gray-600 hover:text-gray-900">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          {t.copyright}
        </div>
      </div>
    </footer>
  )
}
