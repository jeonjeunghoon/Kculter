import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';
import Dropdown from 'react-bootstrap/Dropdown';


function PlaceForm(props){

    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [address, setAddress] = useState();
    const [file,setFile] = useState();

    const formValue = {
        name : name,
        explain : explain,
        latitude : latitude,
        longitude : longitude,
        address : address
    }
    const sendData = {
        formValue : formValue,
        file : file
    }

    return(
        <Form>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">{props.type}</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>            
            <hr/>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">{props.label} 이름</Form.Label>
                <Form.Control style={{width:'30%'}} onChange={e => setName(e.target.value)}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 설명</Form.Label>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} onChange={e => setExp(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 위도</Form.Label>
                <Form.Control style={{width : '30%'}} onChange={e => setLatitude(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 경도</Form.Label>
                <Form.Control style={{width : '30%'}} onChange={e => setLongitude(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 영문 주소</Form.Label>
                <Form.Control style={{width : '30%'}} onChange={e => setAddress(e.target.value)}/>
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
export default PlaceForm;