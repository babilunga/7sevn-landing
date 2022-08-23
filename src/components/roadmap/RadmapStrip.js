import descending from '../../assets/img/roadmap/descending.svg';
import ascending from '../../assets/img/roadmap/ascending.svg';

function RoadmapStrip({ array, index }) {
	return (
		index <= array.length - 2 && (
			<img
				className='roadmap-stripline'
				src={index % 2 === 0 ? descending : ascending}
				alt='descending rainbow curvy strip'
			/>
		)
	);
}

export default RoadmapStrip;
