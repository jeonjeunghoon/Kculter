import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function GetListData(props){

    let navigate = useNavigate();

    const getList = () => {
        if(props.url.includes('kpop')){
            let list;
            let places;
            axios.get('/celebrities')
            .then(function(res){
                list = res.data;
                if(list == null){
                    alert("입력된 Kpop 스타가 없습니다. \n Kpop 스타부터 입력하세요");
                    window.location.href="/manager/kpop"
                }else{
                    axios.get('/places') //모든 장소를 가져온다.
                    .then(function(res){
                        places = res.data;
                        navigate(props.url,{ //경로는
                            state : { //데이터로는 
                                list : list, //연예인 리스트랑
                                places : places //장소 리스트를 가지고 넘어간다.
                            }
                        });
                    })
                    .catch(function(error){
                        console.log(error);
                        alert("서버 통신 실패");
                    })
                }
            })
            .catch(function(error){
                console.log(error);
                alert("서버 통신 실패");
            });

        }else if(props.url.includes('culture')){
            let list;
            let places;
            axios.get('/cultures')
            .then(function(res){
                list = res.data;
                if(list == null){
                    alert("입력된 문화 체험이 없습니다. \n 문화 체험부터 입력하세요");
                    window.location.href="/manager/culture"
                }else{
                    axios.get('/places')
                    .then(function(res){
                        places = res.data;
                        navigate(props.url,{ //경로는 /signup으로 보내고
                            state : { //데이터로는 
                                list : list,
                                places : places
                            }
                        });
                    })
                    .catch(function(error){
                        console.log(error);
                        alert("서버 통신 실패");
                    })
                }
            })
            .catch(function(error){
                console.log(error);
                alert("서버 통신 실패");
            })
        }
    }
    return(
        <Button onClick={getList}>{props.label} 장소</Button>
    );
}
export default GetListData;