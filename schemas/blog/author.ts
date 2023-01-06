import {s} from 'sanity-typed-schema-builder'

export const author = s.document({
  name: 'author',
  title: 'Author',
  fields: [
    {
      name: 'wilson',
      title: 'Wilson',
      type: s.string({max: 22, regex: /wilson/gi}),
      optional: true,
    },
    {
      name: 'slug',
      title: 'SLug',
      type: s.slug({
        options: {isUnique: () => true, maxLength: 100, source: 'title', slugify: () => 'heelo'},
      }),
    },
    {
      name: 'wilsonimage',
      title: 'WilsonImage',
      type: s.image({options: {hotspot: true, columns: 1220}}),
    },
    {
      name: 'wilsonbio',
      title: 'WilsonBio',
      type: s.block({
        options: {spellCheck: true},
        styles: [
          {title: 'H1', value: 'h1'},
          {title: 'H2', value: 'h2'},
        ],
        lists: [],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Bold', value: 'bold'},
          ],
          annotations: [
            {
              title: 'URL',
              name: 'link',
              // @ts-ignore
              type: s.object({
                fields: [{title: 'URL', type: s.url({placeholder: 'url'}), name: 'url'}],
              }),
            },
            {
              name: 'author',
              title: 'Author',
              // @ts-ignore
              type: s.reference({to: ['author' as any]}),
            },
          ],
        },
      }),
    },
  ],
  preview: {
    select: {
      title: 'wilson',
      media: 'image',
    },
  },
})
