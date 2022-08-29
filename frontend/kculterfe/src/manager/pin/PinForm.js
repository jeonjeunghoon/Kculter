import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import {getKpopList} from '../common/container/GetKpopList';
import {getCultureList} from '../common/container/GetCultureList';
import ShowList from '../common/presentation/ShowList';
import StoreData from '../common/container/StoreData';

function PinForm(props){

    //api로 부터 list 를 받기 위해서 사용하는 변수
    const [kpopList,setKpopList] = useState();
    const [placeList,setPlaceList] = useState();

    const [pinType, setPinType] = useState();
    const [pinKeyNum, setPinKeyNum] = useState();
    const [file, setFile] = useState();

    const [fileDis, setFileDis] = useState(false);

    const [cultureX, setCultureX] = useState(false);
    const [kpopX,setKpopX] = useState(false);
    

    const formValue = {
        pinType : pinType, //1이면 kpop 2면 culture
        pinKeyHash : pinKeyNum //키값 받는 변수
    }

    const sendData = {
        formValue : formValue,
        file : file,
        dataType : 'notplace' //장소추가인지 아닌지 확인하기 위해
    }

    useEffect(() =>{
        const fetchKpopList = async () => {
            const tempKpopList = await getKpopList();
            setKpopList(tempKpopList);
        }
        const fetchPlaceList = async () => {
            const tempPlaceList = await getCultureList();
            setPlaceList(tempPlaceList);
        }
        fetchKpopList();
        fetchPlaceList();
    },[]);

    const changedKpop = (e) => {
        const check = e.target.value;
        if(check !== ""){ //값이 들어가게 되면 진입
            //값이 들어오면 culture는 disabled 되어야 함
            setCultureX(true);
        }else{
            setCultureX(false);
        }
        setPinType(1);
        setPinKeyNum(check);
    }

    const changedCulture = (e) => {
        const check = e.target.value;
        if(check !== ""){ //값이 들어가게 되면 진입
            setKpopX(true);
        }else{
            setKpopX(false);
        }
        setPinType(2);
        setPinKeyNum(check);
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

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">핀 만들 가수 선택</Form.Label> 
                <ShowList disabled={kpopX} changed={changedKpop} list={kpopList} ></ShowList>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label id="label1">핀 만들 문화 체험 선택</Form.Label> 
                <ShowList disabled={cultureX} changed={changedCulture} list={placeList} ></ShowList>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>{props.label} 사진</Form.Label>
                <div id="nameCheck"style={{color : 'red',fontSize:'20px', display: fileDis ? 'none' : 'inline-block', marginLeft:'10px', alignItems:'center'}}>*</div>
                <Form.Control style={{width : '30%'}} type="file" onChange={changedFile}/>
            </Form.Group>

            <StoreData disabled={(cultureX||kpopX)&&fileDis} sendData={sendData}></StoreData>       
        </Form>
    );
}
export default PinForm;