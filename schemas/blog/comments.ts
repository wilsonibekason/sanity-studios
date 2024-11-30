import {s} from 'sanity-typed-schema-builder'
import {social} from './social' // Ensure this is a valid document schema
import {post} from './post' // Ensure this is a valid document schema

export const comment = s.document({
  name: 'comment',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(), // Simple string field for the commenter's name
    },
    {
      name: 'email',
      title: 'Email',
      type: s.string(), // Simple string field for the email
    },
    {
      name: 'message',
      title: 'Message',
      type: s.text(), // Text field for the message content
    },
    // {
    //   name: 'parent',
    //   title: 'Parent Comment',
    //   type: s.reference({
    //     to: [{ type: 'comment' }], // Reference to another comment
    //   }),
    // },
    {
      name: 'post',
      title: 'Post',
      type: s.reference({
        to: [post],
      }),
    },
    {
      name: 'socials',
      title: 'Socials',
      optional: true,
      type: s.array({
        of: [social],
      }),
    },
  ],
  preview: {
    select: {
      title: 'name', // Use the name field as the preview title
      subtitle: 'message', // Use the message field as a subtitle
      media: 'socials[0].icon', // Example media; customize based on actual field
    },
  },
})
