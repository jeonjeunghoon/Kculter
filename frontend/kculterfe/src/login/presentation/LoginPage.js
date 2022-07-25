import React from 'react';
import GoogleLoginBtn from '../container/GoogleLoginBtn';


function LoginPage(){
    return(
        <div style={{border:"1px solid black"}}>
            <h1>여기는 로그인 페이지</h1>
            <GoogleLoginBtn/>
        </div>
    );
}
export default LoginPage;