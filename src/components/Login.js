import React, {Component} from 'react'
import {FormControl, Form, FormGroup, Col} from 'react-bootstrap';

class Login extends Component {

  render() {
    return (
      <div id='holder'>
        <h1>Login</h1>
        <div>
          <Form horizontal/>
          <FormGroup controlId="formHorizontalEmail">

            <Col>
              <FormControl type="email" placeholder="Email"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">

            <Col>
              <FormControl type="password" placeholder="Password"/>
            </Col>
          </FormGroup>
        </div>
        <div id='sticky-footer'></div>

      </div>
    )
  }
}

export default Login;