import '../../styles/app.css';

import { useState, useLayoutEffect } from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Advantages from '../advantages/Advantages';

import ScrollContext from '../../context/ScrollContext';
import StickyView from '../sticky-view/StickyView';
import Why from '../why/Why';
import Roadmap from '../roadmap/Roadmap';

import { isWindowSmall } from '../../helpers/utilities';

function App() {
	const [scrollingElement, setScrollingElement] = useState(null);
	const [currentSection, setCurrentSection] = useState(0);

	function scrollingElRef(ref) {
		setScrollingElement(ref);
	}

	useLayoutEffect(() => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}, []);

	return (
		<div className='app'>
			<ScrollContext.Provider value={{ scrollingElement }}>
				<div className='scrolling-view' ref={scrollingElRef}>
					<div id='top'></div>
					<Header currentSection={currentSection} />
					<StickyView height={'120vh'}>{<Hero />}</StickyView>
					<div id='advantages'></div>
					<StickyView height={isWindowSmall(880) ? '350vh' : '180vh'}>
						{<Advantages setCurrentSection={setCurrentSection} />}
					</StickyView>
					<div id='why-sevn'></div>
					<StickyView height={isWindowSmall(880) ? '350vh' : '180vh'}>
						{<Why setCurrentSection={setCurrentSection} />}
					</StickyView>
					<div id='roadmap'></div>
					<StickyView height={isWindowSmall() ? 'auto' : '270vh'}>
						{<Roadmap setCurrentSection={setCurrentSection} />}
					</StickyView>
				</div>
			</ScrollContext.Provider>
		</div>
	);
}

export default App;
