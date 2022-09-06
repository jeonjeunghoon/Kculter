import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../common/container/StoreData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getKpopList } from '../common/container/GetKpopList';
import ShowList from '../common/presentation/ShowList';

function ConcertForm(props){
    
    //kpop 스타 리스트를 받아오기 위해서 사용함
    const [kpopList, setKpopList] = useState();

    useEffect(() => {
        const fetchData = async() =>{
            //await하는것을 받아서 await 시켜준다.
            const check = await getKpopList();
            setKpopList(check);
        }
        fetchData();
    },[]); //뒤에 빈 배열을 붙여줘서 한번만 실행되게 해준다.
    // w3schools.com/react/react_useeffect.asp  참조

    //백엔드로 값을 보내기 위해서 사용하는 변수
    const [starName,setStar] = useState("");
    const [name,setName] = useState("");
    const [explain,setExp] = useState("");
    const [file,setFile] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [starKeyNum,setStarKey] = useState("");
    const [placeName,setPlaceName] = useState("");
    const [buySite,setBuySite] = useState("");

    //유효성 검사하기 위해서 사용하는 변수
    const [starDis,setStarDis] = useState(false);
    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);
    const [sdDis, setSdDis] = useState(false);
    const [edDis, setEdDis] = useState(false);
    const [latDis, setLatDis] = useState(false);
    const [lngDis, setLngDis] = useState(false);
    const [placeNameDis,setPlaceNameDis] = useState(false);
    const [buySiteDis,setBuySiteDis] = useState(false);

    //기존 가수 선택했을시에 disabled 시켜주기 위해서 사용한 변수
    const [nameX,setNameX] = useState(false);

    //백엔드로 보낼 객체
    const formValue = {
        concertName : name,
        explain : explain,
        startDate : startDate,
        endDate : endDate,
        starName : starName,
        lat : lat,
        lng : lng,
        starHash : starKeyNum,
        placeName : placeName,
        buySite : buySite
    }

    //container component로 보낼 객체
    const sendData = {
        formValue : formValue,
        file : file,
        dataType : 'notplace' //장소추가인지 아닌지 확인하기 위해
    }
    const changedPlaceName = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setPlaceNameDis(true);
        }else{
            setPlaceNameDis(false);
        }
        setPlaceName(check);        
    }
    //위도 변경됐을떄
    const changedLat = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setLatDis(true);
        }else{
            setLatDis(false);
        }
        setLat(check);
    }

    //경도 변경됐을때
    const changedLng = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setLngDis(true);
        }else{
            setLngDis(false);
        }
        setLng(check);
    }

    //연예인 이름 변경됐을때
    const changedStar = (e) => {
        const check = e.target.value
        if(check !== ""){
            setStarDis(true);
        }else{
            setStarDis(false);
        }
        setStar(e.target.value);
    }

    //콘서트 이름 변경됐을때
    const changedName = (e) => {
        const check = e.target.value
        if(check !== ""){
            setNameDis(true);
        }else{
            setNameDis(false);
        }
        setName(e.target.value);
    }

    //콘서트 설명 변경됐을때
    const changedExp = (e) => {
        const check = e.target.value
        if(check !== ""){
            setExpDis(true);
        }else{
            setExpDis(false);
        }
        setExp(e.target.value);
    }

    //콘서트 시작 날짜 변경됐을때
    const changedSd = (date) => {
        let check = date
        if(endDate>startDate){ 
            alert("콘서트 시작 날짜를 다시 확인해주세요.");
            setStartDate();
            check="";
        }else{
            setStartDate(date); 
        }

        if(check !== ""){
            setSdDis(true);
        }else{
            setSdDis(false);
        }
    }
    //콘서트 끝나는 날짜 변경됐을때
    const changedEd = (date) => {
        let check = date;
        if(date<startDate){
            alert("콘서트 끝나는 날짜를 다시 확인해주세요.");
            setEndDate("");
            check="";
        }else{
           setEndDate(date); 
        }

        if(check !== ""){
            setEdDis(true);
        }else{
            setEdDis(false);
        }
    }

    //콘서트 예매링크 등록
    const changedBuySite = (e) => {
        const check = e.target.value
        if(check !== ""){
            setBuySiteDis(true);
        }else{
            setBuySiteDis(false);
        }
        setBuySite(e.target.value);
    }

    //콘서트 사진 변경됐을때
    const changedFile = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setFileDis(true);
        }else{
            setFileDis(false);
        }
        setFile(e.target.files[0]);
    }

    //기존 가수에서 선택했을때
    const changedKpop = (e) => {
        const check = e.target.value;
        alert(check);
        if(check !== ""){ //값이 바뀌었을때 들어가는곳
            setNameDis(true);
            setStarDis(true);
            setNameX(true);
        }else{ //값이 바뀌지 않았을때 들어가는곳
            setNameDis(false);
            setStarDis(false);
            setNameX(false);
        }
        setStarKey(check);
    }

    return(
        <Form>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">기존 Kpop 가수 선택</Form.Label> 
                <ShowList disabled={false} changed={changedKpop} list={kpopList} ></ShowList>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">가수(그룹)명</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: starDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control disabled={nameX} style={{width:'30%'}} onChange={changedStar}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
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
                <Form.Label>{props.label} 장소 이름(구글과 같아야하고 영문)</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: placeNameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedPlaceName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 위도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: latDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedLat}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 경도</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: lngDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedLng}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>{props.label} 시작 일정</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: sdDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <DatePicker selected={startDate} onChange={changedSd} />
                <Form.Label>{props.label} 끝나는 일정</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: edDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <DatePicker selected={endDate} onChange={changedEd} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 예메 링크</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: buySiteDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} onChange={changedBuySite}/>
            </Form.Group>
            <br/>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData disabled={(starDis&&nameDis&&expDis&&sdDis&&edDis&&fileDis&&latDis&&lngDis&&placeNameDis)} sendData={sendData}></StoreData>
      </Form>
    );
}
export default ConcertForm;