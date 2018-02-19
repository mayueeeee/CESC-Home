import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';
import {
  Link as ScrollLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
import NavBar from '../components/home/NavBar'
import Gallery from '../components/home/Gallery'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
const Index = styled.div `
  
`
export default class extends React.Component {

  render() {

    return (
      <Index>
        <Intro/>
        <NavBar/>
        <Element name="about">
          <About/>
        </Element>
        <Gallery/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>

        <Footer/>

      </Index>
    )
  }
}