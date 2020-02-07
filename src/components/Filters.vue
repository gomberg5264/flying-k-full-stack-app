<template>
  <b-row class="filters-container">
    <FiltersLocations />
    <FiltersTruckServices />
    <FiltersType />
    <FiltersAmenities />
    <FiltersRestaurants />
    <b-col cols="12">
      <b-button block variant="success" class="search-button">Search</b-button>
    </b-col>
  </b-row>
</template>

<script>
import FiltersLocations from "./Filters-Locations";
import FiltersTruckServices from "./Filters-TruckServices";
import FiltersType from "./Filters-Type";
import FiltersAmenities from "./Filters-Amenities";
import FiltersRestaurants from "./Filters-Restaurants";

export default {
  name: "Filters",
  components: {
    FiltersLocations,
    FiltersTruckServices,
    FiltersType,
    FiltersAmenities,
    FiltersRestaurants,
  },
  props: {},
  data() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.filters-container {
  margin-top: 15px;
}

.search-button {
  margin-top: 15px;
}
</style>
