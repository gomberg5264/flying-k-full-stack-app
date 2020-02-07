<template>
  <b-row>
    <GmapMap
      :zoom="4"
      :center="{ lat: 25.7392, lng: -104.9903 }"
      map-type-id="terrain"
      style="width: 100%; height: 400px;"
      class="map-container"
      id="map"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.key"
        :position="location.position"
        :animation="location.defaultAnimation"
        @rightclick="markerRightClicked"
      />
    </GmapMap>
  </b-row>
</template>

<script type="text/javascript">
import { gmapApi } from "vue2-google-maps";

export default {
  mounted: function() {
    this.getLocations();
  },
  computed: {
    locations() {
      return this.$store.state.locations;
    },
    google: gmapApi,
  },
  methods: {
    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
    markerRightClicked() {},
  },
};
</script>

<style>
.map-container {
  margin-top: 15px;
}
</style>
