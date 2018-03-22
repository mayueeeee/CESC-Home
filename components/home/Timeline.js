import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'

const TimelineWarper = styled.div `
    //padding: 2vh 0 -2vh 0;
    background-image: url("/static/images/bg/bg_timeline_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: -23vh;
`
const StepText = styled.p `
    font-family: "superspace_regularregular";
    font-size: 1.5rem;
`
const StepIcon = styled.img `
    width: 16vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
`

const PeriodText = styled.div `
    font-family: "superspace_regularregular";
    font-size: 1.25rem;
`

const PolygonWarper = styled.div `
  margin-top: -5vh;
  z-index: 3;

` 
const Polygon = styled.img `
  width: 50%;

`
export default class Timeline extends React.Component {

  render() {

    return (
      <TimelineWarper className="text-center">
        <Container fluid={true}>
          <Row>
            <Col xs={{
              size: 10,
              offset: 1
            }}>
              <SectionHeader title="Timeline"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{
              size: 2,
              offset: 2
            }}>
              <Row>
                <Col><StepIcon src="/static/images/step/icon_apply.svg"/></Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>20 มีนาคม - 7 เมษายน</PeriodText>
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
                <Col><StepIcon src="/static/images/step/icon_announce.svg"/></Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>24 เมษายน</PeriodText>
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
                <Col><StepIcon src="/static/images/step/icon_confirm_2.svg"/></Col>
              </Row>
              <Row>
                <Col>
                  <PeriodText>24 เมษายน - 26 เมษายน</PeriodText>
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
                <Col><StepIcon src="/static/images/step/icon_camp.svg"/></Col>
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
        <PolygonWarper>
          <Polygon src ="/static/images/polygon/dec4_1.svg"/>
          <Polygon src ="/static/images/polygon/dec5_1.svg"/>
        </PolygonWarper>

      </TimelineWarper>
    )
  }
}