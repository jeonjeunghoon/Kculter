import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = () => {
    return (
        <nav style={{border: '1px solid black'}}>
            <Link to="LoginPage">LOGIN</Link>
        </nav>
    );
}

export default LoginLink;