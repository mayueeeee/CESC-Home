import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'
import Link from 'next/link'

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

const RegisButton = styled.img `
  z-index: 1000;
  width: 20vw;
  
  cursor: pointer;
  
`

const ScrollButton = styled.img `
  margin-top: 20px;
  max-width:2%;
  cursor: pointer;
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
                </Col>
              </Row>
              <Row>
                <Col>
                  <ScrollButton src="/static/images/scrollArrow.svg"/>

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