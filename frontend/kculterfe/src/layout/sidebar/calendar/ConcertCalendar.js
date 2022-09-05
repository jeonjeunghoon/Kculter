import React, {useState} from "react";
import Calendar from 'react-calendar';
import './ConcertCalendar.css';
import 'react-calendar/dist/Calendar.css';

export default function ConcertCalendar() {
	const [value, setValue] = useState(new Date());
	function onChange(nextValue) {
		setValue(nextValue);
	}
	return (
		<>
			<div className="calendar_container">
				<Calendar defaultView="month" minDetail="month" onChange={onChange} value={value}/>
			</div>
		</>
	)
}
