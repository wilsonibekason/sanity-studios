import {s} from 'sanity-typed-schema-builder'

export const techStacks = s.document({
  name: 'techstacks',
  title: 'Tech Stacks',
  fields: [
    {
      name: 'stacks',
      title: 'Programming Languages',
      type: s.array({
        of: [
          s.object({
            fields: [
              {name: 'stackname', title: 'Stack Name', type: s.string()},
              {name: 'stacklevel', title: 'Stack Level', type: s.string()},
            ],
          }),
        ],
      }),
    },
  ],
  preview: {
    select: {
      title: 'stacks',
    },
  },
})
