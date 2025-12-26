import type { Metadata } from 'next'
import { locales, Locale } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Shichifuku S.L. - International Trade, Real Estate & Sports',
  description: 'Premium B2B services in international trade, real estate, and football projects.',
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  return (
    <html lang={locale}>
      <body>
        <Header locale={locale} />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  )
}
