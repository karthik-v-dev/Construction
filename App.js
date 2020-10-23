import React, { Fragment } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import Mainbody from './mainbody.js';
import Footer from './footer.js';
import ScrollToTop from './scrolltop.js';
import './headstyle.css';

import Logo from './logo.png';

import Login from './Login/login.js';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='Stic'>
					<div
						class='collapse navbar-collapse'
						id='navbarTogglerDemo01'
					>
						<ul className='navR custom-navbar fixed-top'>
							ss
							<li className='navL'>
								<a href=''>
									<img src={require('./images/logo.png')} />
								</a>
							</li>
							<li className='navM'>
								<span class='navbar-toggler-icon'></span>
								<button
									class='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarTogglerDemo01'
									aria-controls='navbarTogglerDemo01'
									aria-expanded='false'
									aria-label='Toggle navigation'
								>
									<a
										href='# '
										id='navbarTogglerDemo01'
										className='colour'
									>
										<span className='glyphicon glyphicon-tasks'></span>
									</a>
								</button>
							</li>
							<li className='navM'>
								<Link to='/login' className='colour'>
									Login
								</Link>
							</li>
							<li className='navM'>
								<Link href='#Contact' className='colour'>
									Contact
								</Link>
							</li>
							<li className='navM'>
								<Link
									to='/'
									activeClassName='active'
									className='colour'
								>
									Home{' '}
									<span className='sr-only'>(current)</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/login' component={Logins} />
				</Switch>
			</Router>
		);
	}
}
export default App;

const Home = () => (
	<Fragment>
		<ScrollToTop />

		<div>
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Logins = () => (
	<Fragment>
		<ScrollToTop />
		<div>
			<Login />
		</div>
		<Footer />
	</Fragment>
);
