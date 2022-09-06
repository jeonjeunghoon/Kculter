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
import { useDispatch } from 'react-redux';

async function fetchSelected(list, e, isKpop, setKculter, dispatch) {
	const found = list.find(obj => obj.hash == e.target.value);
	if (isKpop === true) {
		modifySessionItem(e.target.value, 1, found.name);
	} else {
		modifySessionItem(e.target.value, 2, found.name);
	}
	await getKculterData(setKculter, Number(window.sessionStorage.getItem("type")), window.sessionStorage.getItem("keyHash"), dispatch);
}

async function fetchList(isKpop, setList) {
	let kList = [];
	if (isKpop) {
		getKpopList()
		.then(function(res) {
			kList.push({
				hash: 0,
				name: "Select k-pop stars",
			});
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
			kList.push({
				hash: 0,
				name: "Select culture place",
			});
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
	const [list, setList] = useState([]);
	const [value, setValue] = useState(undefined);
	const dispatch = useDispatch();

	useEffect(() => {
		fetchList(isKpop, setList);
		setValue(() => "");
	}, [isKpop]);
	useEffect(() => {
		setValue(() => undefined);
	}, [value])

  return(
		<div className='map-filter-container'>
			<select className='filter'
				value={value}
				onChange={(e) => {
					if (e.target.value !== "0") {
						fetchSelected(list, e, isKpop, props.setKculter, dispatch);
					}
				}}
			>
				{
					list &&
					list.map((item, index) => {
						return (
							<option
							key={index}
							value={item.hash}
							>
								{item.name}
							</option>
						);
					})
				}
			</select>

			<FilterToggle
				setKculter={props.setKculter}
				setIsKpop={setIsKpop}
			/>
		</div>
  );
}
export default MapFilter;