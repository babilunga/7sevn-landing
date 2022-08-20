import '../../styles/components/why.css';

import { useContext, useEffect, useRef } from 'react';
import ProportionContext from '../../context/ProportionContext';
import {
	mediaIntersection,
	sectionNameIntersection,
	textContentChanger,
} from '../../helpers/utilities.js';

import dividends from '../../assets/img/why/dividends.png';
import airdrops from '../../assets/img/why/airdrops.png';
import reduction from '../../assets/img/why/reduction.png';

import sectionName from '../../assets/img/sections/why.svg';

import { whyData } from '../../data/data';

function Why() {
	const { proportion } = useContext(ProportionContext);
	const { titles, descriptions } = whyData;

	const dividendsRef = useRef(null);
	const airdropsRef = useRef(null);
	const reductionRef = useRef(null);

	useEffect(() => {
		const div = dividendsRef.current;
		const air = airdropsRef.current;
		const red = reductionRef.current;

		if (div && air && red) {
			mediaIntersection([div, air, red], proportion, 'y');
		}
	}, [proportion]);

	return (
		<section aria-label='Why Sevn section' id='why' className='why | layer-why'>
			<div className='why-content'>
				<img
					style={sectionNameIntersection(proportion)}
					className='section-name'
					src={sectionName}
					alt='Uppercase text Why, section name'
				/>
				<div className='why-text'>
					<h2 className='why-title | fs-400 fw-black'>{textContentChanger(titles, proportion)}</h2>
					<p className='why-description | fs-300 fw-light'>
						{textContentChanger(descriptions, proportion)}
					</p>
				</div>

				<div className='why-media-group'>
					<img ref={dividendsRef} className='why-media-dividends' src={dividends} alt='' />
					<img ref={airdropsRef} className='why-media-airdrops' src={airdrops} alt='' />
					<img ref={reductionRef} className='why-media-reduction' src={reduction} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Why;
