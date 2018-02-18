import React from 'react'
import styled from 'styled-components';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'
const Address = styled.p `
    font-family: "superspace_regularregular";
    font-size: 1.45rem;
`
const MapWithAMarker = withGoogleMap(props => <GoogleMap defaultZoom={8} defaultCenter={{
  lat: -34.397,
  lng: 150.644
}}>
  <Marker position={{
    lat: -34.397,
    lng: 150.644
  }}/>
</GoogleMap>);

export default class Map extends React.Component {

  render() {

    return (
      <div>
        <MapWithAMarker
          containerElement={< div style = {{ height: `400px` }}/>}
          mapElement={< div style = {{ height: `100%` }}/>}/>
      </div>
    )
  }
}