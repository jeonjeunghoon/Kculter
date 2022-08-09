import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import GetListData from '../container/GetListData';

function TypeButton(props) {
    const placeUrl ="/manager/"+props.goto+"/place";
    const url = "/manager/"+props.goto
  return (
    <ButtonGroup>
        <Link to ={url}> 
            <button>{props.label}</button> 
        </Link>     
        <GetListData url={placeUrl} label={props.label}></GetListData>    
    </ButtonGroup>
  );
}

export default TypeButton;