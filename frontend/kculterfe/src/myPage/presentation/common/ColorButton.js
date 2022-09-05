import React from 'react';
import styled from 'styled-components';

/**
 * @param (rgb) color
 * @param (bool) disabled
 * @param (string) text
 * */ 
function ColorButton(props) {
    const CheckButton = styled.button`
        padding: 7px 20px;
        border: none;
        color: ${props.check ? 'white' : 'gray'};
        background-color: ${props.color};
        border-radius: 10px;
        left: 73%;
        bottom: 2%;
    `
    
    return (
        <CheckButton disabled={!props.disabled} onClick={props.onClick}>{props.text}</CheckButton>
    )
}

export default ColorButton;