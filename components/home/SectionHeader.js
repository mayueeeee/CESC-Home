import React from 'react'
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
const Title = styled.h1 `  
    font-family: "big_johnregular";  
    color: #ee981c;
    text-align: center;
`;
const Line = styled.div`  
    border-top: 2px solid #ef981c;
    width: 20%;
    margin: auto;

`;
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