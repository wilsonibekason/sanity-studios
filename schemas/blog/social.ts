import {s} from 'sanity-typed-schema-builder'

export const social = s.document({
  name: 'social',
  title: 'Social',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(),
    },
  ],
})
