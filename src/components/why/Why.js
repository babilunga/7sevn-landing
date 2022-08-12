import { useContext } from 'react';
import ProportionContext from '../../context/ProportionContext';

function Why() {
	const { proportion } = useContext(ProportionContext);

	return (
		<section id='why-sevn'>
			<div
				style={{
					height: '100vh',
					width: '100vw',
					textAlign: 'center',
					display: 'grid',
					placeItems: 'center',
					fontSize: '3rem',
					textTransform: 'uppercase',
					fontWeight: 'bold',
				}}>
				<span
					style={{
						opacity: 1 - proportion * 2,
						letterSpacing: 4,
						transform: proportion < 0 ? '' : `scale(${1 + proportion * 10})`,
					}}>
					Whyyyyy?????
				</span>
			</div>
		</section>
	);
}

export default Why;
