const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("knex");

const setServer = () => {
  const app = express();

  // Setup Logger
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
  );

  // Serve static assets
  app.use(express.static(path.resolve(__dirname, "..", "dist")));

  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await db.select().table("locations");
      console.log(locations);
      res.json(locations);
      res.sendStatus(200);
    } catch (err) {
      console.error("Error loading locations!", err);
      res.sendStatus(500);
    }
  });

  //gets array of truckstops that exist in one specified state
  app.get("/api/truckstops/:state", async (req, res) => {
    const { state } = req.params.state;
    try {
      // const locations = await db.select().table("locations");
      const truckstops = await db.select().table("truckstops");
      const result = truckstops.find((truckstop) => truckstop.state === state);
      res.json(result);
    } catch (err) {
      console.error("omae wa moushindeiru", err);
      res.sendStatus(500);
    }
  });

  //gets array of facilities at single truck stop
  // app.get("/api/", async (req,res) => {

  // });

  // Always return the main index.html, since we are developing a single page application
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
  });
  return app;
};
module.exports = { setServer };
