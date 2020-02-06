const knex = require("knex");

const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops` || {
      host: process.env.DATABASE_HOST || "127.0.0.1",
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME || "truck_stops",
      user: process.env.DATABASE_USER || "codechrysalis",
      password: process.env.DATABASE_PASSWORD || "bekind",
    },
  searchPath: "public",
});

module.exports = db;
