<template>
  <b-col cols="12">
    <b-row class="locations-container">
      <b-col cols="sm-3">Locations:</b-col>
      <b-col>
        <b-form-select
          v-model="selectedState"
          :options="states"
        ></b-form-select>
      </b-col>

      <b-col>
        <b-form-select v-model="selectedCity" :options="cities"></b-form-select>
      </b-col>

      <b-col>
        <b-form-select
          v-model="selectedHighway"
          :options="highways"
        ></b-form-select>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "FiltersLocations",
  props: {},
  data() {
    return {
      selectedState: null,
      selectedCity: null,
      selectedHighway: null,
      states: [
        // States (locations) array goes here
        { value: null, text: "State" },
        { value: "Alabama", text: "Alabama" },
        { value: "Alaska", text: "Alaska" },
      ],
      cities: [
        // Cities (locations) array goes here
        { value: null, text: "City" },
        { value: "Honolulu", text: "Honolulu" },
        { value: "Lansing", text: "Lansing" },
      ],
      highways: [
        // States (locations) array goes here
        { value: null, text: "Highway" },
        { value: "Route 1", text: "Route 1" },
        { value: "Route 2", text: "Route 2" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.locations-container {
  margin-top: 0px;
  border: 1px solid lightgrey;
  padding: 5px;
}
</style>
