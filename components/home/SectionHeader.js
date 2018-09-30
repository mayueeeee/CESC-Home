import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
const Title = styled.h1`
  font-family: "big_johnregular", "Mitr";
  color: #ee981c;
  text-align: center;
  
  /* Most of the Smartphones Mobiles (Portrait) */
  @media (min-width: 320px) and (max-width: 480px) {
    font-size:2em;
    margin-bottom: 2vh;
  }
`
const Line = styled.div`
  border-top: 2px solid #ef981c;
  width: 20%;
  margin: auto;
`
export default class SectionHeader extends React.Component {
  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        {/* <Line/> */}
      </div>
    )
  }
}
