import React from 'react'
import styled, {keyframes} from 'styled-components';
import {Container, Row, Col, Button} from 'reactstrap';
import SectionHeader from './SectionHeader'
import Link from 'next/link'
import moment from 'moment'
import setting from '../../config.json'
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
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
const bounce = keyframes `
  0%,100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
`
const RegisButton = styled.img `
  margin-top: -17vh;
  z-index: 3;
  width: 15vw;
  position: relative; 
  cursor: pointer;
  @media (max-width: 450px){
    width: 60vw;
    margin-top: 0vh;
  }
  
`

const ScrollButton = styled.img `
  z-index: 3;
  // margin-top: 2;
  /*max-width:2%;*/
  width: 5%;
  cursor: pointer;
  position: relative;
  animation: ${bounce} 1.5s linear infinite;
  @media (max-width: 450px){
    margin-top: 5vh;
    width: 20%;
    
  }
`
const Logo = styled.img `
  z-index = 3;
  width:80%; 
  margin-top: 10vh;

  /*For Desktop*/
  @media (min-width: 1025px){
    max-width: 25%;
    margin-top: 5vh;

  }
`
const IOTChar = styled.img `
  float:left;
  z-index: 3;
  width: 30vh;
  margin-left: -8vh;
  @media (min-width: 1025px){
    margin-top: -15vh;
    margin-left: -4vh;
    width: 60vh;

  }
`

const RobotChar = styled.img `
  float:right;
  z-index: 3;
  width: 30vh;
  margin-right: -6vh;
  @media (min-width: 1025px){
    margin-top: -15vh;
    margin-right: -10vh;
    width: 60vh;

  }
`

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regis_diff: moment().diff(moment("2018-04-25 23:59:59"), 'seconds'),
      announce_diff: moment().diff(moment("2018-04-30 00:00:00"), 'seconds'),
      confirm_diff: moment().diff(moment("2018-05-03 23:59:59"), 'seconds'),
      camp_diff: moment().diff(moment("2018-06-03 23:59:59"), 'seconds')
    }
  }

  showButtom() {
    // console.log(`Regis: diff: ${this.state.regis_diff}`)
    // console.log(`Announce: diff: ${this.state.announce_diff}`)
    // console.log(`Confirm: diff: ${this.state.confirm_diff}`)
    // console.log(`Camp: diff: ${this.state.camp_diff}`)
    if (this.state.regis_diff < 0) {
      return (
        <Link href="/register/login">
          <RegisButton src="/static/images/RegisButton.svg"/>
        </Link>
      )
    } else if (this.state.regis_diff > 0 && this.state.announce_diff > 0) {
      return (
        <a href={setting.Announce_Sheet}>
          <RegisButton src="/static/images/announce_button.svg"/>
        </a>
      )

    }
    // else{   return ('') }
  }

  render() {

    return (
      <div className="text-center">
        <IntroBG>
          <KeyboardBG>
            <Container fluid={true}>
              <Row>
                <Col>
                  <Logo src="/static/images/hero/logo@4x.png"/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <RobotChar src="/static/images/hero/robot.png"/>
                </Col>
                <Col xs={6}>
                  <IOTChar src="/static/images/hero/iot.png"/>
                </Col>
              </Row>
              <Row>
                <Col>
                  {this.showButtom()}

                  {/* <Link href="/register/login">
                    <RegisButton src="/static/images/RegisButton.svg"/>
                  </Link> */}

                  {/* <a href={setting.Announce_Sheet}>
                    <RegisButton src="/static/images/announce_button.svg"/>
                  </a> */}
                  {/* <h2>Coming soon!</h2> */}

                </Col>
              </Row>
              <Row>
                <Col>
                  <ScrollLink to="about" spy={true} smooth={true} offset={-50} duration={1000}>
                    <ScrollButton src="/static/images/scrollArrow.svg"/>
                  </ScrollLink>

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