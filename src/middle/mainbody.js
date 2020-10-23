import React from 'react';
import './mainbody.css';
import Planing from './planing.js';
import Service from './services';
import About from './about';
import ContactUs from './contactus';

export default function Mainbody() {
	return (
		<div>
			<div>
				<p id='Services'>
					<h2 className='btn-info'>Services</h2>
				</p>

				<div class='row'>
					<div class='card-group'>
						<Service imgURL={require('./images/Planning.jpg')} />
						<Service imgURL={require('./images/cannal.jpg')} />
						<Service
							imgURL={require('./images/SwimmingPool.jpg')}
						/>
						<Service imgURL={require('./images/Bridge.jpg')} />
					</div>
				</div>
			</div>
			<div>
				<p id='Planning'>
					<h2 className='btn-info'>Planning</h2>
				</p>
				<div id='sett'>
					<Planing />
				</div>
			</div>
			<div>
				<p id='About'>
					<h2 className='btn-info'>About</h2>
				</p>

				<div class='row'>
					<div class='card-group'>
						<About
							imgURL={require('./images/about.jpg')}
							Name='XXXXXX'
							description='design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
						/>
						<About
							imgURL={require('./images/about.jpg')}
							Name='YYYYYY'
							description='design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
						/>
						<About
							imgURL={require('./images/about.jpg')}
							Name='ZZZZZZ'
							description='design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
						/>
						<About
							imgURL={require('./images/about.jpg')}
							Name='AAAAAA'
							description='design, build, supervise, operate, construct and maintain infrastructure projects and systems in the public and private sector, including roads, buildings, airports, tunnels, dams, bridges, and systems for water supply and sewage treatment.'
						/>
					</div>
				</div>
			</div>
			<div>
				<p id='ContactUs'>
					<h2 className='btn-info'>ContactUs</h2>
				</p>
				<div class='row'>
					<div class='card-group'>
						<ContactUs
							imgURL={require('./images/twitter.png')}
							links='whatsup'
						/>
						<ContactUs
							imgURL={require('./images/twitter.png')}
							links='facebook'
						/>
						<ContactUs
							imgURL={require('./images/twitter.png')}
							links='twitter'
						/>
						<ContactUs
							imgURL={require('./images/twitter.png')}
							links='teligram'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
