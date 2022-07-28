import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';


export const Button = () => {
    return ( 
        
        <Link to = '/IdolListPage' className = 'main-btn'>
            <button className="main-start">
                START
            </button>
        </Link>
    );
    
};