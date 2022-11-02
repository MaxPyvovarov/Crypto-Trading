import React from 'react';
import {vector} from '../../assets';

import styles from './Scheme.module.scss';
import {motion} from 'framer-motion';
import {Animation} from '../../main';

const Scheme = () => (
	<motion.section
		id='rd'
		className={styles.rd}
		initial='hidden'
		whileInView='visible'
		transition={{duration: 1}}
		variants={Animation}
		viewport={{once: true}}
	>
		<div className={styles.scheme}>
			<div className={styles.form__1}>
				<p>Artificial Intelligence</p>
				<p>Storage Networks</p>
				<p>P2P Networks</p>
			</div>
			<div className={styles.form__2}>
				<p>Public Data</p>
				<p>Encrypted Private Data *</p>
			</div>
			<div className={styles.form__3}>
				<figure>
					<img src={vector} alt='vector' />
					<figcaption>
						Easy to use digital service and exclusive personal service for our
						active traders
					</figcaption>
				</figure>
				<div>
					<p>Indexing</p>
					<p>API</p>
				</div>
				<div className={styles.arrows}>
					<div></div>
					<div></div>
					<span className={styles.consumers}>Consumers</span>
				</div>
			</div>
		</div>
		<div className={styles.caption}>
			<h2>
				The future Cryptocurrency trading{' '}
				<span className='text-gradient'>platform</span>
			</h2>
			<p>
				Take advantage of time and sales, futures spread orders and depth trader
				— plus, trade directly from charts.
			</p>
			<a href='#'>Learn more</a>
		</div>
	</motion.section>
);

export default Scheme;
