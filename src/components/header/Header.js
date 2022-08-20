/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../styles/components/header.css';
import logo_sevn from '../../assets/img/logo/sevn.svg';
import { useState, useRef, useEffect } from 'react';

function Header() {
	const [isHoveredLogo, setIsHoveredLogo] = useState(false);
	const [isHamburgerPressed, setIsHamburgerPressed] = useState(false);
	const buttonRef = useRef(null);

	useEffect(() => {
		buttonRef.current.classList.toggle('burger-menu-active');
	}, [isHamburgerPressed]);

	function burgerMenuTrigger() {
		setIsHamburgerPressed(prev => !prev);
	}

	return (
		<header className='header'>
			<div className='container header-content | flex'>
				<a
					onMouseEnter={() => setIsHoveredLogo(true)}
					onMouseLeave={() => setIsHoveredLogo(false)}
					href='#hero'
					className='header-logo'>
					<div className='logo--number'>
						<div className={`logo--horizontal-bar ${isHoveredLogo ? 'logo-in' : 'logo-out'}`}></div>
						<div className='logo--vertical-bar'></div>
					</div>
					<img src={logo_sevn} alt='It is a logo text says SEVN' />
				</a>
				<div
					className='burger-menu-trigger'
					role='button'
					ref={buttonRef}
					onClick={burgerMenuTrigger}>
					<span className='burger-line-first'></span>
					<span className='burger-line-second'></span>
					<span className='burger-line-third'></span>
				</div>
				<nav className='header-navigation'>
					<ul my-role='nav' className='navigation-list | flex'>
						<li>
							<a className='nav-link' href='#advantages'>
								Advantages
							</a>
						</li>
						<li>
							<a className='nav-link' href='#why-sevn'>
								Why Sevn
							</a>
						</li>
						<li>
							<a className='nav-link' href='#roadmap'>
								Raodmap
							</a>
						</li>
					</ul>
					<div className='header-media | flex'>
						<a href='#' className='header-media-item media-telegram'></a>
						<a href='#' className='header-media-item media-medium'></a>
						<a href='#' className='header-media-item media-twitter'></a>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
