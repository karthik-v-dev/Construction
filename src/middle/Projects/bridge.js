import React from 'react';
import './nn.css';
export default function Bridge() {
	return (
		<div className='flip-box setprop'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src='https://images5.alphacoders.com/703/703232.jpg'
						alt='justfront'
						className='imgFlip'
					/>
				</div>
				<div className='flip-box-back'>
					<img
						src='https://i.redd.it/b251spg5b6v31.jpg'
						alt='justback'
						className='imgFlip'
					/>
				</div>
			</div>
		</div>
	);
}
