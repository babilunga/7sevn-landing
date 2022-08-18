/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/components/hero.css';
import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import scrollIcon from '../../assets/img/ui/scroll-icon.svg';
import backgroundBack from '../../assets/img/hero/back.png';
import backgroundMiddle from '../../assets/img/hero/middle.png';
import backgroundFront from '../../assets/img/hero/front.png';

function Hero() {
	const { proportion } = useContext(ProportionContext);

	function contentIntersection() {
		return {
			transform: `translateY(-${proportion * 12}%)`,
		};
	}

	function backgroundIntersection(layer) {
		const style = {};

		switch (layer) {
			case 'front':
				if (proportion > 2 && proportion < 2.5) {
					style.transform = `translateY(-${70 - proportion * 18}%)`;
				} else if (proportion >= 2.5) {
					style.transform = `translateY(-${60 - proportion * 18}%)`;
				} else if (proportion <= 2) {
					style.transform = `translateY(-${proportion * 18}%)`;
				}
				break;
			case 'middle':
				style.transform = `translateY(${proportion * 2}%)`;
				break;
			case 'back':
				style.transform = `translateY(${proportion * 15}%)`;
				break;
			default:
				style.transform = `translateY(-${proportion * 0.8}%)`;
				break;
		}

		if (proportion > 1.8 && layer !== 'front') {
			style.opacity = 0;
		}

		return style;
	}

	return (
		<section id='hero' className='hero | layer-hero' aria-labelledby='hero-section-title'>
			<div className='hero-content' style={contentIntersection()}>
				<h1 id='hero-section-title' className='hero-title | fs-500 fw-bold'>
					First GameFi Dex
				</h1>
				<p className='hero-text | fs-200 fw-semi-bold'>Best way to swap gaming tokens</p>
				<div className='hero-button-group | flex'>
					<a href='#' role='button' className='hero-button'>
						<span>Join Community</span>
					</a>
					<a href='#' role='button' className='hero-button'>
						<span>Launch App</span>
					</a>
				</div>
				<img
					style={backgroundIntersection('back')}
					className='hero-background hero-background-back | layer-back'
					src={backgroundBack}
					alt=''
				/>
				<img
					style={backgroundIntersection('middle')}
					className='hero-background hero-background-middle | layer-middle'
					src={backgroundMiddle}
					alt=''
				/>
				<img
					style={backgroundIntersection('front')}
					className='hero-background hero-background-front | layer-front'
					src={backgroundFront}
					alt=''
				/>
				<img
					src={scrollIcon}
					alt='Scroll icon, it shows that user can scroll down to see more content'
					className={`${proportion > 0.3 ? 'fade-out' : 'fade-in'} hero-scroll-icon | layer-front`}
				/>
			</div>
		</section>
	);
}

export default Hero;
