import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import Slider from 'react-slick'
import SectionHeader from './SectionHeader'
import Photo from '../../data/photo.json'
const GalleryWarper = styled.div `
    padding: 18% 0 100px 0;
    background-image: url("/static/images/bg/bg_lastyear_png.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const SlideImage = styled.img `
  width:80%;
`
const SlideThumbnail = styled.img `
  width:80%;
  min-height: auto !important;
  
`
const ThumbnailList = styled.div `
  margin-top:5vh;
`

const PolygonWarper = styled.div `
  margin-top: -5vh;
  z-index: 3;

` 
const Polygon = styled.img `
  position: absolute;
  ${props => props.right
    ? 'right: 0px;'
    : ''}
  // right: 0px;
  width: 12%;

`

const slick_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 2000,
  className: 'center',
  centerMode: true
};

export default class Gallery extends React.Component {

  constructor(props) {
    super(props)
    // Initial photo index
    var photo_index = Math.floor(Math.random() * (25 - 0 + 1)) + 0
    this.state = {
      filename: Photo.filename[0],
      slideIndex: 0,
      updateCount: 0
    }
    this.handleSlideChange = this
      .handleSlideChange
      .bind(this)
    this.changeHandler = this
      .changeHandler
      .bind(this)
  }

  changeHandler(e) {
    this
      .sliderWrapper
      .slider
      .slickGoTo(e.target.value)
  }

  changeUpdateCount(oldIndex, newIndex) {
    this.setState({
      updateCount: this.state.updateCount + 1,
      filename: Photo.filename[newIndex]
    })
  }

  handleSlideChange(oldIndex, newIndex) {
    this.setState({
      filename: Photo.filename[newIndex],
      updateCount: this.state.updateCount + 1
    })
  }

  render() {

    return (
      <GalleryWarper >
        <Container fluid={false} className="text-center">
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
              <SlideImage src={"/static/images/cescx/" + this.state.filename || ""} className="animated fadeIn"/>
            </Col>
          </Row>
          <Row>

            <Col xs={{
              size: 10,
              offset: 1
            }}>

              {/* Slide */}
              <ThumbnailList>

                <SliderWrapper
                  ref={sliderWrapper => this.sliderWrapper = sliderWrapper}
                  beforeChange={this
                  .changeUpdateCount
                  .bind(this)}
                  slideIndex={this.state.slideIndex}
                  updateCount={this.state.updateCount}/>

              </ThumbnailList>
            </Col>

          </Row>
        </Container>
        <PolygonWarper>
          <Polygon src ="/static/images/polygon/dec8_1.svg"/>
          <Polygon  right src ="/static/images/polygon/dec6_1.svg"/>
        </PolygonWarper>

      </GalleryWarper>
    )
  }
}

class SliderWrapper extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    // certain condition here, perhaps comparison between this.props and nextProps
    // and if you want to update slider on setState in parent of this, return true,
    // otherwise return false
    if (this.props.updateCount !== nextProps.updateCount) {
      return false
    }
    return true
  }
  componentDidMount(){
    this.forceUpdate()
  }

  render() {
    const settings = {
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
      beforeChange: this.props.beforeChange
    };

    return (
      
        <Slider ref={slider => this.slider = slider} {...settings}>
          {Photo
            .filename
            .map((element, index) => {
              return (<SlideThumbnail key={index} src={"/static/images/cescx/" + element || ""}/>)
            })
}
        </Slider>
      
    )
  }
}