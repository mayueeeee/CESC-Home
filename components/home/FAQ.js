import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const FAQWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_faq_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export default class FAQ extends React.Component {
 
  render() {

    return (
      <FAQWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <SectionHeader title="FAQS"/>
              

            </Col>

          </Row>
        </Container>

      </FAQWarper>
    )
  }
}