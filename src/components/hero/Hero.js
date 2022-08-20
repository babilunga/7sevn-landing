/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/components/hero.css';
import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import scrollIcon from '../../assets/img/ui/scroll-icon.svg';
import backgroundBack from '../../assets/img/hero/back.png';
import backgroundMiddle from '../../assets/img/hero/middle.png';
import backgroundFront from '../../assets/img/hero/front.png';

import { heroContentIntersection, backgroundIntersection } from '../../helpers/utilities';

function Hero() {
	const { proportion } = useContext(ProportionContext);

	return (
		<section id='hero' className='hero | layer-hero' aria-labelledby='hero-section-title'>
			<div className='hero-content' style={heroContentIntersection(proportion)}>
				<h1 id='hero-section-title' className='hero-title | fs-500 fw-black'>
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
					style={backgroundIntersection('back', proportion)}
					className='hero-background hero-background-back | layer-back'
					src={backgroundBack}
					alt='Colorful wave background behind everything'
				/>
				<img
					style={backgroundIntersection('middle', proportion)}
					className='hero-background hero-background-middle | layer-middle'
					src={backgroundMiddle}
					alt='Colorful wave background in the middle of layering'
				/>
				<img
					style={backgroundIntersection('front', proportion)}
					className='hero-background hero-background-front | layer-front'
					src={backgroundFront}
					alt='Colorful wave background at the front of all the hero content'
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
