import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const GalleryWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_lastyear_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default class Gallery extends React.Component {
 
  render() {

    return (
      <GalleryWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <SectionHeader title="Last Year : CESC X"/>
              

            </Col>

          </Row>
        </Container>

      </GalleryWarper>
    )
  }
}