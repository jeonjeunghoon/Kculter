import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ManageKpop(){
    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color : 'white'}}>Kpop Star 이름</Form.Label>
                <Form.Control style={{width:'30%'}} type="email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color : 'white'}}>Kpop Star 설명</Form.Label>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{color : 'white'}}>Kpop Star 사진</Form.Label>
                <Form.Control style={{width : '30%'}} type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
      </Form>
    );
}
export default ManageKpop;