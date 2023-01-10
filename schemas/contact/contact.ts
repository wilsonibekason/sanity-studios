import {s} from 'sanity-typed-schema-builder'

export const contacts = s.document({
  name: 'contacts',
  title: 'Contacts',
  fields: [
    {
      name: 'fullName',
      title: 'Full NAME',
      type: s.string({max: 100, min: 20}),
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: s.string(),
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: s.string(),
    },
    {
      name: 'message',
      title: 'Message',
      type: s.text(),
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'phoneNumber',
      description: 'description',
    },
  },
})
