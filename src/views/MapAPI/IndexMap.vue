<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="coordinates">
        <MglMarker :coordinates="coordinates" color="blue" />
    </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      accessToken: 'pk.eyJ1IjoiYW5kcmVhc3N1cnlhZGkiLCJhIjoiY2tzN21jbjE5MWlqNjJ1cnpzZ3V1dzkxMSJ9.22eZXRo0cKFuWBBS-wJ_HA',
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      coordinates: [107.600165, -6.927679]
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>