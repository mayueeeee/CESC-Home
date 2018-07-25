import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import SectionHeader from "./SectionHeader"
import moment from "moment"
const TimelineWarper = styled.div`
  padding: 5vh 0 1vh 0;
  background-image: url("/static/images/bg/bg_timeline_png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-bottom: -5vh; */
`
const StepText = styled.p`
  font-family: "superspace_regularregular";
  font-size: 1.5rem;
`
const StepIcon = styled.img`
  width: 16vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  ${props => (props.isPass ? "filter: grayscale(100%);" : "")};
    /* Tablets, Ipads (portrait) */
    @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }
  
`

const PeriodText = styled.div`
  font-family: "superspace_regularregular";
  font-size: 1.25rem;
`

const PolygonWarper = styled.div`
  margin-top: -5vh;
  z-index: 3;
`
const Polygon = styled.img`
  position: absolute;
  width: 40%;
  ${props => (props.right ? "right: 0px;" : "")};
`

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regis_diff: moment().diff(moment("2018-04-25 23:59:59"), "seconds"),
      announce_diff: moment().diff(moment("2018-04-27 23:59:59"), "seconds"),
      confirm_diff: moment().diff(moment("2018-05-03 23:59:59"), "seconds"),
      camp_diff: moment().diff(moment("2018-06-03 23:59:59"), "seconds")
    }
  }

  render() {   
    return (
      <TimelineWarper>
        <Container fluid={true} className="text-center">
          <Row>
            <Col
              xs={{
                size: 10,
                offset: 1
              }}
            >
              <SectionHeader title="Timeline" />
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={{
                size: 2,
                offset: 2
              }}
            >
              <Row>
                <Col>
                  <StepIcon
                    src="/static/images/step/icon_apply.svg"
                    isPass={this.state.regis_diff > 0}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>20 มีนาคม - 25 เมษายน</PeriodText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StepText>รับสมัคร</StepText>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={2}>
              <Row>
                <Col>
                  <StepIcon
                    src="/static/images/step/icon_announce.svg"
                    isPass={this.state.announce_diff > 0}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>30 เมษายน</PeriodText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StepText>ประกาศผล</StepText>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={2}>
              <Row>
                <Col>
                  <StepIcon
                    src="/static/images/step/icon_confirm_2.svg"
                    isPass={this.state.confirm_diff > 0}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>1 พฤษภาคม - 3 พฤษภาคม</PeriodText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StepText>ยืนยันสิทธิ์</StepText>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={2}>
              <Row>
                <Col>
                  <StepIcon
                    src="/static/images/step/icon_camp.svg"
                    isPass={this.state.camp_diff > 0}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>29 พฤษภาคม-3 มิถุนายน</PeriodText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StepText>วันค่าย</StepText>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <PolygonWarper> */}
        <Polygon src="/static/images/polygon/dec4_1.svg" />
        <Polygon src="/static/images/polygon/dec5_1.svg" right />
        {/* </PolygonWarper> */}
      </TimelineWarper>
    )
  }
}
