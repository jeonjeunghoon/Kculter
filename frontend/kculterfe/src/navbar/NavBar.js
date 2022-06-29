import React from 'react';
function Header(){
    const gotoLogin = function(){
        alert("로그인페이지로 가고싶다...")
    }
    return(
        <>
            <h1>여기는 네비바 구역</h1>
            <button onClick={gotoLogin}>로그인</button>
        </>
    );
}
export default Header;