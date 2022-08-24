import '../../styles/app.css';

import { useState, useLayoutEffect } from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Advantages from '../advantages/Advantages';

import ScrollContext from '../../context/ScrollContext';
import StickyView from '../sticky-view/StickyView';
import Why from '../why/Why';
import Roadmap from '../roadmap/Roadmap';

import { isWindowLessThan } from '../../helpers/intersectionUtilities';
import calcActualViewportHeight from '../../helpers/calcActualViewportHeight';
import SectionAncor from './SectionAncor';

function App() {
	const [scrollingElement, setScrollingElement] = useState(null);
	const [currentSection, setCurrentSection] = useState(0);

	function scrollingElRef(ref) {
		setScrollingElement(ref);
	}

	useLayoutEffect(() => {
		calcActualViewportHeight();
	}, []);

	return (
		<div className='app'>
			<ScrollContext.Provider value={{ scrollingElement }}>
				<div className='scrolling-view' ref={scrollingElRef}>
					<SectionAncor id={'top'} />

					<Header currentSection={currentSection} />
					<StickyView height={'120vh'}>{<Hero />}</StickyView>
					<SectionAncor id={'advantages'} />

					<StickyView height={isWindowLessThan(880) ? '350vh' : '180vh'}>
						{<Advantages setCurrentSection={setCurrentSection} />}
					</StickyView>
					<SectionAncor id={'why-sevn'} />

					<StickyView height={isWindowLessThan(880) ? '350vh' : '180vh'}>
						{<Why setCurrentSection={setCurrentSection} />}
					</StickyView>
					<SectionAncor id={'roadmap'} />

					<StickyView height={isWindowLessThan(720) ? 'auto' : '270vh'}>
						{<Roadmap setCurrentSection={setCurrentSection} />}
					</StickyView>
				</div>
			</ScrollContext.Provider>
		</div>
	);
}

export default App;
