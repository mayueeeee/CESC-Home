import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const IntroBG = styled.div `
  background-image: url("/static/images/bg/bg_home_png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: 100vh;
  width: 100%;
`
const KeyboardBG = styled.div `
  background-image: url("/static/images/bg/bg_keyboard.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  height: 100vh;
  width: 100%;
`
const ButtomPolygon = styled.img `
  
  z-index: 2;
  position: absolute;
  bottom: -3vh;
  left: -5px;
  width: 100.30%; 
  
`

const RegisButton = styled.img`
  max-width:20%;
`

const ScrollButton = styled.img`
  max-width:20%;
`
const Hero = styled.img `
  z-index = 3;
  max-width: 45%
  /*margin-top: 80px;*/
`

export default class Intro extends React.Component {

  render() {

    return (
      <div className="text-center">
        <IntroBG>
          <KeyboardBG>
            <Container fluid={true}>
              <Row>
                <Col>
                  <Hero src="/static/images/hero/hero-intro-edit.png"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <RegisButton src="/static/images/RegisButton.svg"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* <ScrollButton src="/static/images/RegisButton.svg"/> */}
                  อิไม่ได้ให้มา
                </Col>
              </Row>
              
            </Container>
            
                  <ButtomPolygon src="/static/images/polygon/dec_1.svg"/>
               
              

          </KeyboardBG>
        </IntroBG>
      </div>
    )
  }
}