import React from 'react';
import './about.css';
export default function About(props) {
	return (
		<div class='card cards space '>
			<img class='card-img-top sets' src={props.imgURL} alt='Founders' />
			<div class='card-body'>
				Name:-<h4 class='card-title'>{props.Name}</h4>
				<p class='card-text'>{props.description}</p>
			</div>
		</div>
	);
}
