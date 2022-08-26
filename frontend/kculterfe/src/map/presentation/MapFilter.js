import React from 'react';
import Form from 'react-bootstrap/Form';

function Filter(props) {

    const plist = props.list;

    const changed = props.changed;

    //얘는 데이터가 없어도 렌더링을 하기 때문에 변수 &&를 붙여야지만 렌더링이 된다.
    const options = plist && plist.map((list) => (<option key={list.name} value={list.keyNum}>{list.name}</option>))

    return(
        <Form.Select disabled={props.disabled} onChange={changed} style={{
					position: "absolute",
					right: "0px",
					width: "240px",
					height: "32px",
					border: "1px solid transparent",
					borderRadius: "3px",
					boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
					fontSize: "14px",
					textOverflow: "ellipses"
				}}>
            <option value="">Select Me !!</option>
            {options}
        </Form.Select>  
    );
}
export default Filter;