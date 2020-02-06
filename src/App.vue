<template>
  <div id="app">
    <Navbar />
    <b-container>
      <template v-if="currentView">
        <Map />
        <Filters />
      </template>
      <template v-else>
        <Map />
        <SearchResults />
      </template>
    </b-container>
  </div>
</template>

<script>
import Map from "./components/Map";
import Navbar from "./components/Navbar.vue";
import Filters from "./components/Filters";
import SearchResults from "./components/SearchResults";

export default {
  name: "app",
  components: {
    Map,
    Navbar,
    Filters,
    SearchResults,
  },
  data: () => ({
    title: "Flying K Finder",
    currentView: true,
  }),
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
