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
import { getKculterData } from '../container/getKculterData';

function MapFilter(props) {
	const [isKpop, setIsKpop] = useState(true);
	const [placeholder, setPlaceholder] = useState("Select k-pop stars!");
	const [list, setList] = useState([]);

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
						modifySessionItem(e.target.value, 1, found.name);
						await getKculterData(props.setData, window.sessionStorage.getItem("keyHash"), Number(window.sessionStorage.getItem("type")), props.data.reduxConcert);
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