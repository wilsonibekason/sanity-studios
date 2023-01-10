import {s} from 'sanity-typed-schema-builder'

export const contactinfo = s.document({
  name: 'contactInfo',
  title: 'Contact Info',
  fields: [
    {
      name: 'infos',
      title: 'Contact Informations',
      type: s.object({
        fields: [
          {name: 'phoneNumber', title: 'Phone Number', type: s.string()},
          {name: 'address', title: 'Address', type: s.string()},
          {name: 'emailAddress', title: 'Email Address', type: s.string()},
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'infos',
    },
  },
})
