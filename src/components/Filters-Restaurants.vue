<template>
  <b-col cols="md-6" class="restaurants-container">
    <b-form-group label="Restaurants">
      <b-form-checkbox-group
        id="checkbox-group-restaurants"
        v-model="selectedRestaurants"
        :options="optionsRestaurants"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: "FiltersRestaurants",
  props: {},
  data() {
    return {
      selectedRestaurants: [], // Must be an array reference!
      optionsRestaurants: [
        { text: "Arby's", value: "Arby's" },
        { text: "Wendy's", value: "Wendy's" },
        { text: "Subway", value: "Subway" },
        { text: "Godfather's Pizza", value: "Godfather's Pizza" },
        { text: "IHOP Express", value: "IHOP Express" },
        { text: "Taco Bell", value: "Taco Bell" },
        { text: "Carl's Jr.", value: "Denny's" },
        { text: "Del Taco", value: "Del Taco" },
        { text: "Chester's", value: "Chester's" },
        { text: "Hardee's", value: "Hardee's" },
        { text: "Carl's Jr.", value: "Carl's Jr." },
        { text: "McDonald's", value: "McDonald's" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.restaurants-container {
  margin-top: 15px;
  border: 1px solid lightgrey;
  padding: 5px;
  /* margin: 15px; */
}
</style>
