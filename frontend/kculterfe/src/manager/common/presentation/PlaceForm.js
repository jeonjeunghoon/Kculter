import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';
import { useLocation } from "react-router";
import ShowList from './ShowList';

function PlaceForm(props){

    const location = useLocation();


    //백엔드로 데이터를 보내기 위해 만든 변수들
    const [placeNum,setPlaceNum] = useState();
    const [placeType,setPlaceType] = useState();
    const [keyNum,setKeyNum] = useState();
    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [lat,setLatitude] = useState();
    const [lng, setLongitude] = useState();
    const [address, setAddress] = useState();
    const [file,setFile] = useState();

    const list = location.state.list; //kpop 리스트 or culture 리스트
    const places = location.state.places //모든 장소 리스트

    //유효성 검사하기 위해 만든 변수들
    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);
    const [latDis, setLatDis] = useState(false);
    const [longDis,setLongDis] = useState(false);
    const [addDis, setAddDis] = useState(false);
    const [typeDis, setTypeDis] = useState(false);

    //기존 장소 선택했을때 disable 시켜주기 위한 변수들
    const [nameX, setNameX] = useState(false);
    const [expX, setExpX] = useState(false);
    const [fileX, setFileX] = useState(false);
    const [latX, setLatX] = useState(false);
    const [longX,setLongX] = useState(false);
    const [addX, setAddX] = useState(false);

    //이름 값 변경 됐을때
    const changedName = (e) => {
        const check = e.target.value
        if(check !== ""){
            setNameDis(true);
        }else{
            setNameDis(false);
        }
        setName(e.target.value);
    }

    //설명 값 변경됐을때
    const changedExp = (e) => {
        const check = e.target.value
        if(check !== ""){
            setExpDis(true);
        }else{
            setExpDis(false);
        }
        setExp(e.target.value);
    }

    //파일값 변경됐을떄
    const changedFile = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setFileDis(true);
        }else{
            setFileDis(false);
        }
        setFile(e.target.files[0]);
    }

    //경도값 변경 됐을때
    const changedLng = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setLongDis(true);
        }else{
            setLongDis(false);
        }
        setLongitude(e.target.value);
    }

    //위도값 변경됐을때
    const changedLat = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setLatDis(true);
        }else{
            setLatDis(false);
        }
        setLatitude(e.target.value);
    }

    //주소값 변경됐을때
    const changedAdd = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setAddDis(true);
        }else{
            setAddDis(false);
        }
        setAddress(e.target.value);
    }

    //백엔드로 보낼 객체 값
    const formValue = {

        placeNum : placeNum, //장소번호 값, 기존 장소값에서 선택할수 있기 때문에 만듬
        placeType : placeType, //kpop = 1 문화체험 = 2
        culture : keyNum, //기존 있는 문화체험 장소일경우 보내는 culture 키값
        kpop: keyNum, //기존 있는 kpop 장소일 경우 보내는 키값
        lat : lat, //위도
        lng : lng, //경도
        name : name, //장소 이름
        explain : explain, //장소 설명
        address : address // 장소 주소
    }
    //백엔드로 보내기 위한 container component로 보내기 위한 객체
    const sendData = {
        formValue : formValue, //위에서 만든 form 안의 값
        file : file, //파일 값
        dataType: 'place' //장소추가인지 아닌지 확인하기 위해
    }

    //유형 선택값 변경됐을때 진입
    const showSelected = (event) => {// 선택된 유형의 키값을 넣어줌
        const check = event.target.value;

        if(props.label.includes("Kpop")){
            //1이면
            setPlaceType(1);
        }else if(props.label.includes("문화 체험")){
            setPlaceType(2);
        }

        if(check !== ""){ //뭔가 들어갔으면 진입
            setTypeDis(true);
        }else{
            setTypeDis(false);
        }
        setKeyNum(check);
    }

    //기존 장소 선택값 변경됐을때 진입
    const selectedPlace = (event) => {
        const check = event.target.value;
        if(check !== ""){
            //값이 select 됐을때 진입

            //입력 disabled 시켜주기 위해서
            setNameX(true);
            setExpX(true);
            setAddX(true);
            setFileX(true);
            setLatX(true);
            setLongX(true);

            //제출버튼 disabled 풀어주기위해서
            setNameDis(true);
            setExpDis(true);
            setAddDis(true);
            setFileDis(true);
            setLatDis(true);
            setLongDis(true);

            //값을 넣어준다.
            setPlaceNum(check);
        }else{
            //입력 disabled 시켜주기 위해서
            setNameX(false);
            setExpX(false);
            setAddX(false);
            setFileX(false);
            setLatX(false);
            setLongX(false);

            //제출버튼 disabled 풀어주기위해서
            setNameDis(false);
            setExpDis(false);
            setAddDis(false);
            setFileDis(false);
            setLatDis(false);
            setLongDis(false);

            //값을 넣어준다.
            setPlaceNum(check);           
        }
    }

    return(
        <Form>
            {/* 위에서 만든 map const를 그대로 출력을 해준다.*/}
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">유형 선택</Form.Label> 
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: typeDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <ShowList disabled={false} changed={showSelected} list={list}></ShowList>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">기존 장소 선택</Form.Label> 
                <ShowList disabled={false} changed={selectedPlace} list={places}></ShowList>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">{props.label} 이름(구글과 같아야 하고 영문)</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={nameX} style={{width:'30%'}} onChange={changedName}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 설명</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: expDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={expX} style={{width : '30%'}} as="textarea" rows={3} onChange={changedExp}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 위도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={latX} style={{width : '30%'}} onChange={changedLat}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 경도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={longX} style={{width : '30%'}} onChange={changedLng}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 영문 주소</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={addX} style={{width : '30%'}} onChange={changedAdd}/>
            </Form.Group>                                    

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={fileX} style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData disabled={(nameDis&&expDis&&fileDis&&latDis&&longDis&&addDis&&typeDis)} sendData={sendData}></StoreData>
      </Form>
    );
}
export default PlaceForm;