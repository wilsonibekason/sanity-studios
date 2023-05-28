import {s} from 'sanity-typed-schema-builder'

export const experience = s.document({
  name: 'experience',
  title: 'Experience',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: s.string(),
    },
    {
      name: 'location',
      title: 'Location',
      type: s.string(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: s.string(),
    },
    {
      name: 'description',
      description: 'Description',
      title: 'Description',
      type: s.string(),
    },
    {
      name: 'company',
      title: 'Company',
      type: s.string(),
    },
    {
      name: 'skillls',
      title: 'Skills',
      type: s.array({
        of: [s.string({max: 200})],
        options: {layout: 'tags'},
      }),
    },
  ],
  preview: {
    select: {
      description: 'description',
      imageUrl: '',
      media: 'image',
      title: 'role',
    },
  },
})
