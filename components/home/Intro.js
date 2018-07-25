import React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col, Button } from "reactstrap"
import Link from "next/link"
import moment from "moment"
import setting from "../../config.json"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
const IntroBG = styled.div`
  background-image: url("/static/images/bg/bg_home_png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  height: 100vh;
`
const KeyboardBG = styled.div`
  background-image: url("/static/images/bg/bg_keyboard.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  height: 100vh;
  width: 100%;
`
const ButtomPolygon = styled.img`
  z-index: 2;
  position: absolute;
  bottom: 0vh;
  left: 0vw;
`
const bounce = keyframes`
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
const RegisButton = styled.img`
  margin-top: -17vh;
  z-index: 3;
  width: 15vw;
  position: relative;
  cursor: pointer;

  /* @media (max-width: 450px) {
    width: 60vw;
    margin-top: 0vh;
  } */
  /* :hover{
    transform: scale(1.2);
  } */

  /* Desktop */
  @media (min-width: 1281px) {
  }
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
    margin-top: 0vh;
  }
  /* Tablets, Ipads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 20%;
    margin-top: -50px;
  }
  /* Most of the Smartphones Mobiles (Portrait) */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 60vw;
    margin-top: 1vh;
  }
`

const ScrollButton = styled.img`
  z-index: 3;
  width: 5%;
  cursor: pointer;
  position: relative;
  animation: ${bounce} 1.5s linear infinite;
  /* @media (max-width: 450px) {
    margin-top: 5vh;
    width: 20%;
  } */

  /* Desktop */
  @media (min-width: 1281px) {
  }
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 50px;
    width: 10%;
  }
  /* Tablets, Ipads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin-top: 15px;
    width: 8%;
  }
  /* Most of the Smartphones Mobiles (Portrait) */
  @media (min-width: 320px) and (max-width: 480px) {
    width: 20%;
    margin-top: 8vh;
  }
`
const Logo = styled.img`
  z-index: 3;
  width: 90%;
  margin-top: 10vh;
  /* Desktop */
  @media (min-width: 1281px) {
    max-width: 28%;
    margin-top: 5vh;
  }
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 55%;
  }
  /* Tablets, Ipads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin-top: 5vh;
    max-width: 40%;
    
  }

  /* For Desktop
  @media (min-width: 1025px) {
    max-width: 25%;
    margin-top: 5vh;
  } */
`
const IOTChar = styled.img`
  float: left;
  z-index: 3;
  width: 30vh;
  margin-left: -8vh;
  /* @media (min-width: 1025px) {
    margin-top: -15vh;
    margin-left: -4vh;
    width: 60vh;
  } */

  /* Desktop */
  @media (min-width: 1281px) {
    margin-top: -15vh;
    margin-left: -4vh;
    width: 60vh;
  }
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  /* Tablets, Ipads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 70%;
  }
`

const RobotChar = styled.img`
  float: right;
  z-index: 3;
  width: 30vh;
  margin-right: -6vh;
  /* @media (min-width: 1025px) {
    margin-top: -15vh;
    margin-right: -10vh;
    width: 60vh;
  } */

  /* Desktop */
  @media (min-width: 1281px) {
    margin-top: -15vh;
    margin-left: -4vh;
    width: 60vh;
  }
  /* Tablets, Ipads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  /* Tablets, Ipads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 70%;
  }
`

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regis_diff: moment().diff(moment("2018-04-25 23:59:59"), "seconds"),
      announce_diff: moment().diff(moment("2018-04-30 00:00:00"), "seconds"),
      confirm_diff: moment().diff(moment("2018-05-03 23:59:59"), "seconds"),
      camp_diff: moment().diff(moment("2018-06-03 23:59:59"), "seconds")
    }
  }

  showButtom() {
    if (this.state.regis_diff < 0) {
      return (
        <Link href="/register/login">
          <RegisButton
            src="/static/images/RegisButton.svg"
            className="hvr-grow"
          />
        </Link>
      )
    } else if (this.state.regis_diff > 0 && this.state.announce_diff > 0) {
      return (
        <a href={setting.Announce_Sheet}>
          <RegisButton
            src="/static/images/announce_button.svg"
            className="hvr-grow"
          />
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
                  <Logo src="/static/images/hero/logo@4x.png" />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <RobotChar src="/static/images/hero/robot.png" />
                </Col>
                <Col xs={6}>
                  <IOTChar src="/static/images/hero/iot.png" />
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
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <ScrollButton src="/static/images/scrollArrow.svg" />
                  </ScrollLink>
                </Col>
              </Row>
            </Container>

            <ButtomPolygon src="/static/images/polygon/Asset2.svg" />
          </KeyboardBG>
        </IntroBG>
      </div>
    )
  }
}
