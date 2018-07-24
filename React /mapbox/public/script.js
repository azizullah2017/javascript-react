mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q'; // Put your Mapbox Public Access token here

    // Load a new map in the 'map' HTML div
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-79.3832, 43.6512],
      zoom: 11
    });

    // Load the vector tile source from the Mapbox Pedestrian traffic example
    map.on('load', function() {
      // Add the circle layer to the map
      map.addLayer({
        id: 'pedestrian_volume',
        type: 'circle',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.dvrdhs7l' // Your Mapbox tileset Map ID
        },
        'source-layer': 'Signalized_Intersection_Traff-4ypaqa' // name of tilesets
      });
    });