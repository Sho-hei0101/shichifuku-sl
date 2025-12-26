'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale } from '@/lib/i18n'

interface HeaderProps {
  locale: Locale
}

const translations = {
  ja: {
    company: '会社概要',
    business: '事業内容',
    trading: '貿易事業',
    realEstate: '不動産事業',
    football: 'サッカー事業',
    properties: '物件情報',
    projects: 'プロジェクト',
    blog: 'ブログ',
    contact: 'お問い合わせ',
  },
  es: {
    company: 'Empresa',
    business: 'Negocios',
    trading: 'Comercio',
    realEstate: 'Inmobiliaria',
    football: 'Fútbol',
    properties: 'Propiedades',
    projects: 'Proyectos',
    blog: 'Blog',
    contact: 'Contacto',
  },
}

export default function Header({ locale }: HeaderProps) {
  const pathname = usePathname()
  const t = translations[locale]

  const switchLocale = locale === 'ja' ? 'es' : 'ja'
  const newPath = pathname?.replace(`/${locale}`, `/${switchLocale}`) || `/${switchLocale}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="text-2xl font-bold tracking-tight">
            Shichifuku
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${locale}/business`}
              className="text-sm font-medium hover:text-gray-600 transition"
            >
              {t.business}
            </Link>
            <Link
              href={`/${locale}/properties`}
              className="text-sm font-medium hover:text-gray-600 transition"
            >
              {t.properties}
            </Link>
            <Link
              href={`/${locale}/projects`}
              className="text-sm font-medium hover:text-gray-600 transition"
            >
              {t.projects}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium hover:text-gray-600 transition"
            >
              {t.blog}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium hover:text-gray-600 transition"
            >
              {t.contact}
            </Link>

            {/* Language Switcher */}
            <Link
              href={newPath}
              className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-full hover:bg-gray-50 transition"
            >
              {switchLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
