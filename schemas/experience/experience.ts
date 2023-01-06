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
