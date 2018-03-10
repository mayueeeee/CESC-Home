import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import Slider from "react-slick"
import SectionHeader from './SectionHeader'
import Photo from '../../data/photo.json'
const GalleryWarper = styled.div `
    padding: 100px 0 100px 0;
    background-image: url("/static/images/bg/bg_lastyear_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const SlideImage = styled.img `
  width:80%;
`
const SlideThumbnail = styled.img`
  width:80%;
  
`
const ThumbnailList = styled.div`
  margin-top:5vh;
`
const slick_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,  
  autoplay: true,
  autoplaySpeed: 2000,
  className: 'center',
  centerMode: true,
  centerPadding: '60px',
};

export default class Gallery extends React.Component {

  constructor(props) {
    super(props)
    // Initial photo index
    var photo_index = Math.floor(Math.random() * (25 - 0 + 1)) + 0
    this.state = {
      filename: Photo.filename[photo_index],
      index: photo_index
    }
    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  componentDidMount() {
    // console.log(Filename)
    // Photo.filename.forEach(filename=>{
    //   console.log(filename)
    // })

  }

  handleSlideChange(oldIndex, newIndex){
    this.setState({filename: Photo.filename[newIndex]})
  }
  render() {

    return (
      <GalleryWarper className="text-center">
        <Container fluid={false}>
          <Row>
            <Col xs={{
              size: 10,
              offset: 1
            }}>
              <SectionHeader title="Last Year : CESC X"/>
            </Col>
          </Row>
          <Row>
            <Col xs={{
              size: 10,
              offset: 1
            }}>
              {/* For IMG Display */}
              <SlideImage src={"/static/images/cescx/" + this.state.filename || ""}/>
            </Col>
          </Row>
          <Row>
            
            <Col xs={{
              size: 10,
              offset: 1
            }}>
            <ThumbnailList>
              {/* For Slick */}
              <Slider {...slick_settings} beforeChange = {this.handleSlideChange}>              
                {Photo.filename.map((element,index) => {
                      return (
                        <SlideThumbnail key={index} src={"/static/images/cescx/"+element || ""}/>
                      )
                    })}
                
                
              </Slider>
              </ThumbnailList>

            </Col>

          </Row>
        </Container>

      </GalleryWarper>
    )
  }
}