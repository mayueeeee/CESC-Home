import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const SponsorWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_spon_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default class Sponsor extends React.Component {
 
  render() {

    return (
      <SponsorWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <SectionHeader title="Sponsored By"/>
              

            </Col>

          </Row>
          <Row>
            <Col>
            {/* <img src="/static/images/sponsor/ae.jpg"/> */}
            </Col>
            
          </Row>
        </Container>

      </SponsorWarper>
    )
  }
}