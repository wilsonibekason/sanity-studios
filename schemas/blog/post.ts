import {
  s,
  ParsedSanityDocument,
  SanityBlock,
  SanityDocument,
  SanityFile,
} from 'sanity-typed-schema-builder'
// import {} from "@sanity/base/initial-value-templatef"
const someDocumentType = 'author'
export const post = s.document({
  title: 'post',
  name: 'post',
  //   @ts-ignore
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Blog post title',
      type: s.string(),
    },
    {
      name: 'slug',
      title: 'Slug',
      description: '',
      type: s.slug({
        options: {isUnique: () => true, maxLength: 100, source: 'title'},
      }),
    },
    {
      name: 'author',
      title: 'Author',
      // type: s.reference({to: [someDocumentType as any]}),\
      type: s.string(),
    },
   
    {
      name: 'mainImage',
      title: 'MainImage',
      type: s.image({
        hotspot: true,
        options: {hotspot: true, collapsed: true, metadata: ['blurhash', 'exif', 'location']},
      }),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: s.date({placeholder: 'Published Date'}),
    },
    {
      name: 'categories',
      title: 'Categories',
      // type: s.array({of: [s.reference({to: ['category' as any]})]}),
      type: s.array({of: [s.string()]}),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: s.array({
        length: 3,
        of: [s.string({max: 200})],
        options: {layout: 'tags'},
      }),
    },
    {
      name: 'body',
      title: 'Body',
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
              ],
            },
          }),
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    // @ts-ignore
    // prepare (selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {subtitle: author && `by ${author}`})
    // },
  },
})
