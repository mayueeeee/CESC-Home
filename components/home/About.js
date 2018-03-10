import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const AboutWarper = styled.div `
    padding: 10vh 0 100px 0;
    background-image: url("/static/images/bg/bg_about_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const AboutText = styled.p `
    font-family: "superspace_regularregular";  
    font-size:  1.75rem;
    text-align: center !important;
`
// const SlimContainer
export default class About extends React.Component {

  render() {

    return (
      <AboutWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>

              <SectionHeader title="About"/>
              <AboutText>CE Smart Camp เป็นค่ายคอม
              </AboutText>
              <AboutText>ค่ายที่จะช่วยให้น้องมยื้อขึ้น เป็นก้อนด้วย เพราะอาหารเราดี #อิ</AboutText>

            </Col>

          </Row>
        </Container>

      </AboutWarper>
    )
  }
}