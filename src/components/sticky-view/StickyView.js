import { useContext, useEffect, useRef, useState } from 'react';
import ScrollContext from '../../context/ScrollContext';
import ProportionContext from '../../context/ProportionContext';

export default function StickyView(props) {
	const { height, children } = props;
	const elRef = useRef();
	const { scrollingElement } = useContext(ScrollContext);
	const [proportion, setProportion] = useState(null);

	function onScroll(container) {
		const containerRect = container.getBoundingClientRect();
		const selfRect = elRef.current.getBoundingClientRect();
		const offTop = containerRect.y - selfRect.y;

		if (containerRect.height < selfRect.height) {
			const viewHeight = selfRect.height - containerRect.height;
			const result = offTop / viewHeight;
			console.log(result);
			setProportion(result);
		} else {
			const viewHeight = containerRect.height;
			const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
			console.log(result);
			setProportion(result);
		}
	}

	useEffect(() => {
		if (scrollingElement) {
			scrollingElement.addEventListener('scroll', e => onScroll(e.target));
			onScroll(scrollingElement);
		}
		return () => scrollingElement?.removeEventListener('scroll', onScroll);
	}, [scrollingElement]);

	return (
		<ProportionContext.Provider value={{ proportion }}>
			<div className='sticky-view' ref={elRef} style={{ height, position: 'relative' }}>
				<div
					className='sticky-view-content'
					style={{
						position: 'sticky',
						top: 0,
						width: '100%',
						height: '100vh',
					}}>
					{children}
				</div>
			</div>
		</ProportionContext.Provider>
	);
}
