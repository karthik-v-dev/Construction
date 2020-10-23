import React from 'react';
import './nn.css';
export default function WaterTanks() {
	return (
		<div className='flip-box setprop'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src='https://i.pinimg.com/originals/1e/6c/38/1e6c38c7d11310d74e045984f88e3e16.jpg'
						alt='justfront'
						className='imgFlip'
					/>
				</div>
				<div className='flip-box-back'>
					<img
						src='https://i.redd.it/lyyqsy1arru21.jpg'
						alt='justback'
						className='imgFlip'
					/>
				</div>
			</div>
		</div>
	);
}
