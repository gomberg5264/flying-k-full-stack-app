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
        { value: "AL", text: "Alabama" },
        { value: "AK", text: "Alaska" },
        { value: "AZ", text: "Arizona" },
        { value: "AR", text: "Arkansas" },
        { value: "CA", text: "California" },
        { value: "CO", text: "Colorado" },
        { value: "CT", text: "Connecticut" },
        { value: "DE", text: "Delaware" },
        { value: "FL", text: "Florida" },
        { value: "GA", text: "Georgia" },
        { value: "HI", text: "Hawaii" },
        { value: "ID", text: "Idaho" },
        { value: "IL", text: "Illinois" },
        { value: "IN", text: "Indiana" },
        { value: "IA", text: "Iowa" },
        { value: "KS", text: "Kansas" },
        { value: "KY", text: "Kentucky" },
        { value: "LA", text: "Louisiana" },
        { value: "ME", text: "Maine" },
        { value: "MD", text: "Maryland" },
        { value: "MA", text: "Massachusetts" },
        { value: "MI", text: "Michigan" },
        { value: "MN", text: "Minnesota" },
        { value: "MS", text: "Mississippi" },
        { value: "MO", text: "Missouri" },
        { value: "MT", text: "Montana" },
        { value: "NE", text: "Nebraska" },
        { value: "NV", text: "Nevada" },
        { value: "NH", text: "New Hampshire" },
        { value: "NJ", text: "New Jersey" },
        { value: "NM", text: "New Mexico" },
        { value: "NY", text: "New York" },
        { value: "NC", text: "North Carolina" },
        { value: "ND", text: "North Dakota" },
        { value: "OH", text: "Ohio" },
        { value: "OK", text: "Oklahoma" },
        { value: "OR", text: "Oregon" },
        { value: "PA", text: "Pennsylvania" },
        { value: "RI", text: "Rhode Island" },
        { value: "SC", text: "South Carolina" },
        { value: "SD", text: "South Dakota" },
        { value: "TN", text: "Tennessee" },
        { value: "TX", text: "Texas" },
        { value: "UT", text: "Utah" },
        { value: "VT", text: "Vermont" },
        { value: "VA", text: "Virginia" },
        { value: "WA", text: "Washington" },
        { value: "WV", text: "West Virginia" },
        { value: "WI", text: "Wisconsin" },
        { value: "WY", text: "Wyoming" },
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
