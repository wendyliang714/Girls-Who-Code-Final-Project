mapboxgl.accessToken = 'pk.eyJ1Ijoid2VuZHlsaWFuZzcxNCIsImEiOiJjajZjZ2Q4cncxc3JoMndtenFtY3ZyZGtlIn0.SLygXYRdKJlug4oqFndU2A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-73.97, 40.75],
  zoom: 11
});

// code from the next step will go here!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-74.0445, 40.6892]
    },
    properties: {
      title: 'Statue of Liberty',
      description: 'New York, NY 10004'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9654, 40.7829]
    },
    properties: {
      title: 'Central Park',
      description: 'New York, NY 10024'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9857, 40.7484]
    },
    properties: {
      title: 'Empire State Building',
      description: '350 5th Ave, New York, NY 10118'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9851, 40.7589]
    },
    properties: {
      title: 'Times Square',
      description: 'Manhattan, NY 10036'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9787, 40.7587]
    },
    properties: {
      title: 'Rockefeller Center',
      description: '45 Rockefeller Plaza, New York, NY 10111'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9969, 40.7061]
    },
    properties: {
      title: 'Brooklyn Bridge',
      description: 'Brooklyn Bridge, New York, NY 10038'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-74.005794, 40.421338]
    },
    properties: {
      title: 'Battery Park',
      description: 'New York, NY 10004'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-74.009507, 40.712808]
    },
    properties: {
      title: 'One World Trade Center',
      description: '285 Fulton St, New York, NY 10007'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.955085, 40.778345]
    },
    properties: {
      title: 'The Metropolitan Museum of Art',
      description: '1000 5th Ave, New York, NY 10028'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-74.012238, 40.708119]
    },
    properties: {
      title: 'Wall Street',
      description: 'Wall St, New York, NY'
    }
  }]
};

  // add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el, { offset: [-50 / 2, -50 / 2] })
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
  .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});

// Add geolocate control to the map.
map.addControl(new MapboxGeocoder({
    accessToken: 'pk.eyJ1Ijoid2VuZHlsaWFuZzcxNCIsImEiOiJjajZjZ2Q4cncxc3JoMndtenFtY3ZyZGtlIn0.SLygXYRdKJlug4oqFndU2A'
}));

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left')
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
