import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import Link from 'next/link'

const translations = {
  ja: {
    title: 'プロジェクト',
    subtitle: '進行中および過去のプロジェクト',
    noProjects: 'プロジェクトはまだありません。',
  },
  es: {
    title: 'Proyectos',
    subtitle: 'Proyectos actuales y pasados',
    noProjects: 'No hay proyectos aún.',
  },
}

async function getProjects(locale: Locale) {
  return await client.fetch(
    `*[_type == "project"] | order(publishedAt desc) {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      slug,
      mainImage,
      category,
      publishedAt
    }`
  )
}

export default async function ProjectsPage({ params }: { params: { locale: Locale } }) {
  const t = translations[params.locale]
  const projects = await getProjects(params.locale)

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{t.noProjects}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project: any) => (
                <Link
                  key={project._id}
                  href={`/${params.locale}/projects/${project.slug.current}`}
                  className="glass rounded-2xl p-8 hover:shadow-xl transition"
                >
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  {project.description && (
                    <p className="text-gray-600 line-clamp-4">{project.description}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
