import React, {useState, useEffect} from 'react';

import styles from './Navbar.module.scss';
import {arrowUp} from '../../assets';

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [height, setHeight] = useState(window.scrollY);

	const clickHandler = () => {
		if (window.innerWidth < 768) setActive(prev => !prev);
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setHeight(window.scrollY);
		});
	}, []);

	return (
		<nav className={`${styles.navbar} ${height > 1 ? styles.sticked : ''}`}>
			<a href='#' className={styles.logo}>
				C
			</a>
			<ul className={`${styles.menu} ${active ? styles.menu_active : ''}`}>
				<li>
					<a href='#home' onClick={clickHandler}>
						Activities
					</a>
				</li>
				<li>
					<a href='#technologies' onClick={clickHandler}>
						Technology
					</a>
				</li>
				<li>
					<a href='#rd' onClick={clickHandler}>
						R&D
					</a>
				</li>
				<li>
					<a href='#community' onClick={clickHandler}>
						Community
					</a>
				</li>
				<li>
					<button className={styles.career}>
						Career
						<img src={arrowUp} alt='career' />
					</button>
				</li>
			</ul>
			<div
				className={`${styles.hamburger} ${
					active ? styles.hamburger_active : ''
				}`}
				onClick={() => setActive(prev => !prev)}
			>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
		</nav>
	);
};

export default Navbar;
