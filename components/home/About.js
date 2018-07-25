import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import SectionHeader from "./SectionHeader"

const AboutWarper = styled.div`
  padding: 10vh 0 10vh 0;
  background-image: url("/static/images/bg/bg_about_png.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const AboutText = styled.p`
  font-family: "superspace_regularregular";
  font-size: 1.75rem;
  text-align: center !important;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.25rem;
  }
`

const Polygon = styled.img `
  position: absolute;
  ${props => props.right
    ? 'right: 0px;'
    : ''}
  width: 8%;
  margin-top: -10vh;

`
// const SlimContainer
export default class About extends React.Component {
  render() {
    return (
      <AboutWarper>
        <Container fluid={true}>
          <Row>
            <Col xs={{ size: 10, offset: 1 }}>
              <SectionHeader title="About" />
              <AboutText>
                ค่าย CE SMART CAMP 11 จัดโดยคณะวิศวกรรมศาสตร์
                ภาควิชาวิศวกรรมคอมพิวเตอร์
                สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                จัดขึ้นระหว่างวันที่ 29 พฤษภาคม – 3 มิถุนายน 2561
                (ค่ายพักค้างคืน 6 วัน 5 คืน)
              </AboutText>
              <AboutText>
                ภายในค่ายจะมีการจัดอบรมเชิงปฏิบัติการเพื่อเสริมสร้างความรู้
                ให้แก่น้องๆนักเรียนในระดับชั้นมัธยมศึกษาตอนปลาย
                และแนะนำแนวทางในภาควิชาวิศวกรรมคอมพิวเตอร์
                พร้อมกิจกรรมสนุกสนานจากพี่ๆ โดยจัดอบรมเป็น 2 ส่วนคือ Internet of
                Things(IoT) และ Micro Robot Development(Robot)
              </AboutText>
            </Col>
          </Row>
        </Container>
        <Polygon src="/static/images/polygon/dec2_1.svg"/>
        <Polygon right src="/static/images/polygon/dec3_1.svg"/>
      </AboutWarper>
    )
  }
}
