import React from 'react'
import {Alert} from 'reactstrap'
export default class Register extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {
        errorCode: this.props.errorCode||''
    }

  }
  
  render() {
    return (
      <Alert color={this.props.color}>
        <i className="fas fa-exclamation-circle"></i>{' '}
        งุ้ย มีปัญหาเกิดขึ้น กรุณาลองเข้าสู่ระบบใหม่หรือติดต่อพี่ๆตามช่องทางต่างๆ ({this.props.errorCode})
      </Alert>
    )
  }
}