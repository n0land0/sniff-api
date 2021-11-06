const knex = require("knex");
const parse = require("pg-connection-string").parse;

// Parse the environment variable into an object containing User, Password, Host, Port etc at separate key-value pairs
const pgconfig = parse(process.env.DATABASE_URL);

// Add SSL setting to default environment variable on a new key-value pair (the value itself is an object)
pgconfig.ssl = { rejectUnauthorized: false };

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
    connection: pgconfig,
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
