import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    selectedLocations: [],
    currentView: "",
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    setSelectedLocations(state, selectedLocations) {
      state.selectedLocations = selectedLocations;
    },
  },
  actions: {
    async loadMarkers({ commit }, state) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        let markers;
        if (!state) {
          console.log(locations);
          markers = locations.map((location) => ({
            position: {
              lat: location.latitude,
              lng: location.longitude,
            },
            key: location.name,
            defaultAnimation: 2,
          }));
        } else {
          markers = locations.filter(
            (location) => location.stateName === state
          );
          commit("setSelectedLocations", markers);
          markers = markers.map((location) => ({
            position: {
              lat: location.latitude,
              lng: location.longitude,
            },
            key: location.name,
            defaultAnimation: 2,
          }));
        }
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
