import React, {FunctionComponent} from 'react'
import Background from './hero/Background'
import Logo from './hero/Logo'
import Character from './hero/Character'
import Footer from './hero/Footer'
import ScrollButton from './hero/ScrollButton'
import RegisterButton from './hero/Button'

const Hero: FunctionComponent = () => (
    <Background>
        <div className="mx-auto">
            <Logo src="/assets/images/hero/logo.svg" className=""/>
        </div>
        <div className="flex mx-auto">
            <Character src="/assets/images/hero/robot.png"/>
            <Character src="/assets/images/hero/iot.png"/>
        </div>
        <div className="mx-auto">
            <RegisterButton src="/assets/images/buttons/announce.svg"/>
        </div>
        <div className="mx-auto">
            <ScrollButton/>
        </div>
        <Footer/>
    </Background>
)

export default Hero