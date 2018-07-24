import React, { Component } from 'react';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { div } from 'gl-matrix/src/gl-matrix/vec4';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q"

});

class App extends Component {
  render() {
    return (
     /*  <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map> */
<div>
</div>
    );
  }
}

export default App;
