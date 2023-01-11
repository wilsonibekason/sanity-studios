import {s} from 'sanity-typed-schema-builder'

export const video = s.document({
  name: 'video',
  title: 'Video',
  fields: [
    {
      name: 'videosource',
      title: 'Video Source',
      type: s.image({options: {hotspot: true}}),
    },
    {
      name: 'imageSource',
      title: 'Image Sources',
      type: s.string(),
    },
  ],
  preview: {
    select: {
      media: 'videosource',
    },
  },
})
