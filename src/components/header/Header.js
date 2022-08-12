/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../../styles/components/header.css';
import logo_sevn from '../../assets/img/logo/sevn.svg';

function Header() {
	return (
		<header className='header'>
			<div className='container header-content | flex'>
				<a href='#hero' className='header-logo'>
					<div className='logo--number'>
						<div className='logo--horizontal-bar'></div>
						<div className='logo--vertical-bar'></div>
					</div>
					<img src={logo_sevn} alt='It is a logo text says SEVN' />
				</a>
				<nav className='header-navigation'>
					<ul my-role='list' className='navigation-list | flex'>
						<li>
							<a href='#advantages'>Advantages</a>
						</li>
						<li>
							<a href='#why-sevn'>Why Sevn</a>
						</li>
						<li>
							<a href='#roadmap'>Raodmap</a>
						</li>
					</ul>
				</nav>
				<div className='header-media | flex'>
					<a href='#' className='header-media-item media-telegram'></a>
					<a href='#' className='header-media-item media-medium'></a>
					<a href='#' className='header-media-item media-twitter'></a>
				</div>
			</div>
		</header>
	);
}

export default Header;
