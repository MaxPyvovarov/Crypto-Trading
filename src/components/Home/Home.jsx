import React from 'react';
import {scheme, arrowDown, scroll} from '../../assets';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<section className={styles.home}>
			<div>
				<div className={styles.heading}>
					<h3>Crypto Trading</h3>
					<h1>
						Engineers Meet <br />
						<span className='text-gradient'>Traders _</span>
					</h1>
					<p>
						Advanced crypto algorithmic trading and efficient
						<br /> cross-chain execution, at scale.
					</p>
				</div>
				<img className={styles.scheme} src={scheme} alt='scheme' />
			</div>
			<div className={styles.btnWrapper}>
				<button className={styles.btn}>
					Learn more{' '}
					<div className={styles.arrow}>
						<img src={arrowDown} alt='learn more'></img>
					</div>
				</button>
			</div>
			<img className={styles.scroll} src={scroll} alt='scroll down' />
		</section>
	);
};

export default Home;
