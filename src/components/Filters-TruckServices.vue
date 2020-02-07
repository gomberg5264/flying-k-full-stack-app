<template>
  <!-- <b-col cols="sm-3">Truck Services</b-col> -->
  <b-col cols="md-6" class="truck-container">
    <b-form-group label="Truck Services">
      <b-form-checkbox-group
        id="checkbox-group-truckServices"
        v-model="selectedTruckServices"
        :options="optionsTruckServices"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  name: "FiltersTruckServices",
  props: {},
  data() {
    return {
      selectedTruckServices: [], // Must be an array reference!
      optionsTruckServices: [
        { text: "Oil Change", value: "oilChange" },
        { text: "Light Mechanical", value: "lightMechanical" },
        { text: "TirePass", value: "tirePass" },
        { text: "Truck Tire Care", value: "truckTireCare" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.truck-container {
  margin-top: 15px;
  border: 1px solid lightgrey;
  padding: 5px;
  /* margin-right: 5px; */
}
</style>
