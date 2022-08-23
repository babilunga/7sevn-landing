import '../../styles/components/why.css';

import { useContext, useEffect, useRef, useState } from 'react';
import ProportionContext from '../../context/ProportionContext';
import {
	mediaIntersectionY,
	mediaIntersectionX,
	sectionNameIntersection,
	textContentChanger,
	disappearIntersection,
} from '../../helpers/utilities.js';

import dividends from '../../assets/img/why/dividends.png';
import airdrops from '../../assets/img/why/airdrops.png';
import reduction from '../../assets/img/why/reduction.png';

import sectionName from '../../assets/img/sections/why.svg';

import { whyData } from '../../data/data';

function Why({ setCurrentSection }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { proportion } = useContext(ProportionContext);
	const { titles, descriptions } = whyData;

	const dividendsRef = useRef(null);
	const airdropsRef = useRef(null);
	const reductionRef = useRef(null);

	useEffect(() => {
		window.addEventListener('resize', resizeCapture);

		return window.removeEventListener('resize', resizeCapture);
	}, []);

	function resizeCapture() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		const div = dividendsRef.current;
		const air = airdropsRef.current;
		const red = reductionRef.current;

		if (div && air && red) {
			if (windowWidth < 880) {
				mediaIntersectionX([div, air, red], proportion);
			} else {
				mediaIntersectionY([div, air, red], proportion);
			}
		}

		if (proportion > -0.1 && proportion < 1) {
			setCurrentSection(2);
		}
	}, [proportion, setCurrentSection, windowWidth]);

	return (
		<section aria-label='Why Sevn section' className='why | layer-why'>
			<div className='why-content | container'>
				<img
					style={sectionNameIntersection(proportion)}
					className='section-name'
					src={sectionName}
					alt='Uppercase text Why, section name'
				/>
				<div className='why-media-group'>
					<img
						ref={dividendsRef}
						className='why-media-dividends'
						src={dividends}
						alt='Big blue safe with purple coins inside with 7Sevn logo on them.'
					/>
					<img
						ref={airdropsRef}
						className='why-media-airdrops'
						src={airdrops}
						alt='Wooden box with d7Sevn logo tag on it, flying on the parachute, wind goes by it.'
					/>
					<img
						ref={reductionRef}
						className='why-media-reduction'
						src={reduction}
						alt='Two smaller percent signs flying around a bigger one.'
					/>
				</div>
				<div className='why-text' style={disappearIntersection(proportion)}>
					<h2 className='why-title | fs-400 fw-black'>{textContentChanger(titles, proportion)}</h2>
					<p className='why-description | fs-300 fw-light'>
						{textContentChanger(descriptions, proportion)}
					</p>
				</div>
			</div>
		</section>
	);
}

export default Why;
