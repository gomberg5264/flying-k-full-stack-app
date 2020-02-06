// Update with your config settings.
const db = require("../server/knex");

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME || "truck_stops",
      user: process.env.DATABASE_USER || "codechrysalis",
      password: process.env.DATABASE_PASSWORD || "bekind",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations_table",
    },
    seeds: {
      directory: "../data",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
