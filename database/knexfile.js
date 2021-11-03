// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/sniffdb',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    // connection: {
    //   database: 'd65h0seeuo96k7',
    //   user:     'xlafidslvqdrzg',
    //   password: 'aa0fbed94304d1061495b77612c28c23de599ef58059c95b479c2ddc54f48538',
    // },
    connection: 'postgres://xlafidslvqdrzg:aa0fbed94304d1061495b77612c28c23de599ef58059c95b479c2ddc54f48538@ec2-54-145-188-92.compute-1.amazonaws.com:5432/d65h0seeuo96k7',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  }
}
