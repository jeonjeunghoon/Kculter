import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';


function InfoForm(props){

    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [file,setFile] = useState();

    const formValue = {
        name : name,
        explain : explain
    }
    const sendData = {
        formValue : formValue,
        file : file
    }

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">{props.label} 이름</Form.Label>
                <Form.Control style={{width:'30%'}} onChange={e => setName(e.target.value)}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 설명</Form.Label>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} onChange={e => setExp(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <Form.Control style={{width : '30%'}} type="file" onChange={e => setFile(e.target.files[0])}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData variant="primary" type="submit" sendData={sendData}>
                Submit
            </StoreData> 
      </Form>
    );
}
export default InfoForm;