import React from 'react';

export default function CarosalHome() {
	return (
		<div id='carouselId' class='carousel slide ' data-ride='carousel'>
			<ol class='carousel-indicators'>
				<li
					data-target='#carouselId'
					data-slide-to='0'
					class='active'
				></li>
				<li data-target='#carouselId' data-slide-to='1'></li>
				<li data-target='#carouselId' data-slide-to='2'></li>
			</ol>
			<div class='carousel-inner' role='listbox'>
				<div class='carousel-item active'>
					<img
						src={require('./images/a.jpg')}
						alt='First slide'
						class='widh'
					/>
					<div class='carousel-caption d-none d-md-block'>
						<h3 className='quote'>Jean Peronnet</h3>
						<p className='description'>
							A great bridge is a great monument which should
							serve to make known the splendour and genius of a
							nation; one should not occupy oneself with efforts
							to perfect it architecturally, for taste is always
							susceptible to change, but to conserve always in its
							form and decoration the character of solidity which
							is proper.
						</p>
					</div>
				</div>
				<div class='carousel-item'>
					<img
						src={require('./images/b.jpg')}
						alt='Second slide'
						class='widh'
					/>
					<div class='carousel-caption d-none d-md-block'>
						<h3 className='quote'>Stephen Gardiner</h3>
						<p className='description'>
							Good buildings come from good people, and all
							problems are solved by good design
						</p>
					</div>
				</div>
				<div class='carousel-item'>
					<img
						src={require('./images/c.jpg')}
						alt='Third slide'
						class='widh'
					/>
					<div class='carousel-caption d-none d-md-block'>
						<h3 className='quote'>Denis Waitley</h3>
						<p className='description'>
							Expect the best, plan for the worst, and prepare to
							be surprised
						</p>
					</div>
				</div>
			</div>
			<a
				class='carousel-control-prev'
				href='#carouselId'
				role='button'
				data-slide='prev'
			>
				<span
					class='carousel-control-prev-icon'
					aria-hidden='true'
				></span>
				<span class='sr-only'>Previous</span>
			</a>
			<a
				class='carousel-control-next'
				href='#carouselId'
				role='button'
				data-slide='next'
			>
				<span
					class='carousel-control-next-icon'
					aria-hidden='true'
				></span>
				<span class='sr-only'>Next</span>
			</a>
		</div>
	);
}
