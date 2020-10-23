import React from 'react';
import './nn.css';

export default function Roads() {
	return (
		<div className='flip-box setprop'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src={require('../images/c.jpg')}
						alt='justfront'
						className='imgFlip'
					/>
				</div>
				<div className='flip-box-back'>
					<img
						src='https://i.pinimg.com/originals/71/ce/81/71ce819f3e164b1cdcc92f40e12e6b18.jpg'
						alt='justback'
						className='imgFlip'
					/>
				</div>
			</div>
		</div>
	);
}
