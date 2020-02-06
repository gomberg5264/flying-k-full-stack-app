<template>
  <!-- <b-col cols="12">
    <span class="exit">Exit 43</span>
    <span class="city">North Ft. Myers,</span>
    <span class="state">FL</span>
    <span class="highway">I-75</span>
    <span class="storeNumber">Store #495</span>
    <span class="address">123 Fake St. Beverly Hills, CA 90210</span>
    <hr />
  </b-col> -->
  <b-col sm class="result-item">
    <b-row class="wrapper">
      <h2 class="">
        Exit 43 | I-75
      </h2>
      <hr />
    </b-row>
    <b-row class="wrapper">
      <p>Store #495 | 123 Fake St. Beverly Hills, CA 90210</p>
      <hr />
      <b-col class="row-border"
        >TEL: 123-456-7890 <br />
        FAX: 123-456-7890</b-col
      >
      <b-col class="row-border"
        >$1.99 unleaded <br />
        $3.15 midgrade</b-col
      >
      <b-col class="row-border">$2.64 Diesel 815 <br />$3.95 propane</b-col>
    </b-row>
    <b-row class="wrapper">
      <b-col class="row-border">AMENITIES:</b-col>
      <b-col class="row-border">RESTAURANTS:</b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "ResultItem",
  components: {},
  props: {},
  data() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.result-item {
  /* margin-top: 15px; */
  border: 1px solid lightgray;
  margin: 10px;
  padding: 10px;
}

.wrapper {
  padding: 10px;
}

.row-border {
  border-right: 1px solid lightgray;
}
</style>
