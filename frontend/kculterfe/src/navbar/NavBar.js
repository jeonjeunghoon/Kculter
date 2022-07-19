import React from 'react';
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div style={{display:'inline-block',width:'100%',border:"1px solid black"}}>
            <h1 style={{float:"left"}}>Kculter logo</h1>
            <Link to="/login">로그인</Link>
        </div>
    );
}
export default NavBar;