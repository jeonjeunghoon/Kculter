import React from 'react';
import { Link } from 'react-router-dom';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import '../presentation/Signup.css';

function SignUpModal({show, onHide}) {
  return(
  <Container>
    <Modal
      show ={show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id = "modal-body"
    >
     <div className="Signup-header">
     Sign Up
     </div>
      <Modal.Body id="form-div">
      <Form>
      <div className="form-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nick-Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your NickName" />
        <button type="button" id='btn-check'>Check</button>
      </Form.Group>
      </div>

      <div className="form-2">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sex</Form.Label>
        <input type='radio' name='gender' value='female' />여성
  <input type='radio' name='gender' value='male' />남성
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Birth Day</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contury</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      </div>
      
     
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button className="cp-btn" type="submit">
        Complete
      </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </Container>
  )
}

export default SignUpModal;