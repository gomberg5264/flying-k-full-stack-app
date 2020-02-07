exports.up = function(knex, Promise) {
  return knex.schema.alterTable("locations", (table) => {
    table.text("type");

    table.specificType("amenities", "text ARRAY");

    table.specificType("truckServices", "text ARRAY");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
