import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import Slider from 'react-slick'
import SectionHeader from './SectionHeader'
import Review from '../../data/testimonial.json'

const TestimonialWarper = styled.div `
    padding: 100px 0 0 0;
    background-image: url("/static/images/bg/bg_test_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const ReviewerName = styled.h3 `
    font-family: "superspace_regularregular";      
    text-align: center !important;
`
const ReviewerCamp = styled.h5 `
    font-family: "superspace_regularregular";      
    text-align: center !important;
`
const ReviewerWarper = styled(Row)`
  margin: 2vh 5vw 0 5vw;
`
const ReviewText = styled.p `
    font-family: "superspace_regularregular";  
    font-size:  1.5rem;
    text-align: justify !important;
    text-justify: auto;
`

const ReviewerPhoto = styled.img `
// width:100%;


`
const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};

const slick_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  className: 'center',
  centerMode: true
};
export default class Testimonial extends React.Component {

  render() {

    return (
      <TestimonialWarper className="text-center">
        <Container fluid={false}>
          <Row>
            <Col xs={{
              size: 10,
              offset: 1
            }}>
              <SectionHeader title="Testimonial"/>

            </Col>

          </Row>
          
          {/* <Row>

            <Col xs={12} md={{
              size: 4
            }}>
              <Row>
                <Col>
                  <ReviewerPhoto src={"/static/images/testimonial/" + Review[0].photo}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ReviewerName>{Review[0].fullname} {Review[0].nickname != "" && " (" + Review[0].nickname + ")"}</ReviewerName>
                </Col>

              </Row>
              <Row>
                <Col>
                  <ReviewerCamp>
                    {"ค่าย " + Review[0].camp}
                  </ReviewerCamp>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8}>
              <ReviewText>{Review[0].review}</ReviewText>
            </Col>

          </Row> */}
         <Slider {...slick_settings}>
          {Review.map((ele, index) => {
            return (<div key={index}><ReviewData key={index} reviewer={ele}/></div>)
          })}
          </Slider>
          
          
        </Container>

      </TestimonialWarper>
    )
  }
}

export class ReviewData extends React.Component {

  render() {
    

    return (
      <ReviewerWarper>

        <Col xs={12} md={4}>

          <Row>
            <Col>
              <ReviewerPhoto src={"/static/images/testimonial/" + this.props.reviewer.photo}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ReviewerName>{this.props.reviewer.fullname} {this.props.reviewer.nickname != "" && " (" + this.props.reviewer.nickname + ")"}</ReviewerName>
            </Col>

          </Row>
          <Row>
            <Col>
              <ReviewerCamp>
                {"ค่าย " + this.props.reviewer.camp}
              </ReviewerCamp>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={8} className="align-middle">
          <ReviewText>{this.props.reviewer.review}</ReviewText>
        </Col>

      </ReviewerWarper>
    )
  }

}