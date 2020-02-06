<template>
  <b-row class="search-container">
    <b-col cols="12" class="mb-2">
      <h2>20 Locations Found</h2>
      <b-badge variant="success">Wendy's</b-badge>
      <b-badge variant="success">Arby's</b-badge>
      <span class="text-right">search again</span>
    </b-col>
    <ResultItem />
    <ResultItem />
    <ResultItem />
    <ResultItem />
  </b-row>
</template>

<script>
import ResultItem from "./SearchResults-Item";
export default {
  name: "SearchResults",
  components: {
    ResultItem,
  },
  props: {},
  data() {},
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
