import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import SectionHeader from './SectionHeader'
const Address = styled.p `
    font-family: "superspace_regularregular";
    font-size: 1.45rem;
`

export default class Contact extends React.Component {

  render() {

    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col>
              <Container>
                <SectionHeader title="Contact US"/>
                <Address>อาคารปฏิบัติการรวม คณะวิศวกรรมศาสตร์ 2 (ECC) ภาควิชาวิศวกรรมคอมพิวเตอร์
                  คณะวิศวกรรมศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1
                  ซอยฉลองกรุง 1 ถนนฉลองกรุง เขตลาดกระบัง กรุงเทพฯ 10520</Address>
              </Container>
            </Col>
            <Col>
              <SectionHeader title="MAP"/>
            </Col>

          </Row>
        </Container>

      </div>
    )
  }
}