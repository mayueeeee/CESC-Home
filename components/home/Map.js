import React from 'react'
import styled from 'styled-components';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'
import config from '../../config.json'


const GMap = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
`

const MapWarper = styled.div`
  position: relative;
  padding-bottom: 75%;
  height: 0;
  overflow: hidden;
`
export default class Map extends React.Component {

  render() {
    let _url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8221010245197!2d100.7733807141974!3d13.729218001516802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664a2458d53d%3A0xd323a50b1d5b5562!2z4Lit4Liy4LiE4Liy4Lij4Lib4LiP4Li04Lia4Lix4LiV4Li04LiB4Liy4Lij4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmMIDIgKOC4leC4tuC4gSBFQ0Mp!5e0!3m2!1sth!2sth!4v1530782934844"

    return (
      <MapWarper>       
          <GMap src={_url} style = {{width:"600px" ,height:"450px", border:0}} frameborder="0" allowfullscreen/>
      </MapWarper>
    )
  }
}