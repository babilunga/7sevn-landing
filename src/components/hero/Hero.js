/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../styles/components/hero.css';
import { useContext } from 'react';
import scrollIcon from '../../assets/img/ui/scroll-icon.svg';
import ProportionContext from '../../context/ProportionContext';

function Hero() {
	const { proportion } = useContext(ProportionContext);

	function contentIntersection() {
		return {
			transform: `translateY(-${proportion * 20}%)`,
		};
	}

	function backgroundIntersection(layer) {
		const style = {};

		switch (layer) {
			case 'front':
				style.transform = `translateY(-${proportion * 30}%)`;
				break;
			case 'middle':
				style.transform = `translateY(${proportion * 10}%)`;
				break;
			case 'back':
				style.transform = `translateY(${proportion * 25}%)`;
				break;
			default:
				style.transform = `translateY(-${proportion * 0.8}%)`;
				break;
		}

		if (proportion > 1.3 && layer === 'middle') {
			style.opacity = 1 - (proportion - 1);
		} else if (proportion > 1.3 && layer === 'back') {
			style.opacity = 1 - (proportion - 1);
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
				<div
					style={backgroundIntersection('back')}
					className='hero-background hero-background-back | layer-back'></div>
				<div
					style={backgroundIntersection('middle')}
					className='hero-background hero-background-middle | layer-back'></div>
				<div
					style={backgroundIntersection('front')}
					className='hero-background hero-background-front | layer-front'></div>
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
