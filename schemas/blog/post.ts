import {
  s,
  ParsedSanityDocument,
  SanityBlock,
  SanityDocument,
  SanityFile,
} from 'sanity-typed-schema-builder'
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
        options: {isUnique: () => true, maxLength: 100, source: 'title', slugify: () => 'heelo'},
      }),
    },
    {
      name: 'author',
      title: 'Author',
      type: s.reference({to: [someDocumentType as any]}),
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
      name: 'categories',
      title: 'Categories',
      type: s.array({of: [s.reference({to: ['category' as any]})]}),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: s.array({
        length: 100,
        of: [s.string({max: 200, regex: /sjsss/gi})],
        options: {layout: 'tags'},
      }),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    // @ts-ignore
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {subtitle: author && `by ${author}`})
    },
  },
})
