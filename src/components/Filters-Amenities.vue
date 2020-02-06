<template>
  <b-col cols="md-6" class="amenities-container">
    <b-form-group label="Amenities">
      <b-form-checkbox-group
        id="checkbox-group-amenities"
        v-model="selectedAmenities"
        :options="optionsAmenities"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: "FiltersAmenities",
  props: {},
  data() {
    return {
      selectedAmenities: [], // Must be an array reference!
      optionsAmenities: [
        { text: "ATM", value: "atm" },
        { text: "WiFi", value: "wifi" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.amenities-container {
  margin-top: 15px;
  border: 1px solid lightgrey;
  padding: 5px;
  /* margin: 15px; */
}
</style>
