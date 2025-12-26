import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title_ja',
      title: 'Site Title (Japanese)',
      type: 'string',
    }),
    defineField({
      name: 'title_es',
      title: 'Site Title (Spanish)',
      type: 'string',
    }),
    defineField({
      name: 'description_ja',
      title: 'Site Description (Japanese)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description_es',
      title: 'Site Description (Spanish)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address_ja',
      title: 'Address (Japanese)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'address_es',
      title: 'Address (Spanish)',
      type: 'text',
      rows: 2,
    }),
  ],
})
