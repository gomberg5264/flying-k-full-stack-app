module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./data",
    },
  },

  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },

  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
  },
};
