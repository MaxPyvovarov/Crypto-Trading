import React from 'react';
import {scheme, arrowDown, scroll} from '../../assets';
import {motion} from 'framer-motion';
import {Animation} from '../../main';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<motion.section
			id='home'
			className={styles.home}
			initial='hidden'
			whileInView='visible'
			transition={{duration: 1}}
			variants={Animation}
			viewport={{once: true}}
		>
			<div>
				<div className={styles.heading}>
					<h3>Crypto Trading</h3>
					<h1>
						Engineers Meet <span className='text-gradient'>Traders _</span>
					</h1>
					<p>
						Advanced crypto algorithmic trading and efficient
						<br /> cross-chain execution, at scale.
					</p>
				</div>
			</div>
			<img className={styles.scheme} src={scheme} alt='scheme' />
			<div className={styles.btn_wrapper}>
				<a href='#technologies' className={styles.btn}>
					Learn more{' '}
					<div className={styles.arrow}>
						<img src={arrowDown} alt='learn more'></img>
					</div>
				</a>
			</div>
			<a href='#technologies' className={styles.scroll}>
				<img src={scroll} alt='scroll down' />
			</a>
		</motion.section>
	);
};

export default Home;
