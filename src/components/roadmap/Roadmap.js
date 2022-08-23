import '../../styles/components/roadmap.css';

import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import sectionName from '../../assets/img/sections/roadmap.svg';

import RoadmapCard from './RoadmapCard';

import { roadmapData } from '../../data/data.js';
import { sectionNameIntersection, roadmapIntersection } from '../../helpers/utilities';
import RoadmapStrip from './RadmapStrip';

function Roadmap() {
	const { proportion } = useContext(ProportionContext);
	const { cardsData } = roadmapData;

	return (
		<section className='roadmap | layer-roadmap' aria-labelledby='roadmap-section-title'>
			<img
				style={sectionNameIntersection(proportion)}
				className='section-name'
				src={sectionName}
				alt='Uppercase text Why, section name'
			/>
			<div className='roadmap-content | container'>
				<div className='roadmap-cards' style={roadmapIntersection(proportion)}>
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
