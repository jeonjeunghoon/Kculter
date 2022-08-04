import React,{useState,Component} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';
import { useLocation } from "react-router";


function PlaceForm(props){

    const location = useLocation();

    const [keyNum,setKeyNum] = useState();
    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [latitude,setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [address, setAddress] = useState();
    const [file,setFile] = useState();
    const list = location.state.list;

    //반복으로 특정 컴포넌트를 만들기 위해서 사용
    //매새변수로는 list와 같이 특정 배열이나 이런것들을 넣어준다.
    const mapList = list.map((list) => (<option key={list.keyNum} value={list.keyNum}>{list.name}</option>)) 

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

    const showSelected = (event) => {
        console.log("키값 : "+event.target.value);
        setKeyNum(event.target.value);
    }

    return(
        <Form>
            {/* 위에서 만든 map const를 그대로 출력을 해준다.*/}
            <Form.Select onChange={showSelected} style={{width : '30%'}}>
                {mapList}
            </Form.Select>      
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