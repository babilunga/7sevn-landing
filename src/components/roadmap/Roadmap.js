import '../../styles/components/roadmap.css';

import { useContext, useState, useEffect } from 'react';
import ProportionContext from '../../context/ProportionContext';

import sectionName from '../../assets/img/sections/roadmap.svg';

import { roadmapData } from '../../data/data.js';
import {
	sectionNameIntersection,
	roadmapIntersection,
	isWindowWidthEqualOrLessThan,
} from '../../helpers/utilities';

import RoadmapCard from './RoadmapCard';
import RoadmapStrip from './RadmapStrip';

function Roadmap() {
	const { proportion } = useContext(ProportionContext);
	const { cardsData } = roadmapData;
	const [isTriggered, setIsTriggered] = useState(false);

	useEffect(() => {
		setIsTriggered(isWindowWidthEqualOrLessThan(720));

		window.onresize = () => {
			setIsTriggered(isWindowWidthEqualOrLessThan(720));
		};

		return (window.onresize = () => {});
	}, []);

	return (
		<section className='roadmap | layer-roadmap' aria-labelledby='roadmap-section-title'>
			<img
				style={sectionNameIntersection(proportion)}
				className='section-name'
				src={sectionName}
				alt='Uppercase text Why, section name'
			/>
			<div className='roadmap-content | container'>
				<div className='roadmap-cards' style={!isTriggered ? roadmapIntersection(proportion) : {}}>
					{cardsData.map(({ image, title, steps }, index, array) => (
						<div key={index + 99} className='roadmap-card-bundle'>
							<RoadmapCard image={image} title={title} steps={steps} />
							<RoadmapStrip array={array} index={index} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Roadmap;
