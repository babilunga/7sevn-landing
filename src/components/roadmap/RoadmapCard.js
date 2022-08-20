import cardBack from '../../assets/img/roadmap/card-back.png';

function RoadmapCard({ image, title, steps }) {
	return (
		<div className='roadmap-card'>
			<div className='card-content'>
				<img
					className='card-number'
					src={image}
					alt='count number of the card, number in the square with rounded corners'
				/>
				<h3 className='card-title | fs-200 fw-bold'>{title}</h3>
				<ul className='card-steps'>
					{steps.map((item, index) => (
						<li key={index} className='secondary'>
							{item}
						</li>
					))}
				</ul>
			</div>
			<img className='card-back' src={cardBack} alt='Grey dots in a round pattern' />
		</div>
	);
}

export default RoadmapCard;
