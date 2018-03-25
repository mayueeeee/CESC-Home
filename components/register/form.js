import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled, { injectGlobal } from 'styled-components';
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardBody
} from 'reactstrap';
import flatpickr from "flatpickr";
import { Thai } from 'flatpickr/dist/l10n/th';
import moment from 'moment';
import axios from 'axios'
import RegForm from '../../components/register/form'
import SectionHeader from '../../components/home/SectionHeader'
import setting from '../../config.json'
import province from '../../data/provinces.json'

const Logo = styled.img `
  z-index = 3;
  width:80%; 
  margin-top: 10vh;

  /*For Desktop*/
  @media (min-width: 1025px){
    max-width: 25%;
    margin-top: 5vh;

  }
`
const FormHeader = styled.h3 `
  // font-family: "superspace_regularregular";  
  font-family: 'Mitr', sans-serif;
  font-weight:400;
  margin-top: 20px;
`

const Label = styled.label `
  font-family: 'Mitr', sans-serif;
  font-size: 1.25rem;
  font-weight:300;
`

const RegisButton = styled(Button)`
    font-family: 'Mitr', sans-serif;
`
export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.form)
    this.state = {
      fav: true,
      data: this.props.form || {}
    }
    
  }
  submitCamp = () =>{
    var data = this.state.data
    data['access_token'] = localStorage.access_token
    axios
      .post(setting.prod_api_root + '/web/register/submit', data)
      .then(res=>{
        //Redirect to dashboard for print
        Router.push('/dashboard')       
      })
      .catch(err=>{
        console.log(err)        
      });

  }
  handleChange = (id, e) => {
    var tmp = this.state.data
    tmp[id] = e.target.value
    // console.log(tmp)
    this.setState({ data: tmp })
  }

  componentDidMount(){
    // Init flatpickr
    flatpickr(`#birth_date`, {
      locale: Thai,
      defaultDate: this.state.data.birth_date || moment("2000-01-01").toDate(),
      dateFormat: 'j F Y',
      onChange: (date) => {
        const dateStr = moment(date[0]).format('YYYY-MM-DD')
        var tmp = this.state.data
        tmp['birth_date'] = dateStr
        // console.log(tmp)
        this.setState({ data: tmp })
      }
    })
    
  }
  componentWillReceiveProps(nextProps){    
    if(this.state.data != nextProps.form){      
      this.setState({data: nextProps.form})      
    }
   

  }
  render() {    
    var form = this.state.data || {}
    return (
      <Card>
        <CardBody>
          <Row className="text-left">
            <Col>
              <FormHeader>ข้อมูลส่วนตัว</FormHeader>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ชื่อ</Label>
                <Input type="text" onChange={(e) => this.handleChange('name', e)} value={form.name||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>นามสกุล</Label>
                <Input type="text" onChange={(e) => this.handleChange('surname', e)} value={form.surname||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ชื่อเล่น</Label>
                <Input type="text" onChange={(e) => this.handleChange('nickname', e)} value={form.nickname||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={3}>
              <FormGroup>
                <Label htmlFor="company">เพศ</Label>
                <Input type="select" onChange={(e) => this.handleChange('gender', e)} value={form.nickname||""}>
                  <option value={''}>กรุณาเลือก</option>
                  <option value="0">หญิง</option>
                  <option value="1">ชาย</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={3}>
              <FormGroup>
                <Label>วันเดือนปีเกิด</Label>
                <Input id="birth_date" type="text"/>
               
              </FormGroup>
            </Col>
            <Col xs={12} md={2}>
              <FormGroup>
                <Label>อายุ</Label>
                <Input type="text" maxLength="2" onChange={(e) => this.handleChange('age', e)} value={form.age||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ศาสนา</Label>
                <Input type="text" onChange={(e) => this.handleChange('religion', e)} value={form.religion||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>เบอร์โทรศัพท์</Label>
                <Input type="text" maxLength="10" onChange={(e) => this.handleChange('phone_number', e)} value={form.phone_number||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>อีเมล</Label>
                <Input type="text" onChange={(e) => this.handleChange('email', e)} value={form.email||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>Line ID</Label>
                <Input type="text" onChange={(e) => this.handleChange('line_id', e)} value={form.line_id||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>โรคประจำตัว</Label>
                <Input type="text" onChange={(e) => this.handleChange('person_disease', e)} value={form.person_disease||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ยาที่แพ้</Label>
                <Input type="text" onChange={(e) => this.handleChange('drug_allergy', e)} value={form.drug_allergy||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>อาหารที่แพ้</Label>
                <Input type="text" onChange={(e) => this.handleChange('food_allergy', e)} value={form.food_allergy||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label>ความสามารถพิเศษ</Label>
                <Input type="text" onChange={(e) => this.handleChange('special_talent', e)} value={form.special_talent||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>เลขประจำตัวประชาชน</Label>
                <Input type="text" maxLength="13" onChange={(e) => this.handleChange('national_id', e)} value={form.national_id||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={2}>
              <FormGroup>
                <Label>ไซส์เสื้อ</Label>
                <Input type="select" onChange={(e) => this.handleChange('shirt_size', e)} value={form.shirt_size||""}>
                  <option value={''}>กรุณาเลือก</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>

                </Input>
              </FormGroup>
            </Col>

          </Row>
          <Row className="text-left">
            <Col>
              <FormHeader>ที่อยู่</FormHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <FormGroup>
                <Label>บ้านเลขที่</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_number', e)} value={form.address_number||""}/>
              </FormGroup>
            </Col>
            <Col xs={6} md={2}>
              <FormGroup>
                <Label>หมู่</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_moo', e)} value={form.address_moo||""}/>
              </FormGroup>
            </Col>
            <Col xs={6} md={3}>
              <FormGroup>
                <Label>ซอย</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_alley', e)} value={form.address_alley||""}/>
              </FormGroup>
            </Col>
            <Col xs={6} md={4}>
              <FormGroup>
                <Label>หมู่บ้าน</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_village', e)} value={form.address_village||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ถนน</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_road', e)} value={form.address_road||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ตำบล</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_subdistrict', e)} value={form.address_subdistrict||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>อำเภอ</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_district', e)} value={form.address_district||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>จังหวัด</Label>                
                <Input type="select" onChange={(e) => this.handleChange('address_province', e)} value={form.address_province || ''}>
                  <option value={null}>กรุณาเลือก</option>
                  {province
                    .th
                    .changwats
                    .map((element) => {
                      return (
                        <option key={element.pid} value={element.name}>{element.name}</option>
                      )
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>รหัสไปรษณีย์</Label>
                <Input type="text" onChange={(e) => this.handleChange('address_pcode', e)} value={form.address_pcode||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row className="text-left">
            <Col>
              <FormHeader>การศึกษา</FormHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5}>
              <FormGroup>
                <Label>โรงเรียน</Label>
                <Input type="text" onChange={(e) => this.handleChange('edu_school', e)} value={form.edu_school||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>จังหวัด</Label>               
                <Input type="select" onChange={(e) => this.handleChange('edu_school_province', e)} value={form.edu_school_province || ''}>
                  <option value={null}>กรุณาเลือก</option>
                  {province
                    .th
                    .changwats
                    .map((element) => {
                      return (
                        <option key={element.pid} value={element.name}>{element.name}</option>
                      )
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col xs={12} md={3}>
              <FormGroup>
                <Label>ระดับชั้น(ปีการศึกษา 2561)</Label>
                <Input type="text" onChange={(e) => this.handleChange('edu_class', e)} value={form.edu_class||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>

            <Col xs={12} md={4}>
              <FormGroup>
                <Label>แผนการเรียน</Label>
                <Input type="text" onChange={(e) => this.handleChange('study_plan', e)} value={form.study_plan||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={4}>
              <FormGroup>
                <Label>เกรดเฉลี่ยสะสมปัจจุบัน(GPAX)
                </Label>
                <Input type="text" onChange={(e) => this.handleChange('edu_gpax', e)} value={form.edu_gpax||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="text-left">
            <Col>
              <FormHeader>ข้อมูลผู้ปกครอง(ที่สามารถติดต่อได้ในกรณีฉุกเฉิน)</FormHeader>
            </Col>
          </Row>
          <Row>

            <Col xs={12} md={4}>
              <FormGroup>
                <Label>ชื่อ-นามสกุล</Label>
                <Input type="text" onChange={(e) => this.handleChange('parent_name', e)} value={form.parent_name||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={3}>
              <FormGroup>
                <Label>มีความเกี่ยวข้องเป็น
                </Label>
                <Input type="text" onChange={(e) => this.handleChange('parent_relation', e)} value={form.parent_relation||""}/>
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>เบอร์โทรศัพท์มือถือ
                </Label>
                <Input type="text" maxLength="10" onChange={(e) => this.handleChange('parent_tel', e)} value={form.parent_tel||""}/>
              </FormGroup>
            </Col>
          </Row>
          <Row className="text-left">
            <Col>
              <FormHeader>การเข้าร่วมค่ายอื่นๆ</FormHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label>ชื่อค่าย</Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp1', e)} value={form.previous_camp1||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={6}>
              <FormGroup>
                <Label>จัดโดย
                </Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp1_university', e)} value={form.previous_camp1_university||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label>ชื่อค่าย</Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp2', e)} value={form.previous_camp2||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={6}>
              <FormGroup>
                <Label>จัดโดย
                </Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp2_university', e)} value={form.previous_camp2_university||""}/>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label>ชื่อค่าย</Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp3', e)} value={form.previous_camp3||""}/>
              </FormGroup>
            </Col>

            <Col xs={12} md={6}>
              <FormGroup>
                <Label>จัดโดย
                </Label>
                <Input type="text" onChange={(e) => this.handleChange('previous_camp3_university', e)} value={form.previous_camp3_university||""}/>
              </FormGroup>
            </Col>

          </Row>
          {/* <Row className="text-left">
            <Col>
              <FormHeader>รู้จักค่ายได้ไงอะ</FormHeader>
            </Col>
          </Row> */}
          <Row>
            <Col xs={12}>
              <RegisButton color="primary" size="lg" block onClick={()=>this.submitCamp()}>สมัครค่าย</RegisButton>
            </Col>
          </Row>

        </CardBody>
      </Card>

    )
  }
}


