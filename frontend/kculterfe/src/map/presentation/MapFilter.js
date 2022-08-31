import React, {
	useEffect,
	useState,
} from 'react';
import {
	getKpopList
} from '../../manager/common/container/GetKpopList';
import {
	getCultureList
} from '../../manager/common/container/GetCultureList';
import {
	getPlaceApi,
	getPinApi,
} from '../container/getInfo';

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
	const [isKpop, setIsKpop] = useState(true);
	const [placeholder, setPlaceholder] = useState("Select k-pop stars!");
	const [list, setList] = useState([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		const fetchData = async() => {
			let kList = [];
			if (isKpop) {
				getKpopList()
				.then(function(res) {
					res.map(item => {
						kList.push({
							hash: item.keyHash,
							name: item.name,
						});
					})
					setList(kList);
				})
				.catch(function(error) {
					console.log(error);
				})
			} else {
				getCultureList()
				.then(function(res) {
					res.map(item => {
						kList.push({
							hash: item.keyHash,
							name: item.name,
						});
					})
					setList(kList);
				})
				.catch(function(error) {
					console.log(error);
				})
			}
		}
		fetchData();
	}, [isKpop]);

  return(
		<div className='map-filter-container'>
			<FilterToggle
				setIsKpop={setIsKpop}
				setPlaceholder={setPlaceholder}
			/>
  		<select className='filter'
				onChange={(e) => {
					const fetchData = async() => {
						const found = list.find(obj => obj.hash == e.target.value);
						console.log(found.name);
						window.sessionStorage.setItem("title", found.name);
						let type = "";
						if (isKpop) {
							type = "kpop";
						} else {
							type = "culture";
						}
						const place = await getPlaceApi("/place/", e.target.value, type);
						const pin = await getPinApi("/pin/", type, e.target.value);
						if (place) {
							props.setKPlace(place.data);
						}
						if (pin) {
							props.setKPin(pin.data);
						}
					}
					if (e.target.value !== "placeholder") {
						fetchData();
					}
				}}
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
						value={item.hash}
						>
							{item.name}
						</option>
					);
				})}
  		</select>
		</div>
  );
}
export default MapFilter;