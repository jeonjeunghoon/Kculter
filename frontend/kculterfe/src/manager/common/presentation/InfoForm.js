import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import StoreData from '../container/StoreData';


function InfoForm(props){

    const [name,setName] = useState();
    const [explain,setExp] = useState();
    const [file,setFile] = useState();

    const [nameDis, setNameDis] = useState(false);
    const [expDis, setExpDis] = useState(false);
    const [fileDis, setFileDis] = useState(false);

    const changedName = (e) => {
        const check = e.target.value
        if(check !== ""){
            setNameDis(true);
        }else{
            setNameDis(false);
        }
        setName(e.target.value);
    }

    const changedExp = (e) => {
        const check = e.target.value
        if(check !== ""){
            setExpDis(true);
        }else{
            setExpDis(false);
        }
        setExp(e.target.value);
    }

    const changedFile = (e) => {
        const check = e.target.value;
        if(check !== ""){
            setFileDis(true);
        }else{
            setFileDis(false);
        }
        setFile(e.target.files[0]);
    }

    const formValue = {
        name : name,
        explain : explain
    }
    const sendData = {
        formValue : formValue,
        file : file,
        dataType : 'notplace' //장소추가인지 아닌지 확인하기 위해
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

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>
            {/*API 호출을 담당할 Container Component 호출*/}
            <StoreData disabled={(nameDis&&expDis&&fileDis)} sendData={sendData}></StoreData> 
      </Form>
    );
}
export default InfoForm;