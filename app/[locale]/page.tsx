import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import Card from '@/components/Card'
import Button from '@/components/Button'

const translations = {
  ja: {
    hero: {
      title: '信頼と実績で、\n世界をつなぐ',
      subtitle: '国際貿易・不動産・スポーツ事業のプロフェッショナル',
      cta: 'お問い合わせ',
    },
    business: {
      title: '事業内容',
      trading: {
        title: '貿易事業',
        desc: '日本とスペイン・EU間の輸出入をサポート。和牛、日本酒、冷凍食品などの日本製品のヨーロッパ展開や、スペインワイン、ハム、チーズなどの日本導入を支援します。',
      },
      realEstate: {
        title: '不動産事業',
        desc: 'マルベーリャエリアを中心に、高級不動産の売買・紹介を行います。ランボルギーニブランドヴィラの販売権を保有。日本語サポートで安心の取引を実現します。',
      },
      football: {
        title: 'サッカー事業',
        desc: '青少年育成と文化交流を目的としたサッカーキャンプの企画・運営。アドルフォ・アルダナ選手によるサッカーキャンプなど、質の高いプログラムを提供します。',
      },
    },
    why: {
      title: 'Shichifukuの強み',
      experience: {
        title: '確かな実績',
        desc: '国際ビジネスにおける豊富な経験と、日本・スペイン両国でのネットワークを活かし、確実な成果をお届けします。',
      },
      network: {
        title: 'グローバルネットワーク',
        desc: '日本からスペイン・EUまで、幅広い地域でのビジネス展開をサポート。小規模生産者との直接取引も可能です。',
      },
      support: {
        title: '日本語サポート',
        desc: '日本語での丁寧なサポートで、言語の壁を感じることなく、安心してビジネスを進められます。',
      },
    },
    properties: {
      title: '注目の物件',
      viewAll: 'すべての物件を見る',
    },
    projects: {
      title: '注目のプロジェクト',
      viewAll: 'すべてのプロジェクトを見る',
    },
    blog: {
      title: '最新記事',
      viewAll: 'ブログを見る',
    },
    cta: {
      title: 'ビジネスのご相談は\nお気軽にどうぞ',
      button: 'お問い合わせ',
    },
  },
  es: {
    hero: {
      title: 'Conectando el mundo\ncon confianza y experiencia',
      subtitle: 'Profesionales en comercio internacional, bienes raíces y proyectos deportivos',
      cta: 'Contacto',
    },
    business: {
      title: 'Nuestros Negocios',
      trading: {
        title: 'Comercio Internacional',
        desc: 'Apoyamos exportaciones e importaciones entre Japón y España/UE. Productos japoneses como wagyu, sake, alimentos congelados a Europa, y productos españoles como vino, jamón y queso a Japón.',
      },
      realEstate: {
        title: 'Bienes Raíces',
        desc: 'Venta e introducción de propiedades de lujo en el área de Marbella. Tenemos derechos de venta exclusivos de villas de marca Lamborghini. Soporte en japonés disponible.',
      },
      football: {
        title: 'Fútbol',
        desc: 'Organización de campamentos de fútbol para el desarrollo juvenil y el intercambio cultural. Ofrecemos programas de alta calidad como el campamento de Adolfo Aldana.',
      },
    },
    why: {
      title: 'Por qué Shichifuku',
      experience: {
        title: 'Experiencia Comprobada',
        desc: 'Con amplia experiencia en negocios internacionales y redes en Japón y España, entregamos resultados confiables.',
      },
      network: {
        title: 'Red Global',
        desc: 'Apoyamos expansión de negocios desde Japón hasta España y la UE. Acceso directo a pequeños productores.',
      },
      support: {
        title: 'Soporte Especializado',
        desc: 'Soporte profesional que elimina las barreras lingüísticas y culturales, facilitando el crecimiento de su negocio.',
      },
    },
    properties: {
      title: 'Propiedades Destacadas',
      viewAll: 'Ver todas las propiedades',
    },
    projects: {
      title: 'Proyectos Destacados',
      viewAll: 'Ver todos los proyectos',
    },
    blog: {
      title: 'Últimas Publicaciones',
      viewAll: 'Ver blog',
    },
    cta: {
      title: 'Consulte sus necesidades\nde negocio con nosotros',
      button: 'Contactar',
    },
  },
}

async function getHomeData(locale: Locale) {
  const properties = await client.fetch(
    `*[_type == "property" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      slug,
      mainImage,
      price,
      currency,
      location
    }`
  )

  const projects = await client.fetch(
    `*[_type == "project" && featured == true] | order(publishedAt desc)[0...1] {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      slug,
      mainImage
    }`
  )

  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      "title": title_${locale},
      "excerpt": excerpt_${locale},
      slug,
      mainImage,
      category,
      publishedAt
    }`
  )

  return { properties, projects, posts }
}

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const t = translations[locale]
  const { properties, projects, posts } = await getHomeData(locale)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 whitespace-pre-line tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">{t.hero.subtitle}</p>
          <Button href={`/${locale}/contact`}>{t.hero.cta}</Button>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.business.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title={t.business.trading.title}
              description={t.business.trading.desc}
              href={`/${locale}/business/trading`}
            />
            <Card
              title={t.business.realEstate.title}
              description={t.business.realEstate.desc}
              href={`/${locale}/business/real-estate`}
            />
            <Card
              title={t.business.football.title}
              description={t.business.football.desc}
              href={`/${locale}/business/football`}
            />
          </div>
        </div>
      </section>

      {/* Why Shichifuku */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.why.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card title={t.why.experience.title} description={t.why.experience.desc} />
            <Card title={t.why.network.title} description={t.why.network.desc} />
            <Card title={t.why.support.title} description={t.why.support.desc} />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      {properties.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">{t.properties.title}</h2>
              <Button href={`/${locale}/properties`} variant="secondary">
                {t.properties.viewAll}
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {properties.map((property: any) => (
                <Card
                  key={property._id}
                  title={property.title}
                  description={`${property.location} • ${property.price?.toLocaleString()} ${property.currency}`}
                  href={`/${locale}/properties/${property.slug.current}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Project */}
      {projects.length > 0 && (
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">{t.projects.title}</h2>
              <Button href={`/${locale}/projects`} variant="secondary">
                {t.projects.viewAll}
              </Button>
            </div>
            {projects.map((project: any) => (
              <Card
                key={project._id}
                title={project.title}
                description={project.description}
                href={`/${locale}/projects/${project.slug.current}`}
                className="max-w-4xl"
              />
            ))}
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {posts.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">{t.blog.title}</h2>
              <Button href={`/${locale}/blog`} variant="secondary">
                {t.blog.viewAll}
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Card
                  key={post._id}
                  title={post.title}
                  description={post.excerpt || ''}
                  href={`/${locale}/blog/${post.slug.current}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 whitespace-pre-line">
            {t.cta.title}
          </h2>
          <Button href={`/${locale}/contact`} variant="secondary">
            {t.cta.button}
          </Button>
        </div>
      </section>
    </>
  )
}
