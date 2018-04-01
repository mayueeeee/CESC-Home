import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import axios from 'axios'
import {Container, Row, Col} from 'reactstrap';
import RegForm from '../../components/register/form'
import CampSelector from '../../components/register/SubCampSelector'
import SectionHeader from '../../components/home/SectionHeader'
import Alert from '../../components/Core/Alert'
import setting from '../../config.json'
import Layout from '../../components/Layout'
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
  padding-bottom: 6vh;
  background-image: url("/static/images/applyForm/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
      errorTXT: "",
      form: {}
    }

  }

  componentDidMount() {
    axios
      .post(setting.prod_api_root + '/web/profile', {access_token: localStorage.access_token})
      .then(res => {
        this.setState({form: res.data})
      })
      .catch(err => {
        console.log(err.response.data.message)
        this.setState({isError: true, errorTXT: err.response.data.message})
      });

  }

  errorCallback = (error) => {
    this.setState({isError: true, errorTXT: error})
  }

  onDismiss = () => {
    this.setState({isError: false});
  }

  render() {
    return (
      <Layout>
        <PageWarper>
          <Container>
            <Row className="text-center">
              <Col>
                <Logo src="/static/images/hero/logo@4x.png"/>
                <SectionHeader title="Edit data"/>
              </Col>
            </Row>
            <Alert
              color="danger"
              errorText={this.state.errorTXT}
              show={this.state.isError}
              toggle={this.onDismiss}/>

            <RegForm form={this.state.form} errorHandle={this.errorCallback} edited/>

          </Container>

        </PageWarper>
      </Layout>
    )
  }
}