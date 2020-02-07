const fs = require("fs");
const db = require("../server/knex.js");

exports.seed = async function() {
  try {
    //create locations data and put them into table
    const locations = JSON.parse(fs.readFileSync("./data/locations.json"));
    const allAmenities = [
      "ATM",
      "WiFi",
      "RV Dump",
      "Parking Spaces",
      "Private Showers",
    ];
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const number = location.Site.SiteNumber;
      const prefName = location.Site.SitePreferredName;
      const cityName = location.Addresses[0].City;
      const stateName = location.Addresses[0].State;
      const highway = location.Site.Highway;
      const restaurant = location.Site.Concepts[0].Concept.Name;
      const type = location.FacilitySubtype.Name;
      const amenities = location.CustomFields.map((object) => {
        if (allAmenities.includes(object.CustomField.DisplayName)) {
          return object.CustomField.DisplayName;
        }
      }).filter((element) => element);
      const truckServices = location.CustomFields.map((object) => {
        if (!allAmenities.includes(object.CustomField.DisplayName)) {
          return object.CustomField.DisplayName;
        }
      }).filter((element) => element);

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
        number,
        prefName,
        cityName,
        stateName,
        highway,
        restaurant,
        type,
        amenities,
        truckServices,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};
