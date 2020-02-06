const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 8080;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest().then(function() {
      return db.seed.run("./data");
    });

    console.log("Starting express");
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
