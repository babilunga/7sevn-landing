import '../../styles/components/roadmap.css';

import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

import descending from '../../assets/img/roadmap/descending.svg';
import ascending from '../../assets/img/roadmap/ascending.svg';
import sectionName from '../../assets/img/sections/roadmap.svg';

import RoadmapCard from './RoadmapCard';

import { roadmapData } from '../../data/data.js';
import { sectionNameIntersection } from '../../helpers/utilities';

function Roadmap() {
	const { proportion } = useContext(ProportionContext);
	const { cardsData } = roadmapData;

	return (
		<section
			id='roadmap'
			className='roadmap | layer-roadmap'
			aria-labelledby='roadmap-section-title'>
			<img
				style={sectionNameIntersection(proportion)}
				className='section-name'
				src={sectionName}
				alt='Uppercase text Why, section name'
			/>
			<div className='roadmap-content' style={{ transform: `translateX(-${proportion * 75}%)` }}>
				{cardsData.map(({ image, title, steps }, index, array) => (
					<div key={index + 99}>
						<RoadmapCard image={image} title={title} steps={steps} />
						{index <= array.length - 2 && (
							<img
								className='roadmap-stripline'
								src={index % 2 === 0 ? descending : ascending}
								alt='descending rainbow curvy strip'
							/>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default Roadmap;
