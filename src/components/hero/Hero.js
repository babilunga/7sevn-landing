/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/components/hero.css';
import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import scrollIcon from '../../assets/img/ui/scroll-icon.svg';
import backgroundBack from '../../assets/img/hero/back.png';
import backgroundMiddle from '../../assets/img/hero/middle.png';
import backgroundFront from '../../assets/img/hero/front.png';

import { links } from '../../data/data';

import {
	heroContentIntersection,
	backgroundIntersection,
} from '../../helpers/intersectionUtilities';

function Hero() {
	const { proportion } = useContext(ProportionContext);
	return (
		<section className='hero | layer-hero' aria-labelledby='hero-section-title'>
			<div className='hero-content | container' style={heroContentIntersection(proportion)}>
				<h1 id='hero-section-title' className='hero-title | fs-500 fw-black text-center'>
					First GameFi Dex
				</h1>
				<p className='hero-text | fs-200 fw-semi-bold'>Best way to swap gaming tokens</p>
				<div className='hero-button-group | flex'>
					<a href={links.discord} target='_blank' rel='noreferrer' className='hero-button'>
						<span className='hero-button-title | fw-normal'>Join Community</span>
					</a>
					<a
						href={links.app}
						// add this after there is a real link for the app
						// target='_blank' rel='noreferrer'
						className='hero-button'>
						<span className='hero-button-title | fw-normal'>Launch App</span>
						<span className='soon-bud'>soon</span>
					</a>
				</div>
			</div>
			{/* ===== BG IMAGES ===== */}
			<div
				style={backgroundIntersection('back', proportion)}
				className='hero-background hero-background-back | layer-back'>
				<img
					className='hero-background-image image-front'
					src={backgroundBack}
					alt='Colorful wave background behind everything'
				/>
			</div>
			<div
				style={backgroundIntersection('middle', proportion)}
				className='hero-background hero-background-middle | layer-middle'>
				<img
					className='hero-background-image image-middle'
					src={backgroundMiddle}
					alt='Colorful wave background in the middle of leyering'
				/>
			</div>
			<div
				style={backgroundIntersection('front', proportion)}
				className='hero-background hero-background-front | layer-front'>
				<img
					className='hero-background-image image-back'
					src={backgroundFront}
					alt='Colorful wave background at the front of all the hero content'
				/>
			</div>
			{/* ===== END OF BG IMAGES ===== */}
			<img
				src={scrollIcon}
				alt='Scroll icon, it shows that user can scroll down to see more content'
				className={`${proportion > 0.3 ? 'fade-out' : 'fade-in'} hero-scroll-icon | layer-front`}
			/>
		</section>
	);
}

export default Hero;
