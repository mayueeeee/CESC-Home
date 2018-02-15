import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
export default class extends React.Component {

    // componentDidMount(){
    //     document.title = "CE Smart Camp"
    // }
   
    render () {
      return (
        <div>
            <Head>
              <title>CE Smart Camp</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>CE Smart Camp</h1>
            <h3>Register <Link href="/register"><a>Click!</a></Link></h3>
       
        </div>
      )
    }
  }