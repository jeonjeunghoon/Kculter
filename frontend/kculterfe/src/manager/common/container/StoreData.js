import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function StoreData(props){

    const check = (event) => {
        event.preventDefault();

        const url = window.location.href;
        console.log(url);

        //form data를 보내기 위해서 사용하는 클래스이다.
        //FormData는 키와 value값으로 값을 넣어서 controller로 보내는 역할을 한다.
        const fmd = new FormData();
        //받은 객체를 일단 json 형식으로 바꿔주어야 한다.
        //일반 javascript object 와 json은 형식이 비슷해 헷갈릴수 있다
        //json은 서버와 연동하기 위해서 있는것이고 object는 javascript 내에서만 사용할수가 있다.
        //따라서 json 방시으로 데이터를 받는 서버에게 json 형식으로 보내주기 위해선 object를 json으로 변환해주어야 한다. 
        const json = JSON.stringify(props.sendData.formValue);
        //위에서 만든 json은 json 형식으로 된 문자열이지 json 그자체는 아니다 따라서 json 그 자체로 변환해주기 위해선 
        //타입을 지정한 blob를 이용해서 json 파일을 만들어야 한다.
        //blob은 이미지 사운드 동영상 등 대용량 데이터를 담을수 있는것이다.
        //따라서 우리는 blob을 이용해서 json을 json 파일로 담아서 보낼것이다. 
        const blob = new Blob([json],{
            type : 'application/json'
        })
        
        fmd.append('formValue',blob);
        fmd.append('file',props.sendData.file)

        if(props.sendData.dataType == "place"){
            //장소 추가라면 진입
            console.log("장소 추가 간다잇");
            
            axios.post('/manager/place',fmd,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then(function(res){
                console.log(res);
                alert("서버 저장 완료!");
                window.location.href="/manager";
            })
            .catch(function(error){
                console.log(error);
            })            

        }else if(props.sendData.dataType == "notplace"){
            //장소 추가 아니라면 진입
            if(url.includes('kpop')){
                console.log("셀럽 추가");
                axios.post('/manager/kpopinfo',fmd,{
                    headers:{
                        'Content-Type' : 'multipart/form-data'
                    }
                })
                .then(function(res){
                    console.log(res);
                    alert("서버 저장 완료!");
                    window.location.reload();
                })
                .catch(function(error){
                    console.log(error);
                })
    
            }else if(url.includes('culture')){
                console.log('체험 추가 간다잇');
                axios.post('/manager/cultureinfo',fmd,{
                    headers:{
                        'Content-Type' : 'multipart/form-data'
                    }
                })
                .then(function(res){
                    console.log(res);
                    alert("서버 저장 완료!");
                    window.location.reload();
                })
                .catch(function(error){
                    console.log(error);
                })
            }
        }

        console.log(props.sendData);
    }
    return(
        <button type="submit" onClick={check}>제출</button>
    );
}
export default StoreData;