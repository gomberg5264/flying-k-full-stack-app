exports.up = function(knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments().index();

    table.float("latitude");

    table.float("longitude");

    table.text("name").notNullable();

    table.float("number").notNullable();

    table.text("prefName");

    table.text("cityName");

    table.text("stateName");

    table.text("highway");

    table.text("restaurant");

    table.text("type");

    table.specificType("amenities", "text ARRAY");

    table.specificType("truckServices", "text ARRAY");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("locations");
};
