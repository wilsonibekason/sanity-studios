import {s} from 'sanity-typed-schema-builder'

export const Categories = s.document({
  name: 'categories',
  title: 'Categories',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: s.string(),
    },
  ],
})
