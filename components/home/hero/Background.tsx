import React, {FunctionComponent, PropsWithChildren} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const BackgroundWrapper = styled.div`
  background: linear-gradient(180deg, rgba(242, 242, 242, 1) 0%, rgba(252, 252, 252, 1) 100%);;
  background-size: cover;
  z-index: -1;
  height: 100vh;
`
const BackgroundOverlay = styled.div`
  background-image: url("/assets/images/hero/bg_keyboard.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 4vh 0 0 0;
`

const Background: FunctionComponent = (props) => (
    <BackgroundWrapper>
        <BackgroundOverlay className="flex flex-col">
            {props.children}
        </BackgroundOverlay>
    </BackgroundWrapper>
)

export default Background


