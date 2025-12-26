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

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <html lang={params.locale}>
      <body>
        <Header locale={params.locale} />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer locale={params.locale} />
      </body>
    </html>
  )
}
