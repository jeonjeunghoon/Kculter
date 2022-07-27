import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';


function InfoForm(props){

    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [file,setFile] = useState();

    const sendData = {
        name : name,
        explain : explain,
        fileName : file
    }

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{color : 'white'}} id="label1">{props.label} 이름</Form.Label>
                <Form.Control style={{width:'30%'}} onChange={e => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label style={{color : 'white'}}>{props.label} 설명</Form.Label>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} onChange={e => setExp(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label style={{color : 'white'}}>{props.label} 사진</Form.Label>
                <Form.Control style={{width : '30%'}} type="file" onChange={e => setFile(e.target.value)}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData variant="primary" type="submit" sendData={sendData}>
                Submit
            </StoreData> 
      </Form>
    );
}
export default InfoForm;