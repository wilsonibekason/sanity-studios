import {s} from 'sanity-typed-schema-builder'
import {} from '@sanity/vision'
import {social} from './social'

// const blockContent = s.array('blockcontent')

export const comment = s.document({
  name: 'comment',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(),
    },
    {
      name: 'email',
      title: 'Email',
      type: s.string({max: 1000}),
    },
    {
      name: 'message',
      title: 'Message',
      type: s.text(),
    },
    {
      name: 'socials',
      title: 'Socials',
      type: s.array({of: [social]}),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
const type = s.block()
type Value = s.infer<typeof type>
