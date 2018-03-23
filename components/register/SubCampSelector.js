import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import axios from 'axios'
import {
  Button,
  Container,
  Row,
  Col,  
  Card,
  CardBody
} from 'reactstrap';
import RegForm from '../../components/register/form'
import SectionHeader from '../../components/home/SectionHeader'
import setting from '../../config.json'
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
const FormHeader = styled.h3 `
  // font-family: "superspace_regularregular";  
  font-family: 'Mitr', sans-serif;
  font-weight:400;
  margin-top: 20px;
`

const Label = styled.label `
  font-family: 'Mitr', sans-serif;
  font-size: 1.25rem;
  font-weight:300;
`

const CampCard = styled(Card)`
  margin-bottom:3vh;
`
const Warning = styled.h5 `
    font-color: red;
    font-family: 'Mitr', sans-serif;
    font-weight:300;
    margin-top: 10px;

`



export default class SubCampSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
      form: this.props.form || {}
    }
    
  }

  selectCamp = (camp) => {
    console.log(camp)
    axios
        .put(setting.prod_api_root + '/web/register/select', {          
          access_token: localStorage.access_token,
          sub_camp: camp        
        })
        .then(res=>{
          // console.log(res)
          // this.setState({form:res.data})
          // console.log(this.state)
          window.location.reload()
        })
        .catch(err=>{
          console.log(err)
        });
  }

  render() {
    return (
      <CampCard>
        <CardBody>
          <Row className="text-center">
            <Col>
              <FormHeader>กรุณาเลือกค่ายย่อย</FormHeader>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={6}>
              <Button color="danger" size="lg" block onClick={()=>this.selectCamp('Robot')}>Robot</Button>
            </Col>
            <Col xs={6} md={6}>
              <Button color="primary" size="lg" block onClick={()=>this.selectCamp('IOT')}>IOT</Button>
            </Col>

          </Row>
          <Row className="text-center">
            <Col>
              <Warning>คำเตือน: เมื่อน้องเลือกแล้วจะไม่สามารถเปลี่ยนได้นะครับ</Warning>
            </Col>

          </Row>
        </CardBody>
      </CampCard>

    )
  }
}