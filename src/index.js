// console.log('Index.js runs')
const buildMarker= require('./marker')

const mapboxgl = require("mapbox-gl");
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = "pk.eyJ1Ijoic3V5YXNoMTkiLCJhIjoiY2phOXRyMDlyMGx6ZjMybzdzMnQ1ZHJzMiJ9.IbKhkyOj2XFb2PSOlNYr8w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// var newDom = document.createElement('div');
// var map = document.getElementById('map')
// console.log(map)
// new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map); 

// var marker = new mapboxgl.Marker()
//   .setLngLat([-74.009, 40.705])
//   .addTo(map);

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);