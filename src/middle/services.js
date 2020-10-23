import React from 'react';

export default function Service(props) {
	return (
		<div class='card space '>
			<img
				class='card-img-top '
				src={props.imgURL}
				alt='Card image cap'
			/>
		</div>
	);
}
