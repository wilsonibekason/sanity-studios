import {s} from 'sanity-typed-schema-builder'

export const social = s.object({
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(),
    },
  ],
})
