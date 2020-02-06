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
        { text: "Arbys's", value: "arbys" },
        { text: "Wendy's", value: "wendys" },
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
