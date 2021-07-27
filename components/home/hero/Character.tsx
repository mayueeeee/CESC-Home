import Image, {ImageProps} from 'next/image'
import styled from 'styled-components'
import {FunctionComponent} from 'react'

export const Character = styled.img`
  width: 60vh;
  margin: -12vh -4vh 0 -4vh;
`

const CharacterWarp = styled.div`
  & > div {
    z-index: 2;
    width: 60vh;
  }
`

export const NextImageCharacter: FunctionComponent<ImageProps> = (props: ImageProps) => (
    <CharacterWarp>
        <Image {...props} layout="fill" objectFit="contain"/>
    </CharacterWarp>
)


export default Character