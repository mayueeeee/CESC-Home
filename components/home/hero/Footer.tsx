import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

const Polygon = styled.img`
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Footer: FunctionComponent = () => (<Polygon src="/assets/images/hero/footer.svg"/>)

export default Footer