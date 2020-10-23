import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './planning.css';

export class Planing extends Component {
	render() {
		return (
			<div>
				<div class='container-fluid'>
					<div
						className='row title'
						style={{ marginBottom: '20px' }}
					></div>
				</div>

				<div className='container-fluid '>
					<OwlCarousel
						items={3}
						className='owl-theme'
						loop
						nav
						margin={8}
					>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img1.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img2.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img3.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img4.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img5.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img6.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img7.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img8.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img9.jpg')}
							/>
						</div>
						<div className='img-wrapper'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
							/>
						</div>
					</OwlCarousel>
				</div>
			</div>
		);
	}
}

export default Planing;
