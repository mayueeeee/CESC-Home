import React from 'react'
import Link from 'next/link'
import { Button , Container,Row,Col} from 'reactstrap';
import Login from '../../components/register/login'
import RegForm from '../../components/register/form'
export default class Register extends React.Component {

    
   handleClick = () =>{
     console.log('Click!!!!')
   }
    render () {
      return (
        <div className="text-center">          
          <Login/>      
        </div>
      )
    }
  }