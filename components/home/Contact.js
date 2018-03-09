import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'
import Map from './Map'
const ContactWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_contact_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Address = styled.p `
    font-family: "superspace_regularregular";
    font-size: 1.45rem;
`

export default class Contact extends React.Component {

  render() {

    return (
      <ContactWarper>
        <Container fluid={false}>
          <Row>
            <Col xs={12} md={6}>
              <Container>
                <SectionHeader title="Contact US"/>
                <Address>อาคารปฏิบัติการรวม คณะวิศวกรรมศาสตร์ 2 (ECC) ภาควิชาวิศวกรรมคอมพิวเตอร์
                  คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1
                  ซอยฉลองกรุง 1 ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพฯ 10520</Address>
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <SectionHeader title="MAP"/>
              <Map/>

            </Col>

          </Row>
        </Container>

      </ContactWarper>
    )
  }
}