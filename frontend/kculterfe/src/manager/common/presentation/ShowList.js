import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';

function ShowList(props) {

    const plist = props.list;
    const changed = props.changed;

    //얘는 데이터가 없어도 렌더링을 하기 때문에 변수 &&를 붙여야지만 렌더링이 된다.
    const options = plist && plist.map((list) => (<option key={list.name} value={list.keyHash}>{list.name}</option>))

    return(
        <Form.Select disabled={props.disabled} onChange={changed} style={{width : '30%'}}>
            <option value="">=== 선택 ===</option>
            {options}
        </Form.Select>  
    );
}
export default ShowList;