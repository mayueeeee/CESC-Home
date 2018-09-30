import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import renderHTML from 'react-render-html';
import SectionHeader from './SectionHeader'
import QuestionData from '../../data/faq.json'
const FAQWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_faq_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const TextBubble = styled.div `
  font-family: "superspace_regularregular";
  font-size: 1.5em;
  word-wrap: break-word;
  background-color: ${props => props.asked
  ? '#FAB971'
  : '#FF9C39'};
  height:100%;  
  padding: 2vh 50px 2vh 50px;
  display: flex;
  justify-content: center;
  align-items: center;  
  border-radius: 50px;
`
const MarginRow = styled(Row)`
  margin-bottom: 2vh;
`
const Icon = styled.img `
  width:100%;
`

export default class FAQ extends React.Component {

  render() {

    return (
      <FAQWarper className="text-center">
        <Container fluid={false}>
          <Row>
            <Col xs={{
              size: 10,
              offset: 1
            }}>
              <SectionHeader title="FAQS"/>

            </Col>

          </Row>
          {
            QuestionData.map((ele,index)=>{
              return (<Question key={index} question={ele.question} answer={ele.answer}/>)
            })
          }
          
        </Container>

      </FAQWarper>
    )
  }
}

export class Question extends React.Component {
  render() {

    return (
      <div>
        <MarginRow>
          <Col xs={1}><Icon src="/static/images/icon/ask.svg"/></Col>
          <Col xs={10}>
            <TextBubble asked>{this.props.question} ?</TextBubble>
          </Col>
        </MarginRow>

        <MarginRow>
          <Col xs={{
            offset: 1,
            size: 10
          }}>
            <TextBubble>{renderHTML(this.props.answer)}</TextBubble>
          </Col>
          <Col xs={1}><Icon src="/static/images/icon/ans.svg"/></Col>
        </MarginRow>
      </div>
    )
  }
}
