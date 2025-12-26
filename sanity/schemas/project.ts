import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title_ja',
      title: 'Title (Japanese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_es',
      title: 'Title (Spanish)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_ja',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Football', value: 'football' },
          { title: 'Trade', value: 'trade' },
          { title: 'Real Estate', value: 'real-estate' },
        ],
      },
    }),
    defineField({
      name: 'description_ja',
      title: 'Description (Japanese)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'description_es',
      title: 'Description (Spanish)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'body_ja',
      title: 'Body (Japanese)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'body_es',
      title: 'Body (Spanish)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seo_title_ja',
      title: 'SEO Title (Japanese)',
      type: 'string',
    }),
    defineField({
      name: 'seo_title_es',
      title: 'SEO Title (Spanish)',
      type: 'string',
    }),
    defineField({
      name: 'seo_description_ja',
      title: 'SEO Description (Japanese)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'seo_description_es',
      title: 'SEO Description (Spanish)',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: 'title_ja',
      media: 'mainImage',
    },
  },
})
