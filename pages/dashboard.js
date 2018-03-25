import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, {keyframes} from 'styled-components';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert
} from 'reactstrap';
import axios from 'axios'
import setting from '../config.json'
import Layout from '../components/Layout'
import SectionHeader from '../components/home/SectionHeader'
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
const PageWarper = styled.div `  
  background-image: url("/static/images/applyForm/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

const CardRow = styled(Row)`
  margin-bottom: 10px;
`
const RoundButton = styled(Button)`
  border-radius: 100px;
  font-family: 'Mitr', sans-serif;
  font-weight:300;
  text-decoration:none;
  

`
const Notice = styled.text`
  font-family: 'Mitr', sans-serif;
  font-weight:300;
`
export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }

  }

  downloadForm = () => {
    axios.post(setting.prod_api_root + '/web/profile/pdf', {
      access_token: localStorage.access_token
    }, {responseType: "blob"})
      .then(function (response) {
        // console.log(response)
        var url = window
          .URL
          .createObjectURL(response.data);
        var a = document.createElement('a');
        a.href = url;
        a.download = "cesc11-register.pdf";
        a.click();
      })
      .catch(err => {
        console.log(err)
      })

  }
  componentDidMount() {
    axios
      .post(setting.prod_api_root + '/web/profile', {access_token: localStorage.access_token})
      .then(res => {
        this.setState({form: res.data})
        this.forceUpdate()
      })
      .catch(err => {
        // If token expired
        if (err.response.status == 401) 
          Router.push('/register/login')
      });

  }
  render() {
    return (
      <Layout>
        <PageWarper>
          <div className="text-center">
            <Container>
              <Row className="text-center">
                <Col>
                  <Logo src="/static/images/hero/logo@4x.png"/>
                  <SectionHeader title="Download section"/>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <Card>
                    <CardBody>
                      <CardRow>
                        <Col>
                          <Alert color="info">
                          <i class="fas fa-info-circle"/>{' '}<Notice>น้องๆสามารถLoginเข้ามาดาวน์โหลดใบสมัครได้ตลอดระยะเวลาการรับสมัครนะครับ</Notice>
                          </Alert>

                        </Col>
                      </CardRow>
                      <CardRow>
                        <Col>
                          <RoundButton
                            outline
                            color="success"
                            onClick={() => this.downloadForm()}
                            size="lg"
                            block>ดาวน์โหลดใบสมัคร</RoundButton>
                        </Col>
                      </CardRow>
                      <CardRow>
                        <Col>
                          <RoundButton
                            outline
                            color="success"
                            size="lg"
                            block
                            href={setting.Gen_Question}
                            target="_blank">ดาวน์โหลดคำถามทั่วไป</RoundButton>

                        </Col>
                      </CardRow>
                      <CardRow>
                        <Col>
                          <RoundButton
                            outline
                            color="success"
                            size="lg"
                            block
                            href={this.state.form.sub_camp == "IOT"
                            ? setting.IOT_Question
                            : setting.Robot_Question}
                            target="_blank">ดาวน์โหลดคำถามสาขา</RoundButton>
                        </Col>
                      </CardRow>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </PageWarper>
      </Layout>
    )
  }
}