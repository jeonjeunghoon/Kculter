import React from 'react';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; //페이지 이동을 해주기 위해서 사용하는것

const clientId = "1027180645834-6ahbfkt1ghv57opj2cmiuf25sekcqcn8.apps.googleusercontent.com";



export default function GoogleLoginBtn({ onGoogleLogin }){

    let navigate = useNavigate(); //페이지 이동을 위해서 만든 변수

    function handleCallbackResponse(response){
        
        var userObj = jwt_decode(response.credential);

        console.log(userObj);

        const email = userObj.email;
        const name = userObj.name;
        console.log(email);
        console.log(name);

        axios.post('/member',{ //여기서 주의해야할점은 데이터를 보낼때 DTO 클래스의 값과 일치해야함
            email:email,
            mb_name:name 
        })
        .then(function(res){
            const member = res.data;
            console.log(member);
            //이거 이전에 member가 관리자인지 체크를 해야함. 관리자라면 관리자 페이지로 이동을 해야함
            if(member.checkMember){ //true 즉 기존 회원이라면 해당 정보를 가지고 메인 페이지로 이동
                
            }else{ //false 즉 기존 회원이 아니라면 회원 가입 페이지로 이동
                navigate("/signup",{ //경로는 /signup으로 보내고
                    state : { //데이터로는 
                        newmember : member //member값을 보냄
                    }
                });
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect(()=>{
        /* global google*/
        google.accounts.id.initialize({
            client_id : clientId,
            callback : handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signinDiv"),
            {theme:"outline", size:"large"}
        )
    },[]);
    return(
        <div>
            <div id="signinDiv"></div>
        </div>
    )
}