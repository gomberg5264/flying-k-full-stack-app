const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex");

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
app.get("/api/locations/:stateName", async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const highway = req.params.highway;
    const locations = await db
      .select()
      .table("locations")
      .where("stateName", stateName);
    res.send(locations);
  } catch (err) {
    console.error("omae wa moushindeiru", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations/:stateName/:cityName", async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const cityName = req.params.cityName;
    const locations = await db
      .select()
      .table("locations")
      .where("stateName", stateName)
      .where("cityName", cityName);
    res.send(locations);
  } catch (err) {
    console.error("omae wa moushindeiru", err);
    res.sendStatus(500);
  }
});

app.get("/api/locations/:stateName/highway/:highway", async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const highway = req.params.highway;
    console.log(req.params);
    const locations = await db
      .select()
      .table("locations")
      .where("stateName", stateName)
      .where("highway", highway);
    res.send(locations);
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
module.exports = app;
// {"id":368,"latitude":32.84415,"longitude":-86.591965,"name":"Site 368","number":368,"prefName":"Clanton","cityName":"Clanton","stateName":"AL","highway":"I-65"}
