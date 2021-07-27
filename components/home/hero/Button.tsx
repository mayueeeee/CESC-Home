import styled from 'styled-components'
import {FunctionComponent} from 'react'

interface ButtonProps {
    src: string
}

const Button = styled.img`
  position: relative;
  width: 72%;
  z-index: 3;
  margin: -12vh auto 0;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: scale(1.2);
  }
`
const RegisterButton: FunctionComponent<ButtonProps> = (props) => (<Button {...props}/>)

export default RegisterButton