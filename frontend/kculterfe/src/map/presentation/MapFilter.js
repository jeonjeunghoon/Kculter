import React from 'react';
import Form from 'react-bootstrap/Form';

function MapFilter(props) {
    const plist = props.list;
    const changed = props.changed;
    //얘는 데이터가 없어도 렌더링을 하기 때문에 변수 &&를 붙여야지만 렌더링이 된다.
    const options = plist && plist.map(list => {
			return (
				<option
					key={list.name}
					value={list.keyNum}
				>
					{list.name}
				</option>
			);
		});

    return(
  		<Form.Select className='map-filter'
				disabled={props.disabled}
				onChange={changed}
				style={{
					width: "240px",
					height: "32px",
					border: "1px solid transparent",
					borderRadius: "3px",
					fontSize: "14px",
				}}
			>
  		  <option
					value=""
				>
					Select Me !!
				</option>
					{options}
  		</Form.Select>  
    );
}
export default MapFilter;