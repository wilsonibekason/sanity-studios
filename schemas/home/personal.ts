import {s} from 'sanity-typed-schema-builder'

export const personal = s.document({
  name: 'personal',
  title: 'Personal',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: s.image({options: {hotspot: true}}),
    },
    {
      name: 'title',
      title: 'Title',
      type: s.text({min: 20}),
    },
    {
      name: 'desc',
      title: 'Description',
      type: s.text({
        max: 100,
        min: 20,
      }),
    },
    {
      name: 'sociallinks',
      title: 'Social Links',
      type: s.object({
        fields: [
          {name: 'facebook', title: 'FaceBook', type: s.string()},
          {name: 'linkedin', title: 'LinkedIn', type: s.string()},
          {name: 'github', title: 'Github', type: s.string()},
          {name: 'twitter', title: 'Twitter', type: s.string()},
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
