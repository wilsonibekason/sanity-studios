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
import blockcontent from './blog/blockcontent'
import {blogblockContent} from './blog/blogblockcontent'

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
  foo.schema(),
  // // post.schema(),
  // projects.schema(),
  // experience.schema(),ss
  // // reviews.schema(),
  // services.schema(),
  // // author.schema(),
  // // blogblockContent.schema(),
]

export default createSchema({
  name: 'default',
  types: schemaTypes,
})
