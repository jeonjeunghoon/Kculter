import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function StoreData(props){

    const check = (event) => {
        event.preventDefault();

        const url = window.location.href;
        console.log(url);
        if(url.includes('kpop')){
            console.log('kpop 저장할거얌');
            axios.post('/manager/kpopinfo',props.sendData)
            .then(function(res){
                console.log(res);
                alert("서버 저장 완료!");
                window.location.reload();
            })
            .catch(function(error){
                console.log(error);
            })
        }else if(url.includes('culture')){
            console.log('culture 저장할거얌');
            axios.post('/manager/cultureinfo',props.sendData)
            .then(function(res){
                console.log(res);
                alert("서버 저장 완료!");
                window.location.reload();
            })
            .catch(function(error){
                console.log(error);
            })
        }
        console.log(props.sendData);
    }
    return(
        <Button variant="primary" type="submit" onClick={check}>제출</Button>
    );
}
export default StoreData;