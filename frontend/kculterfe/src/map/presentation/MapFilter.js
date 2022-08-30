import React, {
	useEffect,
	useState,
} from 'react';
import Form from 'react-bootstrap/Form';

function FilterToggle(props) {
	return (
		<div className="filter-toggle">
			<button className='kpop-toggle'
				style={{
					backgroundColor:"red",
				}}
				onClick={() => {
					props.setIsKpop(() => true);
					props.setPlaceholder(() => "Select k-pop stars!")
				}}
			>
			</button>
			<button className='culture-toggle'
				onClick={() => {
					props.setIsKpop(() => false);
					props.setPlaceholder(() => "Select culture place!!");
				}}
			>
			</button>
		</div>
	);
}

function MapFilter(props) {
	// 토글 선택 시
	// 선택한 토글의 리스트 테이블에서 뽑아오기
	// 뽑아온 리스트를 보여준다.
	const [isKpop, setIsKpop] = useState(true);
	const [placeholder, setPlaceholder] = useState("Select k-pop stars!");
	const [list, setList] = useState(null);
	const [selected, setSelected] = useState(null);

	// 리스트 선택 시
	// 선택한 리스트의 keyHash 값을 뽑아 온다.
	// getPlaceApi(url, keyHash, type), getPinApi(url, keyHash, type) 사용
	// setKculter(() => {
	// 	place: place,
	//	pin: pin,
	// });
	useEffect(() => {
		setList(() => [
			"a",
			"b",
			"c"
		]);
	}, [isKpop]);

  return(
		<div className='map-filter-container'>
			<FilterToggle
				setIsKpop={setIsKpop}
				setPlaceholder={setPlaceholder}
			/>
  		<Form.Select className='filter'
				onChange={(e) => console.log(e.target.value)}
				style={{
					width: "240px",
					height: "32px",
					border: "1px solid transparent",
					borderRadius: "3px",
					fontSize: "14px",
				}}
			>
  		  <option
					value="placeholder"
				>
					{placeholder}
				</option>
				{list &&
				list.map((item, index) => {
					return (
						<option
						key={index}
						value={item}
						>
							{item}
						</option>
					);
				})}
  		</Form.Select>
		</div>
  );
}
export default MapFilter;