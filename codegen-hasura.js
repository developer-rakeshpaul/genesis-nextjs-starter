const SCHEMA = process.env.SCHEMA || 'http://localhost:9091/v1/graphql'
module.exports = {
  schema: [
    {
      [SCHEMA]: {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ['gql/hasura/*.gql'],
  overwrite: true,
  generates: {
    'lib/hasura-graphql.tsx': {
      hooks: [
        {
          afterAllFileWrite: 'tslint --fix',
        },
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.hasura.schema.json': {
      plugins: ['introspection'],
    },
  },
}
