import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';
import NavBar from '../components/home/NavBar'
import Gallery from '../components/home/Gallery'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

export default class extends React.Component {
   
   
    render () {
     
      return (
        <div>
          <NavBar/>
          
           
           
            <h3>Register <Link href="/register"><a>Click!</a></Link></h3>
            <Gallery/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Footer/>
       
        </div>
      )
    }
  }