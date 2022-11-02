import React, {useState, useEffect} from 'react';

import styles from './Community.module.scss';
import {form1, form1Mobile, form2} from '../../assets';
import {motion} from 'framer-motion';
import {Animation} from '../../main';

const Community = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
	}, []);

	return (
		<motion.section
			id='community'
			className={styles.community}
			initial='hidden'
			whileInView='visible'
			transition={{duration: 1}}
			variants={Animation}
			viewport={{once: true}}
		>
			<div>
				<div className={styles.formWrapper}>
					<div className={`${styles.form} ${styles.spot}`}>
						<img src={width > 1200 ? form1 : form1Mobile} alt='background' />
						<div>
							<h5>Spot & Margin</h5>
							<p>
								Trade <span className='text-gradient'>200+</span> pairs with up
								to 10x leverage
							</p>
							<a href='#'>Learn more</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.form__right}>
				<div className={styles.form__top}>
					<div className={styles.formWrapper}>
						<div className={`${styles.form} ${styles.derivatives}`}>
							<h5>Derivatives</h5>
							<p>
								<span className={styles.highlight}>40+</span> quarterly futures
								and contracts
							</p>
							<a href='#'>Learn more</a>
						</div>
					</div>
					<div className={styles.formWrapper}>
						<div className={`${styles.form} ${styles.arena}`}>
							<h5>Trading Arena</h5>
							<p>
								Prize pools worth up to
								<span className={styles.highlight}> USD 1,000,000</span>
							</p>
							<a href='#'>Learn more</a>
						</div>
					</div>
				</div>
				<div className={styles.formWrapper}>
					<div className={`${styles.form} ${styles.mobileApp}`}>
						<div>
							<h5>Mobile App</h5>
							<p>
								Trade anytime,
								<span className={styles.highlight}> anywhere</span>
							</p>
							<a href='#'>Learn more</a>
						</div>
						<img src={form2} alt='background' />
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Community;
