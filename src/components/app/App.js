import '../../styles/app.css';

import { useState } from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Advantages from '../advantages/Advantages';

import ScrollContext from '../../context/ScrollContext';
import StickyView from '../sticky-view/StickyView';
import Why from '../why/Why';

function App() {
	const [scrollingElement, setScrollingElement] = useState(null);

	function scrollingElRef(ref) {
		setScrollingElement(ref);
	}

	return (
		<div className='app'>
			<Header />
			<ScrollContext.Provider value={{ scrollingElement }}>
				<div className='scrolling-view' ref={scrollingElRef}>
					<StickyView height={'130vh'}>{<Hero />}</StickyView>
					<StickyView height={'400vh'}>{<Advantages />}</StickyView>
					<StickyView height={'400vh'}>{<Why />}</StickyView>
				</div>
			</ScrollContext.Provider>
		</div>
	);
}

export default App;
