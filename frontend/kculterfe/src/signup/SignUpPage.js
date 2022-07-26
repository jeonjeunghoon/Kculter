import React from 'react';
import { useLocation } from "react-router";

function SignUpPage(){

    const location = useLocation();
    //const newmember = location.state.newmember;

    return(
        <div style={{border:"1px solid black"}}>
            <h1>여기는 회원가입 페이지</h1>
           
        </div>
    );
}
export default SignUpPage;