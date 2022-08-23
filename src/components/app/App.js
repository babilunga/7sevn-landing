import '../../styles/app.css';

import { useState } from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Advantages from '../advantages/Advantages';

import ScrollContext from '../../context/ScrollContext';
import StickyView from '../sticky-view/StickyView';
import Why from '../why/Why';
import Roadmap from '../roadmap/Roadmap';

function App() {
	const [scrollingElement, setScrollingElement] = useState(null);

	function scrollingElRef(ref) {
		setScrollingElement(ref);
	}

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
					<StickyView height={'250vh'}>{<Roadmap />}</StickyView>
				</div>
			</ScrollContext.Provider>
		</div>
	);
}

export default App;
