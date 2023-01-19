import {s} from 'sanity-typed-schema-builder'

export const author = s.document({
  name: 'author',
  title: 'Author',
  fields: [
    {
      name: 'wilson',
      title: 'Wilson',
      type: s.string({max: 22}),
      optional: true,
    },
    {
      name: 'slug',
      title: 'SLug',
      type: s.slug({
        options: {isUnique: () => true, maxLength: 100, source: 'wilson', slugify: () => 'heelo'},
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
      type: s.array({
        of: [
          s.block({
            options: {spellCheck: true},
            styles: [
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'H4', value: 'h4'},
              {title: 'Quote', value: 'blockquote'},
              {title: 'Paragraphy', value: 'p'},
            ],
            lists: [
              {title: 'Bullet', value: 'bullet'},
              {title: 'Number', value: 'number'},
              {title: 'Checkmarks', value: 'checkmarks'},
              {title: 'Ordered', value: 'li'},
            ],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Bold', value: 'bold'},
                {title: 'Underline', value: 'underline'},
                {title: 'Strike', value: 'strike-through'},
              ],
            },
          }),
          s.image({options: {hotspot: true}, fields: [{name: 'caption', type: s.string()}]}),
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'wilson',
      media: 'wilsonimage',
    },
  },
})
