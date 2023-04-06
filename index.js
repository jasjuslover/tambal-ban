// base lat long
const lat = -6.9219109985476965;
const lng = 107.6070284843445;

// init map
const map = initMap();

function initMap() {
  var map = L.map("map").setView([lat, lng], 15);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    opacity: 0.4,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  return map;
}

// init data
function initData() {
  const data = [
    {
      name: "Tambal Ban TUBLES V76",
      lat: -6.9203847,
      lng: 107.6160025,
    },
    {
      name: "Tambal Ban",
      lat: -6.9236411,
      lng: 107.616488,
    },
    {
      name: "Tambal Ban",
      lat: -6.9232938,
      lng: 107.6138056,
    },
    {
      name: "Tambal Ban",
      lat: -6.9235837,
      lng: 107.601918,
    },
  ];

  return data;
}

// fetching data
const markerData = initData();
markerData.forEach(function (data) {
  const latLng = [data.lat, data.lng];
  const marker = L.marker(latLng).addTo(map).bindPopup(data.name);
  marker.on("mouseover", function () {
    this.openPopup();
  });
  marker.on("mouseout", function () {
    this.closePopup();
  });
  marker.on("click", function () {
    map.setView(latLng, 19);
  });
});
