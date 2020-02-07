<template>
  <b-row class="search-container">
    <b-col cols="12" class="mb-2">
      <h2>20 Locations Found</h2>
      <b-badge variant="success">Wendy's</b-badge>
      <b-badge variant="success">Arby's</b-badge>
      <b-button class="searchButton" @click="backToSearchView"
        >search again</b-button
      >
    </b-col>
    <resultItem
      v-for="selectedLocation in selectedLocations"
      :key="selectedLocation.id"
      :selectedLocation="selectedLocation"
    />
  </b-row>
</template>

<script>
import ResultItem from "./SearchResults-Item";

export default {
  name: "SearchResults",
  components: {
    resultItem: ResultItem,
  },
  props: ["backToSearchView"],
  data: () => ({}),
  computed: {
    selectedLocations() {
      return this.$store.state.selectedLocations;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-container {
  margin-top: 15px;
}

.badge-success:not(:first-child) {
  margin-left: 5px;
}
</style>
