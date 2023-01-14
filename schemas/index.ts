import {projects} from './projects/projects'
// import createSchema from 'part:@sanity/base/schema-creator'

// // Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: 'default',
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     // The following are document types which will appear
//     // in the studio.

//     // When added to this list, object types can be used as
//     // { type: 'typename' } in other document schemas
//   ]),
// })

import {createSchema} from 'sanity'

import {s} from 'sanity-typed-schema-builder'
import {post} from './blog/post'
import {experience} from './experience/experience'
import {reviews} from './reviews/reviews'
import {services} from './home/services'
import {author} from './blog/author'
import {personal} from './home/personal'

import blockcontent from './blog/blockcontent'
import {blogblockContent} from './blog/blogblockcontent'
import {brands} from './home/brands'
import {contacts} from './contact/contact'
import {contactinfo} from './contact/contactinfo'
import {techStacks} from './projects/techstacks'
import {video} from './home/video'
import {comment} from './blog/comments'
import {social} from './blog/social'

const foo = s.document({
  name: 'foo',
  fields: [
    {
      name: 'foo',
      type: s.string(),
    },
  ],
})

export const schemaTypes = [
  experience.schema(),
  services.schema(),
  reviews.schema(),
  personal.schema(),
  projects.schema(),
  brands.schema(),
  contacts.schema(),
  contactinfo.schema(),
  // author.schema(),
  techStacks.schema(),
  video.schema(),
  // blogblockContent.schema(),
  post.schema(),
  comment.schema(),
  social.schema(),
]

export default createSchema({
  name: 'default',
  types: schemaTypes,
})
