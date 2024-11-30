import {s} from 'sanity-typed-schema-builder'

export const blogblockContent = s.array({
  of: [
    s.block({
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
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
          },
        ],
      },
    }),

    s.image({options: {hotspot: true}}),
  ],
})

// import { s } from "@sanity-typed/schema-builder";

// const comment = s.objectNamed({
//   name: "comment",
//   fields: [
//     {
//       name: "author",
//       title: "Author",
//       type: s.string(),
//     },
//     {
//       name: "content",
//       title: "Content",
//       type: s.text(),
//     },
//     {
//       name: "parent",
//       title: "Parent Comment",
//       type: s.reference({
//         to: [{ type: "comment" }], // Self-referencing the `comment` type
//       }),
//     },
//     {
//       name: "post",
//       title: "Post",
//       type: s.reference({
//         to: [{ type: "post" }], // Assuming you have a `post` type
//       }),
//     },
//   ],
// });

// export const commentSchema = comment.schema();
