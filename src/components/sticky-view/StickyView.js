import './sticky-view.css';

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
			setProportion(result);
			console.log(result);
		} else {
			const viewHeight = containerRect.height;
			const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
			setProportion(result);
			console.log(result);
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
			<div className='sticky-view' ref={elRef} style={{ height: height }}>
				<div className='sticky-view-sticky'>{children}</div>
			</div>
		</ProportionContext.Provider>
	);
}
