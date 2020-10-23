import React from 'react';
import './ContactUs.css';

export default function ContactUs(props) {
	return (
		<div class='card cardset setcard'>
			<img
				class='card-img-top fit'
				src={props.imgURL}
				alt='social accounts'
			/>
			<div class='card-body'>
				Click:-
				<a href='#' target='_self' class='cls'>
					{props.links}
				</a>
			</div>
		</div>
	);
}
