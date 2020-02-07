<template>
  <b-col cols="md-6" class="type-container">
    <b-form-group label="Type">
      <b-form-checkbox-group
        id="checkbox-group-type"
        v-model="selectedType"
        :options="optionsType"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: "FiltersType",
  props: {},
  data() {
    return {
      selectedType: [], // Must be an array reference!
      optionsType: [
        { text: "Travel Stop", value: "travelStop" },
        { text: "Country Stop", value: "countryStop" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.type-container {
  margin-top: 15px;
  border: 1px solid lightgrey;
  padding: 5px;
  /* margin: 15px; */
}
</style>
