import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button } from 'reactstrap';
export default class Register extends React.Component {

    
   handleClick = () =>{
     console.log('Click!!!!')
   }
    render () {
      return (
        <div>
            <Head>
              <title>Register</title> 
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css" integrity="sha256-jBpMJWNNWEGSSqsYSKzJ3Lw9VnIYMFPItx/yE5tl18M=" crossorigin="anonymous" />             
            </Head>
            <h1>Register</h1>
            <Button color="danger" onClick = {this.handleClick}>Danger!</Button>
            
       
        </div>
      )
    }
  }