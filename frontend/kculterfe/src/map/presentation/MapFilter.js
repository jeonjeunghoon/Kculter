import React, {
	useEffect,
	useState,
} from 'react';
import FilterToggle from './FilterToggle';
import {
	getKpopList
} from '../../manager/common/container/GetKpopList';
import {
	getCultureList
} from '../../manager/common/container/GetCultureList';
import {
	modifySessionItem,
} from '../container/handleSessionStorage';
import {
	getKculterData
} from '../container/getData';

async function fetchSelected(list, e, isKpop, kculter, setKculter) {
	const found = list.find(obj => obj.hash == e.target.value);
	if (isKpop === true) {
		modifySessionItem(e.target.value, 1, found.name);
	} else {
		modifySessionItem(e.target.value, 2, found.name);
	}
	await getKculterData(kculter, setKculter, Number(window.sessionStorage.getItem("type")), window.sessionStorage.getItem("keyHash"));
}

async function fetchList(isKpop, setList) {
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
			setList(() => kList);
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
			setList(() => kList);
		})
		.catch(function(error) {
			console.log(error);
		})
	}
}

function MapFilter(props) {
	const [isKpop, setIsKpop] = useState(true);
	const [placeholder, setPlaceholder] = useState("Select k-pop stars!");
	const [list, setList] = useState([]);

	useEffect(() => {
		fetchList(isKpop, setList);
	}, [isKpop]);

  return(
		<div className='map-filter-container'>
			<FilterToggle
				setKculter={props.setKculter}
				setIsKpop={setIsKpop}
				setPlaceholder={setPlaceholder}
			/>
  		<select className='filter'
				onChange={(e) => {
					if (e.target.value !== "placeholder") {
						fetchSelected(list, e, isKpop, props.kculter, props.setKculter);
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