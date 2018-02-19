import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';

const FooterWarpper = styled.footer `    
  background-color: #f5f5f5;
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
export default class Footer extends React.Component {

  render() {
    return (
      <div>
        <FooterWarpper>

              <FooterText>© 2018 CE Smart Camp 11. All Rights Reserved. Developed by <a href="https://github.com/mayueeeee">Mayueeeee</a> #CE55</FooterText>

        </FooterWarpper>
        {/* <FooterWarpper>
          <FooterR>© 2018 CE Smart Camp 11. All Rights Reserved. Developed by Mayueeeee #CE55 มุ้ยยย</FooterR>

        </FooterWarpper> */}

      </div>
    )
  }
}