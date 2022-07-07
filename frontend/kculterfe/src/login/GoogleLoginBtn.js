import React, { useState } from 'react';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const clientId = "1027180645834-6ahbfkt1ghv57opj2cmiuf25sekcqcn8.apps.googleusercontent.com";



export default function GoogleLoginBtn({ onGoogleLogin }){

    function handleCallbackResponse(response){
        var userObj = jwt_decode(response.credential);
        console.log(userObj);
        const email = userObj.email;
        const name = userObj.name;

        console.log("email = "+ email);
        console.log("name = "+ name);
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
//user가 없을때 로그인 버튼
//user가 있을때 로그아웃버튼 
    return(
        <div>
            <div id="signinDiv"></div>
        </div>
    )
}