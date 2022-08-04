import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function GetListData(props){

    let navigate = useNavigate();

    const getList = () => {
        if(props.url.includes('kpop')){
            axios.get('/celebrities')
            .then(function(res){
                const list = res.data;
                if(list == null){
                    alert("입력된 Kpop 스타가 없습니다. \n Kpop 스타부터 입력하세요");
                    window.location.href="/manager/kpop"
                }else{
                    navigate(props.url,{ //경로는 props.url로 보내고
                        state : { //데이터로는 
                            list : list //list 값 보냄
                        }
                    });
                }
            })
            .catch(function(error){
                console.log(error);
                alert("서버 통신 실패");
            })
        }else if(props.url.includes('culture')){
            axios.get('/cultures')
            .then(function(res){
                const list = res.data;
                if(list == null){
                    alert("입력된 문화 체험이 없습니다. \n 문화 체험부터 입력하세요");
                    window.location.href="/manager/culture"
                }else{
                    navigate(props.url,{ //경로는 props.url로 보내고
                        state : { //데이터로는 
                            list : list //list값을 보냄
                        }
                    });
                }
            })
            .catch(function(error){
                console.log(error);
                alert("서버 통신 실패");
            })
        }
    }
    return(
        <Button variant="primary" onClick={getList}>{props.label} 장소</Button>
    );
}
export default GetListData;