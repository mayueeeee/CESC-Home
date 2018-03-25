import React from 'react'
import Router from 'next/router'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import {FacebookLogin} from 'react-facebook-login-component'
import axios from 'axios'
import setting from '../../config.json'
const FBicon = styled.i `
    margin-right: 5px;
`

const FBbutton = styled(FacebookLogin)`
    background-color: #24409b;
    border-color: #24409b;
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
const PageWarper = styled.div `
  
  background-image: url("/static/images/applyForm/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`

export default class FBLogin extends React.Component {

  responseFacebook(response) {    
    if (response.accessToken != null) {
      // POST to backend to generate JWT
      axios
        .post(setting.prod_api_root + '/web/login', {
          facebook_uid: response.id,
          facebook_access_token: response.accessToken
        })
        .then(function (res) {
          // Store access-token in Local Storage
          localStorage.setItem("access_token", res.data.access_token);
          // If complete redirect to dashboard
          if (res.data.is_register && res.data.is_complete) 
            Router.push('/dashboard')
          else 
            Router.push('/register')

        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Login failed")
    }

  }

  render() {

    return (
      <PageWarper>
      <Container>
        <Row className="text-center">
          <Col>
            <Logo src="/static/images/hero/logo@4x.png"/>
            {/* <SectionHeader title="Registration form"/> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <FBbutton
              socialId={setting.fb_app_id}
              language="en_US"
              scope="public_profile,email"
              responseHandler={this.responseFacebook}
              xfbml={true}
              fields="id,email,name"
              version="v2.9"
              className="btn btn-primary btn-lg"
              buttonText="Login With Facebook">
              <FBicon className="fab fa-facebook-square"/>

            </FBbutton>
          </Col>
        </Row>

      </Container>

    </PageWarper>)
  }
}