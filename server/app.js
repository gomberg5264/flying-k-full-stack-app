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
    res.json(locations);
    res.sendStatus(200);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//gets array of truckstops that exist in one specified state
app.get("/api/state/:stateName", async (req, res) => {
  try {
    const stateName = req.params.stateName;
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

//gets array of truckstops that exist in one specific city in state
app.get("/api/state/:stateName/city/:cityName", async (req, res) => {
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

//gets array of truckstops that exist on one specific highway in state
app.get("/api/state/:stateName/highway/:highway", async (req, res) => {
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

//gets truckstops with specified restaurant in specific city in state
app.get(
  "/api/state/:stateName/city/:cityName/restaurant/:restaurant",
  async (req, res) => {
    try {
      const stateName = req.params.stateName;
      const cityName = req.params.cityName;
      const restaurant = req.params.restaurant;
      console.log(req.params);
      const locations = await db
        .select()
        .table("locations")
        .where("stateName", stateName)
        .where("cityName", cityName)
        .where("restaurant", restaurant);
      res.send(locations);
    } catch (err) {
      console.error("omae wa moushindeiru", err);
      res.sendStatus(500);
    }
  }
);

//gets truckstops with specified restaurant on specific highway in state
app.get(
  "/api/state/:stateName/highway/:highway/restaurant/:restaurant",
  async (req, res) => {
    try {
      const stateName = req.params.stateName;
      const highway = req.params.highway;
      const restaurant = req.params.restaurant;
      console.log(req.params);
      const locations = await db
        .select()
        .table("locations")
        .where("stateName", stateName)
        .where("highway", highway)
        .where("restaurant", restaurant);
      res.send(locations);
    } catch (err) {
      console.error("omae wa moushindeiru", err);
      res.sendStatus(500);
    }
  }
);

//gets truckstops with specified type in specific city in state
app.get("/api/state/:stateName/city/:cityName/type/:type", async (req, res) => {
  try {
    const stateName = req.params.stateName;
    const cityName = req.params.cityName;
    const type = req.params.type;
    console.log(req.params);
    const locations = await db
      .select()
      .table("locations")
      .where("stateName", stateName)
      .where("cityName", cityName)
      .where("type", type);
    res.send(locations);
  } catch (err) {
    console.error("omae wa moushindeiru", err);
    res.sendStatus(500);
  }
});

//gets truckstops with specified type on specific highway in state
app.get(
  "/api/state/:stateName/highway/:highway/type/:type",
  async (req, res) => {
    try {
      const stateName = req.params.stateName;
      const highway = req.params.highway;
      const type = req.params.type;
      console.log(req.params);
      const locations = await db
        .select()
        .table("locations")
        .where("stateName", stateName)
        .where("highway", highway)
        .where("type", type);
      res.send(locations);
    } catch (err) {
      console.error("omae wa moushindeiru", err);
      res.sendStatus(500);
    }
  }
);

// // gets truckstops with specified amenities in specific city and in state (WIP)
// app.get(
//   "/api/state/:stateName/city/:cityName/amenities/:amenities",
//   async (req, res) => {
//     try {
//       const stateName = req.params.stateName;
//       const cityName = req.params.cityName;
//       const amenities = req.params.amenities;
//       console.log(amenities);
//       const locations = await db
//         .select()
//         .table("locations")
//         .where("stateName", stateName)
//         .where("cityName", cityName)
//         .whereIn("amenities", [
//           "ATM",
//           "WiFi",
//           "RV Dump",
//           "Parking Spaces",
//           "Private Showers",
//         ]);
//       res.send(locations);
//     } catch (err) {
//       console.error("omae wa moushindeiru", err);
//       res.sendStatus(500);
//     }
//   }
// );

// gets truckstops with specified amenities on specific highway and in state (WIP)
// app.get(
//   "/api/state/:stateName/highway/:highway/amenities/:amenities",
//   async (req, res) => {
//     try {
//       const stateName = req.params.stateName;
//       const highway = req.params.highway;
//       const amenities = req.params.amenities;
//       console.log(req.params);
//       const locations = await db
//         .select()
//         .table("locations")
//         .where("stateName", stateName)
//         .where("highway", highway)
//         .where("amenities", amenities);
//       res.send(locations);
//     } catch (err) {
//       console.error("omae wa moushindeiru", err);
//       res.sendStatus(500);
//     }
//   }
// );

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});
module.exports = app;
