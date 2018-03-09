import React from 'react'
import styled from 'styled-components';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const MyMapComponent = withScriptjs(withGoogleMap((props) => <GoogleMap
  defaultZoom={16}
  defaultCenter={{
  lat: 13.729369,
  lng: 100.775960
}}>
  
    <Marker
      position={{
      lat: 13.729291,
      lng: 100.77569
    }}
      defaultTitle="อาคารปฏิบัติการวิศวกรรมศาสตร์ 2 (ตึก ECC)">
      <InfoWindow>
        <h6>อาคารปฏิบัติการวิศวกรรมศาสตร์ 2 (ตึก ECC)</h6>
      </InfoWindow>
    </Marker>

  

</GoogleMap>))

export default class Map extends React.Component {

  render() {

    return (
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={< div style = {{ height: `100%` }}/>}
          containerElement={< div style = {{ height: `400px` }}/>}
          mapElement={< div style = {{ height: `100%` }}/>}/>

      </div>
    )
  }
}