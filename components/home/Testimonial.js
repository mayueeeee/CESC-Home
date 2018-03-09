import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const TestimonialWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_test_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default class Testimonial extends React.Component {
 
  render() {

    return (
      <TestimonialWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <SectionHeader title="Testimonial"/>
              

            </Col>

          </Row>
        </Container>

      </TestimonialWarper>
    )
  }
}