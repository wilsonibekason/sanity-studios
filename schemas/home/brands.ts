import {s} from 'sanity-typed-schema-builder'

export const brands = s.document({
  name: 'brands',
  title: 'Brands',
  fields: [
    {
      name: 'logo',
      title: 'Brand logo',
      type: s.image({options: {hotspot: true}}),
    },
    {
      name: 'link',
      title: 'Brand Link',
      type: s.string(),
    },
  ],
  preview: {
    select: {
      media: 'logo',
    },
  },
})
