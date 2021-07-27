import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
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
import Timeline from '../components/home/Timeline'
import Testimonial from '../components/home/Testimonial'
import FAQ from '../components/home/FAQ'
import Sponsor from '../components/home/Sponsor'
import Layout from '../components/Layout'

const Index = styled.div`

`
export default class extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>CE Smart Camp 11</title>
                    <meta property="og:title" content="CE Smart Camp 11 @ KMITL"/>
                    <meta property="og:url" content="https://cesmartcamp.com"/>
                    <meta property="og:description"
                          content="CE SMART CAMP 11เป็นค่ายอบรมเชิงปฏิบัติการเพื่อเสริมสร้างความรู้ ให้แก่น้องๆนักเรียนในระดับชั้นมัธยมศึกษาตอนปลาย"/>
                    <meta property="og:type" content="company"/>
                    <meta property="og:image" content="https://cesc.kmi.tl/static/images/banner.png"/>
                    {/*<link href="https://fonts.googleapis.com/css?family=Mitr:300,400" rel="stylesheet"/>*/}
                    {/*<link rel="stylesheet" href="/static/fonts/fonts.css"/>*/}
                    {/*<link rel="stylesheet" href="/static/css/styles.css"/>*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.2.1/css/bootstrap.min.css"*/}
                    {/*      integrity="sha256-azvvU9xKluwHFJ0Cpgtf0CYzK7zgtOznnzxV4924X1w=" crossOrigin="anonymous"/>*/}
                    <link rel="stylesheet" type="text/css" charSet="UTF-8"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                    <link rel="stylesheet" type="text/css"
                          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                    {/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"*/}
                    {/*      integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S"*/}
                    {/*      crossOrigin="anonymous"/>*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>*/}
                    {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.3.2/dist/flatpickr.css"/>*/}
                    {/*<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.3.2/dist/ie.css"/>*/}
                    {/*<link rel="stylesheet"*/}
                    {/*      href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"/>*/}


                </Head>


                <Index>
                    <Intro/>
                    <NavBar/>
                    <Element name="about">
                        <About/>
                    </Element>
                    <Element name="timeline">
                        <Timeline/>
                    </Element>
                    <Element name="gallery">
                        <Gallery/>
                    </Element>
                    <Element name="testimonial">
                        <Testimonial/>
                    </Element>
                    <Element name="faq">
                        <FAQ/>
                    </Element>
                    {/* <Element name="sponsor">
                      <Sponsor/>
                    </Element> */}
                    <Element name="contact">
                        <Contact/>
                    </Element>
                    <Footer/>
                </Index>


            </>


        )
    }
}