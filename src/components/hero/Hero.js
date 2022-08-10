/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/components/hero.css';

import { useEffect } from 'react';
import scrollIcon from '../../assets/img/ui/scroll-icon.svg';

function Hero() {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const scroll_icon = document.querySelector('.hero-scroll-icon');
			if (window.scrollY > 200) {
				scroll_icon.classList.remove('fade-out');
				scroll_icon.classList.add('fade-in');
			} else if (window.scrollY < 200 && scroll_icon.classList.contains('fade-in')) {
				scroll_icon.classList.remove('fade-in');
				scroll_icon.classList.add('fade-out');
			}

			console.log(window.scrollY);
		});
	}, []);

	return (
		<section className='hero' aria-labelledby='hero-section-title'>
			<div className='hero-content'>
				<h1 id='hero-section-title' className='hero-title | fs-500 fw-bold'>
					First GameFi Dex
				</h1>
				<p className='hero-text | fs-200 fw-semi-bold'>Best way to swap gaming tokens</p>
				<div className='hero-button-group | flex'>
					<a href='#' role='button' className='hero-button'>
						Join Community
					</a>
					<a href='#' role='button' className='hero-button'>
						Launch App
					</a>
				</div>
			</div>
			<img
				src={scrollIcon}
				alt='Scroll icon, it shows that user can scroll to interact with website.'
				className='hero-scroll-icon'
			/>
		</section>
	);
}

export default Hero;
