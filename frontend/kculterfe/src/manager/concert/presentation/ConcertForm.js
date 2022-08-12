import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../../common/container/StoreData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getKpopList } from '../container/GetKpopList';

function ConcertForm(props){
    
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

    //얘는 데이터가 없어도 렌더링을 하기 때문에 변수 &&를 붙여야지만 렌더링이 된다.
    const kpopListMap = kpopList && kpopList.map((kpopList) => (<option key={kpopList.keyNum} value={kpopList.keyNum}>{kpopList.name}</option>))

    const [starName,setStar] = useState("");
    const [name,setName] = useState("");
    const [explain,setExp] = useState("");
    const [file,setFile] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    const [starDis,setStarDis] = useState(false);
    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);
    const [sdDis, setSdDis] = useState(false);
    const [edDis, setEdDis] = useState(false);
    const [latDis, setLatDis] = useState(false);
    const [lngDis, setLngDis] = useState(false);



    const formValue = {
        name : name,
        explain : explain,
        startDate : startDate,
        endDate : endDate,
        startName : starName,
        lat : lat,
        lng : lng
    }

    const sendData = {
        formValue : formValue,
        file : file,
        dataType : 'notplace' //장소추가인지 아닌지 확인하기 위해
    }
 
    const changedLat = (e) => {
        const check = e.target.value;
        if(check != ""){
            setLatDis(true);
        }else{
            setLatDis(false);
        }
        setLat(check);
    }

    const changedLng = (e) => {
        const check = e.target.value;
        if(check != ""){
            setLngDis(true);
        }else{
            setLngDis(false);
        }
        setLng(check);
    }

    const changedStar = (e) => {
        const check = e.target.value
        if(check != ""){
            setStarDis(true);
        }else{
            setStarDis(false);
        }
        setStar(e.target.value);
    }

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

    const changedSd = (date) => {
        let check = date
        if(date.getDate() < new Date().getDate()){
            alert("이미 지난 콘서트는 등록할수 없습니다.");
            setStartDate();
            check="";
        }else if(endDate>startDate){
            alert("콘서트 시작 날짜를 다시 확인해주세요.");
            setStartDate();
            check="";
        }else{
            setStartDate(date); 
        }

        if(check != ""){
            setSdDis(true);
        }else{
            setSdDis(false);
        }
    }
    const changedEd = (date) => {
        let check = date;
        if(date.getDate() < new Date().getDate()){
            alert("이미 지난 콘서트는 등록할수 없습니다.");
            setEndDate();
            check="";
        }else if(date<startDate){
            alert("콘서트 끝나는 날짜를 다시 확인해주세요.");
            setEndDate("");
            check="";
        }else{
           setEndDate(date); 
        }

        if(check != ""){
            setEdDis(true);
        }else{
            setEdDis(false);
        }
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

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">유형 선택</Form.Label> 
                <Form.Select style={{width : '30%'}}>
                    <option value="">=== 선택 ===</option>
                    {kpopListMap}
                </Form.Select>  
            </Form.Group>            
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">가수(그룹)명</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: starDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width:'30%'}} onChange={changedStar}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
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
            <br/>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData disabled={(starDis&&nameDis&&expDis&&sdDis&&edDis&&fileDis&&latDis&&lngDis)} sendData={sendData}></StoreData>
      </Form>
    );
}
export default ConcertForm;