import {s} from 'sanity-typed-schema-builder'

export const reviews = s.document({
  name: 'reviews',
  title: 'Reviews',
  fields: [
    {
      name: 'reviewmessage',
      title: 'ReviewMessage',
      type: s.string(),
    },
    {
      name: 'client',
      title: 'Client',
      type: s.object({
        fields: [
          {title: 'clientname', name: 'clientname', type: s.string()},
          {name: 'clientdesc', title: 'Clients Description ', type: s.text()},
          {title: 'Client Image', name: 'clientimage', type: s.image({options: {hotspot: true}})},
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'reviews',
      media: 'clientimage',
    },
  },
})
