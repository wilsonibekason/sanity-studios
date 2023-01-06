import {s} from 'sanity-typed-schema-builder'

export const services = s.document({
  name: 'services',
  title: 'Services',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: s.string(),
    },
    {
      name: 'bio',
      title: 'Description',
      type: s.text(),
    },
    {
      name: 'image',
      title: 'Services Image',
      type: s.image({options: {hotspot: true}}),
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
  },
})
