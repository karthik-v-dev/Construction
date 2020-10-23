import React from 'react';
import './nn.css';
export default function Tunnel() {
	return (
		<div className='flip-box setprop'>
			<div className='flip-box-inner'>
				<div className='flip-box-front'>
					<img
						src='https://wallpapercave.com/wp/Azo1nLy.jpg'
						alt='justfront'
						className='imgFlip'
					/>
				</div>
				<div className='flip-box-back'>
					<img
						src='https://s1.1zoom.me/b4453/410/Italy_Houses_Coast_Stones_Sky_Evening_Ischia_Ponte_538430_1920x1080.jpg'
						alt='justback'
						className='imgFlip'
					/>
				</div>
			</div>
		</div>
	);
}
