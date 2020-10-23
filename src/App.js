import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Mainbody from './middle/mainbody.js';
import Footer from './bottom/footer.js';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './headstyle.css';
import './App.css';
import Logo from './logo.png';
import CarosalHome from './middle/carouselHome.js';
import Residential from './middle/Projects/residential.js';
import Tunnel from './middle/Projects/tunnel.js';
import Bridge from './middle/Projects/bridge.js';
import WaterTanks from './middle/Projects/watertanks.js';
import Roads from './middle/Projects/roads.js';
import ScrollToTop from './scrolltop.js';

import samplePDF from './sample.pdf';
import TermsAndConditions from './pdf/termsandconditions.js';
import PrivacyPolicy from './pdf/privacypolicy.js';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signup: false,
			login: false,
		};
	}

	onOpenModal = () => {
		this.setState({ signup: true });
	};
	onOpenModallogin = () => {
		this.setState({ login: true });
	};
	onCloseModal = () => {
		this.setState({ signup: false });
	};
	onCloseModalclose = () => {
		this.setState({ login: false });
	};
	render() {
		const { login, signup } = this.state;
		return (
			<Router>
				<div className='textstyle  stic '>
					<nav className='navbar navbar-expand-lg navbar-light bg-white  '>
						<a className='navbar-brand' href='#'>
							<img
								src={Logo}
								alt='log'
								width='50'
								height='50'
							></img>
						</a>
						<button
							className='navbar-toggler hidden-lg-up'
							type='button'
							data-toggle='collapse'
							data-target='#collapsibleNavId'
							aria-controls='collapsibleNavId'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<i className='material-icons'>apps</i>
						</button>
						<div
							className='collapse navbar-collapse'
							id='collapsibleNavId'
						>
							<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
								<li className='nav-item '>
									<Link
										className='nav-link'
										to='/'
										activeClassName='active'
									>
										Home{' '}
										<span className='sr-only'>
											(current)
										</span>
									</Link>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#Services'>
										Services
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#Planning'>
										Planing
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#About'>
										About
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='dropdownId'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										Projects
									</a>
									<div
										className='dropdown-menu'
										aria-labelledby='dropdownId'
									>
										{' '}
										<Link
											className='dropdown-item'
											to='/residential'
										>
											Residentials
										</Link>
										<Link
											className='dropdown-item'
											to='/tunnel'
										>
											Tunnels
										</Link>
										<Link
											className='dropdown-item'
											to='/bridge'
										>
											Bridges
										</Link>
										<Link
											className='dropdown-item'
											to='/watertanks'
										>
											Water Tanks
										</Link>
										<Link
											className='dropdown-item'
											to='/roads'
										>
											Roads
										</Link>
									</div>
								</li>

								<li className='nav-item'>
									<a className='nav-link' href='#ContactUs'>
										ContactUS
									</a>
								</li>
								<li className='nav-item dropdown'>
									<a
										className='nav-link dropdown-toggle'
										href='#'
										id='dropdownId'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										Privacy Terms
									</a>
									<div
										className='dropdown-menu'
										aria-labelledby='dropdownId'
									>
										<Link
											className='dropdown-item'
											to='/privacypolicy'
										>
											Privacy Policy
										</Link>
										<Link
											className='dropdown-item'
											to='/termsandconditions'
										>
											Terms and Condtions
										</Link>
									</div>
								</li>
							</ul>

							<form
								className='form-inline my-2 my-xs-0'
								action='https://google.com/search'
								method='get'
							>
								<input
									className='form-control mr-xss-2'
									type='search'
									aria-label='Search'
									size='30'
									style={{
										textAlign: 'center',
										font:
											' italic bold 15px/28px Georgia, serif',
										color: 'black',
										padding: '2px 6px',
										marginRight: '11px',
									}}
									placeholder=' Google...Search'
									name='q'
									vaue=''
								/>
								<button
									className='btn btn-success my-2 my-xs-0'
									type='submit'
									name=''
									onClick={this.checkempty}
								>
									Search
								</button>
							</form>
							<ul className='nav navbar-nav nav-right '>
								<li>
									<button
										className=' btn btn-md btn-primary btn-center'
										id='signup'
										onClick={this.onOpenModal}
									>
										<i className='fa fa-sign-in'></i>
										&nbsp;&nbsp;Sign Up
									</button>
								</li>
								<li className='setpos'>
									<button
										className=' btn btn-md btn-primary btn-center'
										id='login'
										onClick={this.onOpenModallogin}
									>
										<i className='fas fa-user-alt'></i>
										&nbsp;&nbsp;Login
									</button>
								</li>
							</ul>
						</div>
					</nav>
					<Modal
						open={signup}
						onClose={this.onCloseModal}
						keyboard={false}
					>
						<div
							className='modal-body'
							style={{ backgroundColor: 'yellow' }}
						>
							<h2 className='Titlesub'>
								Get started Absolutely
								<span className='subHigh'>Free!</span>
							</h2>
							<span className='subtitle'>Free to Access</span>
							<from
								className='contact-form form-validate3'
								novalidate='novalidate'
							>
								<div className='from-group'>
									<input
										className='form-control '
										type='text'
										name='name'
										id='name'
										size='30'
										placeholder='Full Name'
										pattern='[A-Za-z]{25}'
										required
										autoComplete='off'
										aria-required='true'
										style={{
											textAlign: 'center',
										}}
									/>
								</div>
								<div className='from-group'>
									<input
										className='form-control'
										type='password'
										name='password'
										id='password'
										size='30'
										placeholder='Password'
										required
										autoComplete='off'
										aria-required='true'
									/>
								</div>
								<div className='from-group'>
									<input
										className='form-control'
										type='tel'
										name='Phone'
										id='Phone'
										size='30'
										placeholder='Phone Number'
										pattern='[0-9]{10}'
										required
										autoComplete='off'
										aria-required='true'
									/>
								</div>
								<div className='from-group'>
									<input
										className='form-control'
										type='email'
										name='Email'
										size='30'
										id='Email'
										pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
										placeholder='Email Address'
										required
										autoComplete='off'
										aria-required='true'
									/>
								</div>
								<input
									className='btn btn-md btn-primary btn-center btnset'
									id='sing_up'
									value='Sign Up'
									type='submit'
									style={{
										padding: '3px 8px',
									}}
								/>
							</from>
						</div>
					</Modal>
					<Modal
						open={login}
						onClose={this.onCloseModalclose}
						style={{ textAlign: 'center' }}
					>
						<div
							className='modal-body'
							style={{ backgroundColor: 'yellow' }}
						>
							<h2 className='Titlesub1'>
								Login and Get
								<span className='subHigh1'>Started</span>
							</h2>
							<span className='subtitle1'>
								Fill Below Details
							</span>
							<from
								className='contact-form form-validate3'
								novalidate='novalidate'
							>
								<div className='from-group'>
									<input
										className='form-control'
										type='email'
										name='email'
										id='email'
										size='30'
										placeholder='Register Email'
										required
										autoComplete='off'
										aria-required='true'
									/>
								</div>
								<div className='from-group'>
									<input
										className='form-control'
										type='password'
										name='password'
										id='password'
										placeholder='Password'
										required
										size='30'
										autoComplete='off'
										aria-required='true'
									/>
								</div>

								<input
									className='btn btn-md btn-primary btn-center btnset'
									id='login'
									type='submit'
									value='Login'
									style={{
										padding: '6px 12px',
									}}
								/>
							</from>
						</div>
					</Modal>
				</div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/residential' component={Residentials} />
					<Route path='/tunnel' component={Tunnels} />
					<Route path='/bridge' component={Bridges} />
					<Route path='/watertanks' component={Watertanks} />
					<Route path='/roads' component={Roadss} />
					<Route
						path='/termsandconditions'
						component={TermsANDConditions}
					/>
					<Route path='/privacypolicy' component={PrivacyANDPolicy} />
				</Switch>
			</Router>
		);
	}
}
export default App;

const Home = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<CarosalHome />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Residentials = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<Residential />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Tunnels = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<Tunnel />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Bridges = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<Bridge />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Watertanks = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<WaterTanks />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Roadss = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<Roads />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const TermsANDConditions = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<TermsAndConditions pdf={samplePDF} />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const PrivacyANDPolicy = () => (
	<Fragment>
		<ScrollToTop />
		<div className='ser'>
			<PrivacyPolicy pdf={samplePDF} />
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
