import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, {keyframes} from 'styled-components';
import {Button, Container, Row, Col, Input} from 'reactstrap';
import Login from '../pages/register/login'
import RegForm from '../components/register/form'
import axios from 'axios'
import setting from '../config.json'
import Layout from '../components/Layout'
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
        console.log(response)
        var url = window.URL.createObjectURL(response.data);
        var a = document.createElement('a');
        a.href = url;
        a.download = "cesc11-register.pdf";
        a.click();
      }).catch(err=>{
        console.log(err)
      })

  }
  componentDidMount() {
    console.log(localStorage.access_token)
    axios
      .post(setting.prod_api_root + '/web/profile', {access_token: localStorage.access_token})
      .then(res => {
        // console.log(res)
        this.setState({form: res.data})
        this.forceUpdate()
        // console.log(this.state)
      })
      .catch(err => {
        console.log(err.response.data.message)
        this.setState({isError: true, errorTXT: err.response.data.message})
      });

  }
  render() {
    return (
      <Layout>
        <div className="text-center">
          <Container>
            <Row className="text-center">
              <Col>
                <Logo src="/static/images/hero/logo@4x.png"/> {/* <SectionHeader title="Registration form"/> */}
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <Button color="primary" onClick={() => this.downloadForm()}>ดาวน์โหลดใบสมัคร</Button>
              </Col>
              <Col>
                <a
                  href="https://drive.google.com/file/d/1-fuAYc7LVp1tkDmf57Eonyp6toPmK2Kv/view"
                  target="_blank">
                  <Button color="primary">ดาวน์โหลดคำถามทั่วไป</Button>
                </a>
              </Col>
              <Col>
                <a
                  href={this.state.form.sub_camp == "IOT"
                  ? "https://drive.google.com/file/d/1nqn8rKolqJEW2nUs2tUrZrqThInsTy0K/view"
                  : "https://drive.google.com/file/d/1I50axhI5AFu7a_F5ap9Gm8qi_U5EoIgl/view"}
                  target="_blank">
                  <Button color="primary">ดาวน์โหลดคำถามสาขา</Button>
                </a>

              </Col>
            </Row>
            <Row className="text-center"></Row>
            <Row className="text-center"></Row>
          </Container>

        </div>
      </Layout>
    )
  }
}