// base lat long
const lat = -6.9219109985476965;
const lng = 107.6070284843445;

// init map
const map = initMap();

function initMap() {
  // var map = L.map("map").setView([lat, lng], 15);
  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   maxZoom: 19,
  //   opacity: 0.4,
  //   attribution:
  //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);

  // var map = L.map("map").setView([51.505, -10], 1);

  // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  // }).addTo(map);

  // var latlngs = [];

  // var latlng1 = [23.634501, -102.552783],
  //   latlng2 = [17.987557, -92.929147];

  // var offsetX = latlng2[1] - latlng1[1],
  //   offsetY = latlng2[0] - latlng1[0];

  // var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
  //   theta = Math.atan2(offsetY, offsetX);

  // var thetaOffset = 3.14 / 10;

  // var r2 = r / 2 / Math.cos(thetaOffset),
  //   theta2 = theta + thetaOffset;

  // var midpointX = r2 * Math.cos(theta2) + latlng1[1],
  //   midpointY = r2 * Math.sin(theta2) + latlng1[0];

  // var midpointLatLng = [midpointY, midpointX];

  // latlngs.push(latlng1, midpointLatLng, latlng2);

  // var pathOptions = {
  //   color: "red",
  //   weight: 3,
  // };

  // var curvedPath = L.curve(
  //   ["M", latlng1, "Q", midpointLatLng, latlng2],
  //   pathOptions
  // ).addTo(map);

  var map = L.map("map", {
    crs: L.CRS.Simple,
  });

  var bounds = [
    [0, 0],
    [562.4999999999999, 1000],
  ];
  var image = L.imageOverlay("26.png", bounds).addTo(map);
  map.fitBounds(bounds);

  return map;
}

// map.on("click", function (e) {
//   var coord = e.latlng;
//   var lat = coord.lat;
//   var lng = coord.lng;
//   console.log(
//     "You clicked the map at latitude: " + lat + " and longitude: " + lng
//   );
// });

// // init data
// function initData() {
//   const data = [
//     {
//       name: "Tambal Ban TUBLES V76",
//       lat: -6.9203847,
//       lng: 107.6160025,
//     },
//     {
//       name: "Tambal Ban",
//       lat: -6.9236411,
//       lng: 107.616488,
//     },
//     {
//       name: "Tambal Ban",
//       lat: -6.9232938,
//       lng: 107.6138056,
//     },
//     {
//       name: "Tambal Ban",
//       lat: -6.9235837,
//       lng: 107.601918,
//     },
//   ];

//   return data;
// }

// // fetching data
// const markerData = initData();
// markerData.forEach(function (data) {
//   const latLng = [data.lat, data.lng];
//   const marker = L.marker(latLng).addTo(map).bindPopup(data.name);
//   marker.on("mouseover", function () {
//     this.openPopup();
//   });
//   marker.on("mouseout", function () {
//     this.closePopup();
//   });
//   marker.on("click", function () {
//     map.setView(latLng, 19);
//   });
// });
