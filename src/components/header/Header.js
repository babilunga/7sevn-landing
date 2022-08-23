/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../styles/components/header.css';
import logo_sevn from '../../assets/img/logo/sevn.svg';
import { useState, useRef, useEffect } from 'react';
import { headerData } from '../../data/data';
import { links } from '../../data/data';

function Header({ currentSection }) {
	const { navigation } = headerData;
	const [isHoveredLogo, setIsHoveredLogo] = useState(false);
	const [isHamburgerPressed, setIsHamburgerPressed] = useState(false);
	const buttonRef = useRef(null);

	function burgerMenuTrigger(to) {
		if (to === 'off') {
			setIsHamburgerPressed(false);
		} else {
			setIsHamburgerPressed(prev => !prev);
		}
	}

	useEffect(() => {}, [currentSection]);

	return (
		<header className='header'>
			<div className='container header-content | flex'>
				<a
					onMouseEnter={() => setIsHoveredLogo(true)}
					onMouseLeave={() => setIsHoveredLogo(false)}
					href='#top'
					className='header-logo'>
					<div className='logo--number'>
						<div className={`logo--horizontal-bar ${isHoveredLogo ? 'logo-in' : 'logo-out'}`}></div>
						<div className='logo--vertical-bar'></div>
					</div>
					<img src={logo_sevn} alt='It is a logo text says SEVN' />
				</a>
				<button
					className={`burger-menu-trigger ${isHamburgerPressed ? 'burger-menu-active' : ''}`}
					ref={buttonRef}
					onClick={burgerMenuTrigger}>
					<span className='burger-line-first'></span>
					<span className='burger-line-second'></span>
					<span className='burger-line-third'></span>
				</button>
				<nav
					className='header-navigation'
					data-open={isHamburgerPressed}
					onClick={() => burgerMenuTrigger('off')}>
					<ul my-role='nav' className='navigation-list | flex'>
						{navigation.map(({ title, id }, index) => (
							<li key={id}>
								<a className='nav-link' data-section={currentSection === index + 1} href={id}>
									{title}
								</a>
							</li>
						))}
					</ul>
					<div className='header-media | flex'>
						<a
							href={links.discord}
							target='_blank'
							rel='noreferrer'
							className='header-media-item media-discord'></a>
						<a
							href={links.medium}
							target='_blank'
							rel='noreferrer'
							className='header-media-item media-medium'></a>
						<a
							href={links.twitter}
							target='_blank'
							rel='noreferrer'
							className='header-media-item media-twitter'></a>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
