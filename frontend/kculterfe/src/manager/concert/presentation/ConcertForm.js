import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../../common/container/StoreData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ConcertForm(props){

    const [name,setName] = useState("");
    const [explain,setExp] = useState("");
    const [file,setFile] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);
    const [sdDis, setSdDis] = useState(false);
    const [edDis, setEdDis] = useState(false);


    const formValue = {
        name : name,
        explain : explain,
        startDate : startDate,
        endDate : endDate
    }

    const sendData = {
        formValue : formValue,
        file : file,
        dataType : 'notplace' //장소추가인지 아닌지 확인하기 위해
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
                <Form.Label id="label1">{props.label} 이름</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: nameDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width:'30%'}} onChange={changedName}/> {/*onChage됐을때 useState를 통해서 변수 값을 변경함*/}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDec">
                <Form.Label>{props.label} 설명</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: expDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} as="textarea" rows={3} onChange={changedExp}/>
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
            <StoreData disabled={(nameDis&&expDis&&sdDis&&edDis&&fileDis)} sendData={sendData}></StoreData>
      </Form>
    );
}
export default ConcertForm;