import React from 'react'
import './IdolList.css'
import Card from './Card.js';

function IdolList({}) {
	return (
		<div className="Card-container">
			<div className="Row">
				<div className="Column">
					<Card title='BTS' imageUrl='https://img0.yna.co.kr/etc/inner/KR/2021/06/19/AKR20210619028500005_01_i_P2.jpg' like_num='17' spot_num='34' />
				</div>
				<div className="Column">
					<Card title='BLACKPINK' imageUrl='https://img.insight.co.kr/static/2022/04/27/700/img_20220427064353_hmq93jk8.webp' like_num='17' spot_num='34' />
				</div>
			</div>
			<div className="Row">
				<div className="Column">
					<Card title='PSY' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaA19Vulv1_v28u9j2qJR_uGRSv5MKJkRMg&usqp=CAU' like_num='17' spot_num='34' />
				</div>
				<div className="Column">
					<Card title='TWICE' imageUrl='https://newsimg.sedaily.com/2021/12/03/22V5FF35UJ_1.jpg' like_num='17' spot_num='34' />
				</div>
			</div>
		</div>
	)
}

export default IdolList