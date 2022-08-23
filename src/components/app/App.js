import '../../styles/app.css';

import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Advantages from '../advantages/Advantages';

import ScrollContext from '../../context/ScrollContext';
import StickyView from '../sticky-view/StickyView';
import Why from '../why/Why';
import Roadmap from '../roadmap/Roadmap';
import useWindowResizeObserve from '../../hooks/useWindowResizeObserve';

function App() {
	const [scrollingElement, setScrollingElement] = useState(null);

	function scrollingElRef(ref) {
		setScrollingElement(ref);
	}

	const isSmallScreen = useWindowResizeObserve(720);

	return (
		<div className='app'>
			<ScrollContext.Provider value={{ scrollingElement }}>
				<div className='scrolling-view' ref={scrollingElRef}>
					<div id='top'></div>
					<Header />
					<StickyView height={'120vh'}>{<Hero />}</StickyView>
					<div id='advantages'></div>
					<StickyView height={'180vh'}>{<Advantages />}</StickyView>
					<div id='why-sevn'></div>
					<StickyView height={'180vh'}>{<Why />}</StickyView>
					<div id='roadmap'></div>
					<StickyView height={isSmallScreen ? 'auto' : '250vh'}>{<Roadmap />}</StickyView>
				</div>
			</ScrollContext.Provider>
		</div>
	);
}

export default App;
