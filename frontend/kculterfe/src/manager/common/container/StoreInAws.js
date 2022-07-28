import React from 'react';
import Form from 'react-bootstrap/Form';

function StoreInAws(){

    const send = (event) => {
        const file = event.target.files[0];
        const extenstion = file.name.substring(file.name.indexOf('.'));

        const date = new Date();
        const year = date.getFullYear().toString();
        const month = (date.getMonth()+1).toString();
        const day = date.getDate().toString();
        const hour = date.getHours().toString();
        const minute = date.getMinutes().toString();
        const second = date.getSeconds().toString();

        const changedFileName = year+month+day+hour+minute+second+extenstion;
        file.name = changedFileName
        console.log(file);
    }

    return(
        <Form.Control style={{width : '30%'}} type="file" onChange={send}/>
    );
}
export default StoreInAws;