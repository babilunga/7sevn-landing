import '../../styles/components/advantages.css';

import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import liquidity from '../../assets/img/advantages/liquidity.png';
import dashboard from '../../assets/img/advantages/dashboard.png';
import pools from '../../assets/img/advantages/pools.png';

function Advantages() {
	const HORIZONTAL_DISTANCE = 200;
	const LOWER_LIMIT = 0.25;
	const UPPER_LIMIT = 0.75;

	const { proportion } = useContext(ProportionContext);

	function changeTitle() {
		if (proportion <= LOWER_LIMIT) {
			return 'Best liquidity for GamiFi';
		} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
			return 'Most profitable pools';
		} else if (proportion >= UPPER_LIMIT) {
			return 'Useful Dashboard';
		}
	}

	function changeDescription() {
		if (proportion <= LOWER_LIMIT) {
			return 'Trade utility tokens of gaming projects with lowest slippage and transaction costs';
		} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
			return 'Earn more with farmming pools with highest APR for gaming projects';
		} else if (proportion >= UPPER_LIMIT) {
			return 'Simple way to track your earnings from all sources on Sevn';
		}
	}

	function mediaIntersection(target) {
		switch (target) {
			case 'liquidity':
				if (proportion <= LOWER_LIMIT) {
					return {
						transform: `translateX(-50%) rotate(0deg)`,
					};
				} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
					return {
						transform: `translateX(calc(-50% - ${HORIZONTAL_DISTANCE - 50}%)) rotate(15deg)`,
						filter: 'saturate(0.7)',
						opacity: 0.7,
					};
				} else if (proportion >= UPPER_LIMIT) {
					return {
						transform: `translateX(calc(-50% - ${HORIZONTAL_DISTANCE + 50 + 30}%)) rotate(15deg)`,
						filter: 'saturate(0.2)',
						opacity: 0.2,
					};
				}
				break;
			case 'pools':
				if (proportion <= LOWER_LIMIT) {
					return {
						transform: `translateX(calc(-50% + ${HORIZONTAL_DISTANCE - 50}%)) rotate(15deg)`,
						filter: 'saturate(0.7)',
						opacity: 0.7,
					};
				} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
					return {
						transform: `translateX(-50%) rotate(0deg)`,
					};
				} else if (proportion >= UPPER_LIMIT) {
					return {
						transform: `translateX(calc(-50% - ${HORIZONTAL_DISTANCE - 50}%)) rotate(15deg)`,
						filter: 'saturate(0.7)',
						opacity: 0.7,
					};
				}
				break;
			case 'dashboard':
				if (proportion <= LOWER_LIMIT) {
					return {
						transform: `translateX(calc(-50% + ${HORIZONTAL_DISTANCE + 50 + 30}%)) rotate(15deg)`,
						filter: 'saturate(0.2)',
						opacity: 0.2,
					};
				} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
					return {
						transform: `translateX(calc(-50% + ${HORIZONTAL_DISTANCE - 50}%)) rotate(15deg)`,
						filter: 'saturate(0.7)',
						opacity: 0.7,
					};
				} else if (proportion >= UPPER_LIMIT) {
					return { transform: `translateX(-50%) rotate(0deg)` };
				}
				break;
			default:
				break;
		}
	}

	return (
		<section
			aria-labelledby='advantages-section-title'
			id='advantages'
			className='advantages | layer-adv'>
			<div className='advantages-content'>
				<h2 id='advantages-section-title' className='advantages-title | fs-400 fw-bold'>
					{changeTitle()}
				</h2>
				<div className='advantages-media-group'>
					<img
						style={mediaIntersection('liquidity')}
						className='advantages-media-liquidity'
						src={liquidity}
						alt='A transparent glass jar half full of coins symbolizes cryptocurrency'
					/>
					<img
						style={mediaIntersection('pools')}
						className='advantages-media-pools'
						src={pools}
						alt='An orange bag with a dollar sign in front and banknotes falling around'
					/>
					<img
						style={mediaIntersection('dashboard')}
						className='advantages-media-dashboard'
						src={dashboard}
						alt='Rectangular transparent panel with multi-colored charts'
					/>
				</div>
				<p className='advantages-description | fs-300'>{changeDescription()}</p>
			</div>
		</section>
	);
}

export default Advantages;
