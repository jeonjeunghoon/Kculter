import React,{useState,Component} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';
import { useLocation } from "react-router";


function PlaceForm(props){

    const location = useLocation();

    const [placeType,setPlaceType] = useState();
    const [keyNum,setKeyNum] = useState();
    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [lat,setLatitude] = useState();
    const [long, setLongitude] = useState();
    const [address, setAddress] = useState();
    const [file,setFile] = useState();

    const list = location.state.list;

    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);
    const [latDis, setLatDis] = useState(false);
    const [longDis,setLongDis] = useState(false);
    const [addDis, setAddDis] = useState(false);
    const [typeDis, setTypeDis] = useState(false);

    const changedName = (e) => {
        const check = e.target.value
        if(check != ""){
            setNameDis(true);
        }else{
            setNameDis(false);
        }
        setName(e.target.value);
    }

    const changedExp = (e) => {
        const check = e.target.value
        if(check != ""){
            setExpDis(true);
        }else{
            setExpDis(false);
        }
        setExp(e.target.value);
    }

    const changedFile = (e) => {
        const check = e.target.value;
        if(check != ""){
            setFileDis(true);
        }else{
            setFileDis(false);
        }
        setFile(e.target.files[0]);
    }

    const changedLng = (e) => {
        const check = e.target.value;
        if(check != ""){
            setLongDis(true);
        }else{
            setLongDis(false);
        }
        setLongitude(e.target.value);
    }

    const changedLat = (e) => {
        const check = e.target.value;
        if(check != ""){
            setLatDis(true);
        }else{
            setLatDis(false);
        }
        setLatitude(e.target.value);
    }

    const changedAdd = (e) => {
        const check = e.target.value;
        if(check != ""){
            setAddDis(true);
        }else{
            setAddDis(false);
        }
        setAddress(e.target.value);
    }



    //반복으로 특정 컴포넌트를 만들기 위해서 사용
    //매새변수로는 list와 같이 특정 배열이나 이런것들을 넣어준다.
    const mapList = list.map((list) => (<option key={list.keyNum} value={list.keyNum}>{list.name}</option>)) 

    const formValue = {
        placeTypeKey : placeType, //kpop = 1 문화체험 = 2
        keyNum : keyNum, // 각타입 키 값
        name : name,
        explain : explain,
        lat : lat,
        long : long,
        address : address
    }
    const sendData = {
        formValue : formValue,
        file : file,
        dataType: 'place' //장소추가인지 아닌지 확인하기 위해
    }

    const showSelected = (event) => {
        const check = event.target.value;
        
        if(props.label.includes("Kpop")){
            //1이면
            setPlaceType(1);
        }else if(props.label.includes("문화 체험")){
            setPlaceType(2);
        }

        if(check != ""){ //뭔가 들어갔으면 진입
            setTypeDis(true);
        }else{
            setTypeDis(false);
        }
        setKeyNum(event.target.value);
    }

    return(
        <Form>
            {/* 위에서 만든 map const를 그대로 출력을 해준다.*/}
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">유형 선택</Form.Label> 
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: typeDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Select onChange={showSelected} style={{width : '30%'}}>
                    <option value="">=== 선택 ===</option>
                    {mapList}
                </Form.Select>  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">{props.label} 이름</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width:'30%'}} onChange={changedName}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 설명</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: expDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} onChange={changedExp}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 위도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedLat}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 경도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedLng}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 영문 주소</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedAdd}/>
            </Form.Group>                                    

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData disabled={(nameDis&&expDis&&fileDis&&latDis&&longDis&&addDis&&typeDis)} sendData={sendData}></StoreData>
      </Form>
    );
}
export default PlaceForm;