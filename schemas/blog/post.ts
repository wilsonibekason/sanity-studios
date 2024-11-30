import {s} from 'sanity-typed-schema-builder'
import {comment} from './comments'
import {author} from './author'
import {projects} from '../projects/projects'
import {experience} from '../experience/experience'

export const post = s.document({
  title: 'post',
  name: 'post',
  // @ts-ignore
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
      type: s.reference({to: [author]}),
    },
    // {
    //   name: 'commentss',
    //   title: 'Comments',
    //   type: s.reference({to: [comment]}),
    //   optional: true,
    // },
    // {
    //   name: 'comments',
    //   title: 'Comments',
    //   type: s.array({
    //     of: [s.reference({to: [author]})],
    //   }),
    //   optional: true,
    //   description: 'Displaying threads of comments for each post',
    // },
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
              {title: 'Code Block', value: 'code'}, // Add this line
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
                {title: 'Code', value: 'code'},
              ],
              annotations: [
                // {`
                //   name: "link",
                //   title: "URL",
                //   type: s.object({
                //     fields: [{
                //       name: "href",
                //       title: "URL",
                //       type: s.url()
                //     }]
                //   })
                // },c
                // {
                //   name:"dd",
                //   type: s.string()
                // }
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
