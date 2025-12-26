import { Locale } from '@/lib/i18n'
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

const translations = {
  ja: {
    backToProjects: 'プロジェクト一覧に戻る',
    externalLink: '外部リンク',
  },
  es: {
    backToProjects: 'Volver a proyectos',
    externalLink: 'Enlace externo',
  },
}

async function getProject(slug: string, locale: Locale) {
  return await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      "title": title_${locale},
      "description": description_${locale},
      "body": body_${locale},
      slug,
      mainImage,
      gallery,
      category,
      externalLink,
      publishedAt
    }`,
    { slug }
  )
}

type Props = {
  params: Promise<{ locale: Locale; slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const t = translations[locale]
  const project = await getProject(slug, locale)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href={`/${locale}/projects`}
            className="inline-flex items-center text-gray-600 hover:text-black mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToProjects}
          </a>

          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

          {project.description && (
            <p className="text-xl text-gray-600 mb-12">{project.description}</p>
          )}

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-12"
            >
              {t.externalLink}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}

          {project.body && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={project.body} />
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
