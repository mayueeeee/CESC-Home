import styled, {keyframes} from 'styled-components'
import {FunctionComponent} from 'react'

const bounce = keyframes`
  0%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -moz-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
`

const Button = styled.img`
  margin: 0 auto;
  z-index: 3;
  width: 28%;
  cursor: pointer;
  position: relative;
  animation: ${bounce} 1.5s linear infinite;
`

const ScrollButton: FunctionComponent = () => (<Button src="/assets/images/buttons/scroll.svg"/>)

export default ScrollButton