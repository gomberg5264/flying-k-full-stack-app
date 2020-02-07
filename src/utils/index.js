import axios from "axios";

export const getMarkers = async (state = "CA") => {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  let markers;
  if (!state) {
    markers = locations.map((location) => ({
      position: {
        lat: location.latitude,
        lng: location.longitude,
      },
      key: location.name,
      defaultAnimation: 2,
    }));
  } else {
    console.log(locations);
    console.log(locations.filter((location) => location.stateName === state));
    markers = locations.filter((location) => location.stateName === state);
    return markers.map((location) => ({
      position: {
        lat: location.latitude,
        lng: location.longitude,
      },
      key: location.name,
      defaultAnimation: 2,
    }));
  }
  return markers;
};
