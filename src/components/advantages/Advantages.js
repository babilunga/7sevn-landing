import '../../styles/components/advantages.css';

import { useContext, useEffect, useRef } from 'react';
import ProportionContext from '../../context/ProportionContext';

import liquidity from '../../assets/img/advantages/liquidity.png';
import dashboard from '../../assets/img/advantages/dashboard.png';
import pools from '../../assets/img/advantages/pools.png';
import sectionName from '../../assets/img/sections/advantages.svg';

import {
	textContentChanger,
	mediaIntersection,
	sectionNameIntersection,
} from '../../helpers/utilities';
import { advantagesData } from '../../data/data';

function Advantages() {
	const { proportion } = useContext(ProportionContext);

	const liquidityRef = useRef(null);
	const poolsRef = useRef(null);
	const dashboardRef = useRef(null);

	const { titles, descriptions } = advantagesData;

	useEffect(() => {
		if (liquidityRef.current && poolsRef.current && dashboardRef.current) {
			mediaIntersection(
				[liquidityRef.current, poolsRef.current, dashboardRef.current],
				proportion,
				'x'
			);
		}
	}, [proportion, liquidityRef, poolsRef, dashboardRef]);

	return (
		<section aria-label='Advantages section' id='advantages' className='advantages | layer-adv'>
			<div className='advantages-content'>
				<img
					style={sectionNameIntersection(proportion)}
					className='section-name'
					src={sectionName}
					alt='Uppercase text Advantages, section name'
				/>
				<h2 className='advantages-title | fs-400 fw-black'>
					{textContentChanger(titles, proportion)}
				</h2>
				<div className='advantages-media-group'>
					<img
						ref={liquidityRef}
						className='advantages-media-liquidity'
						src={liquidity}
						alt='A transparent glass jar half full of coins symbolizes cryptocurrency'
					/>
					<img
						ref={poolsRef}
						className='advantages-media-pools'
						src={pools}
						alt='An orange bag with a dollar sign in front and banknotes falling around'
					/>
					<img
						ref={dashboardRef}
						className='advantages-media-dashboard'
						src={dashboard}
						alt='Rectangular transparent panel with multi-colored charts'
					/>
				</div>
				<p className='advantages-description | fs-300 fw-light'>
					{textContentChanger(descriptions, proportion)}
				</p>
			</div>
		</section>
	);
}

export default Advantages;
