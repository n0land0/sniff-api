// Update with your config settings.

const knex = require("knex");
const parse = require("pg-connection-string").parse;

// Parse the environment variable into an object containing User, Password, Host, Port etc at separate key-value pairs
const pgconfig = parse(process.env.DATABASE_URL);

// Add SSL setting to default environment variable on a new key-value pair (the value itself is an object)
pgconfig.ssl = { rejectUnauthorized: false };

// const db = knex({
//   client: "pg",
//   connection: pgconfig,
// });
// 
// module.exports = db;

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
    //   ssl: { rejectUnauthorized: false }
    // },
    connection: pgconfig,
    // connection: 'postgres://xlafidslvqdrzg:aa0fbed94304d1061495b77612c28c23de599ef58059c95b479c2ddc54f48538@ec2-54-145-188-92.compute-1.amazonaws.com:5432/d65h0seeuo96k7',
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
  }
}
