import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col, Button} from 'reactstrap';
import SectionHeader from './SectionHeader'
import Link from 'next/link'

const IntroBG = styled.div `
  background-image: url("/static/images/bg/bg_home_png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: 100vh;
  
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
  bottom: 0vh;
  left: 0vw
  
  
`

const RegisButton = styled.img `
  z-index: 3;
  width: 20vw;
  position: relative;
 
  cursor: pointer;
  
`

const ScrollButton = styled.img `
  z-index: 3;
  margin-top: 25px;
  max-width:3%;
  cursor: pointer;
  position: relative;
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

                  <Link href="/register">
                    <RegisButton src="/static/images/RegisButton.svg"/>                    
                  </Link>
                  {/* <h2>Coming soon!</h2> */}

                </Col>
              </Row>
              <Row>
                <Col>
                  <ScrollButton src="/static/images/scrollArrow.svg"/>

                </Col>
              </Row>

            </Container>

            <ButtomPolygon src="/static/images/polygon/Asset2.svg"/>

          </KeyboardBG>
        </IntroBG>
      </div>
    )
  }
}