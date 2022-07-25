import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function InfoForm(){

    const url = window.location.href;
    const [name,setName] = useState();
    const [description,setDec] = useState();
    const [file,setFileName] = useState();
    
    useEffect(() => {
        if(url.includes('kpop')){
            setName('Kpop Star');
            setDec('Kpop Star');
            setFileName('Kpop Star');
        }else if(url.includes('culture')){
            setName('문화 체험');
            setDec('문화 체험');
            setFileName('문화 체험');
        }
    });


    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color : 'white'}} id="label1">{name} 이름</Form.Label>
                <Form.Control style={{width:'30%'}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color : 'white'}}>{description} 설명</Form.Label>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{color : 'white'}}>{file} 사진</Form.Label>
                <Form.Control style={{width : '30%'}} type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
      </Form>
    );
}
export default InfoForm;