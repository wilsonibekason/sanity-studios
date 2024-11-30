import {projects} from './projects/projects'

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
import {Categories} from './home/categories'

export const schemaTypes = [
  experience.schema(),
  services.schema(),
  reviews.schema(),
  personal.schema(),
  projects.schema(),
  brands.schema(),
  contacts.schema(),
  contactinfo.schema(),
  author.schema(),
  techStacks.schema(),
  social.schema(),
  video.schema(),
  comment.schema(),
  Categories.schema(),
  // blogblockContent.schema(),
  post.schema(),
]

export default createSchema({
  name: 'default',
  types: schemaTypes,
})
