import React, {useState} from 'react';

import styles from './Navbar.module.scss';
import {arrowUp} from '../../assets';

const Navbar = () => {
	const [active, setActive] = useState(false);

	return (
		<nav className={styles.navbar}>
			<p className={styles.logo}>C</p>
			<ul className={`${styles.menu} ${active ? 'active' : ''}`}>
				<li>
					<a href='#'>Activities</a>
				</li>
				<li>
					<a href='#'>Technology</a>
				</li>
				<li>
					<a href='#'>R&D</a>
				</li>
				<li>
					<a href='#'>Community</a>
				</li>
				<li>
					<button className={styles.career}>
						Career
						<img src={arrowUp} alt='career' />
					</button>
				</li>
			</ul>
			<div
				className={`${styles.hamburger} ${active ? 'active' : ''}`}
				onClick={() => setActive(prev => !prev)}
			>
				<span className={styles.bar}></span>
				<span className={styles.bar}></span>
			</div>
		</nav>
	);
};

export default Navbar;