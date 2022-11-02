import React from 'react';

import styles from './Technologies.module.scss';
import {chart} from '../../assets';
import {motion} from 'framer-motion';
import {Animation} from '../../main';

const Chart = () => (
	<motion.section
		id='technologies'
		className={styles.technologies}
		initial='hidden'
		whileInView='visible'
		transition={{duration: 1}}
		variants={Animation}
		viewport={{once: true}}
	>
		<div className={styles.heading}>
			<h3>About us</h3>
			<h1>Global technologies</h1>
		</div>
		<div className={styles.content}>
			<div className={styles.chart}>
				<img src={chart} alt='chart' />
			</div>
			<div className={styles.caption}>
				<div className={styles.caption__level}>
					<h4>Level 1</h4>
					<p>
						Deploy a multi-legged futures strategy by simultaneously placing
						orders to buy and sell from the same order ticket.
					</p>
					<p>
						Place and manage orders based on the Level 2 order book, which
						provides a live display of all bids and offers waiting to be
						executed.
					</p>
				</div>
				<button className={styles.btn}>Start now</button>
			</div>
		</div>
	</motion.section>
);

export default Chart;
