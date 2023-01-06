import {s} from 'sanity-typed-schema-builder'

export const projects = s.document({
  name: 'projects',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: s.string(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: s.slug({options: {maxLength: 40, source: 'title'}}),
      optional: true,
    },

    {
      name: 'description',
      title: 'Description',
      type: s.string(),
    },
    {
      name: 'projectimage',
      title: 'ProjectImage',
      type: s.image({options: {hotspot: true}}),
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      imageUrl: '',
      media: 'projectimage',
    },
  },
})
