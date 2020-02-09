const knex = require("knex");
const config = require("../knexfile");
const db = knex({
  client: "pg",
  connection: config.production.connection,
  searchPath: "public",
});

module.exports = db;
