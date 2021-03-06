mapboxgl.accessToken =
  "pk.eyJ1IjoiY2xhdXJlYSIsImEiOiJjazZpYW9jdXYzMzhoM2VxZjkweDhucWxpIn0.wncNvrarBxvfGydMdy0ZgQ";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-77.45316296360596, 37.548193997957185], // starting position
  zoom: 14, // starting zoom
});

var radius = 0.0025; // radius that the circle spins around

function pointOnCircle(angle, long, lat) {
  return {
    type: "Point",
    coordinates: [
      Math.cos(angle) * radius + long,
      Math.sin(angle) * radius + lat,
    ],
  };
}

var longitude = -77.45316296360596;
var latitude = 37.548193997957185;

map.on("load", function () {
  map.addSource("point", {
    type: "geojson",
    data: pointOnCircle(0),
  });

  map.addLayer({
    id: "point",
    source: "point",
    type: "circle",
    paint: {
      "circle-radius": 7,
      "circle-color": "#FF0000",
    },
  });

  function animateMarker(timestamp) {
    // Update the data to a new position based on the animation timestamp. The
    // divisor in the expression `timestamp / 1000` controls the animation speed.
    map
      .getSource("point")
      .setData(pointOnCircle(timestamp / 500, longitude, latitude));

    // Request the next frame of the animation.
    requestAnimationFrame(animateMarker);
  }

  // Start the animation.
  animateMarker(0);
});
