import React from 'react';

function StayCard({ img }) {
	return (
		<button>
			<img
				src={img}
				alt='Stay'
			/>
		</button>
	);
}

function Stay() {
	// 화면 크기에 따라 카드를 어떻게 배치할지 고민해야 한다.
	const img = 'https://post-phinf.pstatic.net/MjAxODEwMjlfNDIg/MDAxNTQwODEwMzYwMzcy.eNF3SKn5WbdvtWdyqozopukZJiBOs3CFR9XA-5RCCL8g.TALyIutorehrQzRIorXgdcwZrkKi2w4LbDVGFds67wYg.JPEG/Gyeongju_Cheonggong_Hanokstay_01.JPG?type=w1200';

	return (
		<div className='stay-container'>
			<StayCard img={img} />
			<StayCard img={img} />
			<StayCard img={img} />
			<StayCard img={img} />
		</div>
	);
}

export default Stay;