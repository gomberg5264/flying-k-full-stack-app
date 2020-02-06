exports.up = function(knex, Promise) {
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
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
