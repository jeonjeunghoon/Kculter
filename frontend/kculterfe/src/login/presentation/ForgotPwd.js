import React from 'react';
import { Link } from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';
import '../presentation/Forgotpwd.css';

function ForgotPwdModal({show, onHide}) {
  return (
    <Modal
    show={show}
    onHide={onHide}
    size ="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
     <div className="forgot-header">
     Find your password
     </div>
    <Modal.Body id="forgot-body">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="forgot-email">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        Please enter the email 
        </Form.Text>
        <div className="for-text">
        you used when signed up
        </div>
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  );
}

export default ForgotPwdModal;