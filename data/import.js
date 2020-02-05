const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("../data/locations.json"));
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const number = location.Site.SiteNumber;
      const prefName = location.Site.SitePreferredName;

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
        number,
        prefName,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
