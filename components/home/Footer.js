import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';

const FooterWarpper = styled.footer `    
background-image: url("/static/images/bg/bg_contact_png.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

// const FooterText = styled.span `
//     margin: auto;
//     width: 50%;    
//     font-family: "superspace_regularregular";  
//     color: #ee981c;
//     text-align: center;
// `

const FooterText = styled.div `
    padding: 1em;
    text-align: center;
    color: #ee981c;
    font-family: "superspace_regularregular";  
    font-size: 1.15rem;
`
const FooterPolygon = styled.img `  
  z-index: 2;
  
  bottom: 0vh;
  left: 0.5vw
  
  
`

export default class Footer extends React.Component {

  render() {
    return (
      
        <FooterWarpper>
          <FooterPolygon src="/static/images/polygon/footer.svg"/>

              {/* <FooterText>© 2018 CE Smart Camp 11. All Rights Reserved. Developed by <a href="https://github.com/mayueeeee">Mayueeeee</a> #CE55</FooterText> */}

        </FooterWarpper>
        

      
    )
  }
}