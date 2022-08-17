import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = () => {
    return (
        <nav>
            <Link to="LoginPage">LOGIN</Link>
        </nav>
    );
}

export default LoginLink;