import {s} from 'sanity-typed-schema-builder'

export const social = s.document({
  name: 'social',
  title: 'Social',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: s.string(), // The name of the social platform (e.g., Twitter, Facebook)
    },
    {
      name: 'url',
      title: 'URL',
      type: s.url(), // The URL to the social media profile or page
    },
    {
      name: 'icon',
      title: 'Icon',
      type: s.image({options: {hotspot: true}}), // Optional icon or logo for the platform
    },
    {
      name: 'username',
      title: 'Username',
      type: s.string(), // The username associated with the social media account
    },
  ],
  preview: {
    select: {
      title: 'platform', // Use the platform name for the preview title
      subtitle: 'username', // Use the username for the preview subtitle
      media: 'icon', // Use the icon as the preview image
    },
  },
})
