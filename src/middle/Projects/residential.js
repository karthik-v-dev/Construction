import React from 'react';
import './nn.css';
export default function Residential() {
	return (
		<div className='flip-box setprop'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src='https://images.wallpaperscraft.com/image/astronaut_ring_neon_156673_1920x1080.jpg'
						alt='justfront'
						className='imgFlip'
					/>
				</div>
				<div className='flip-box-back'>
					<img
						src='https://www.setaswall.com/wp-content/uploads/2017/08/Spaceship-Background-20-1920x1080.jpg'
						alt='justback'
						className='imgFlip'
					/>
				</div>
			</div>
		</div>
	);
}
