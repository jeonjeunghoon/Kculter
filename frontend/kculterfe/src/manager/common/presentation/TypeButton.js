import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";

function TypeButton(props) {
    const placeUrl ="/manager/"+props.goto+"/place";
    const url = "/manager/"+props.goto
  return (
    <ButtonGroup aria-label="Basic example">
        <Link to={placeUrl}>
            <Button variant="primary">{props.label} 장소</Button>    
        </Link>
        <Link to ={url}> 
            <Button variant="primary">{props.label}</Button> 
        </Link>
    </ButtonGroup>
  );
}

export default TypeButton;