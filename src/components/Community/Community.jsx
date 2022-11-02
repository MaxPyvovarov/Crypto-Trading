import React from 'react';

import styles from './Community.module.scss';
import {form1, form2} from '../../assets';

const Community = () => {
	return (
		<section id='community' className={styles.community}>
			<div>
				<div className={styles.formWrapper}>
					<div className={`${styles.form} ${styles.spot}`}>
						<img src={form1} alt='background' />
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
						<h5>Mobile App</h5>
						<p>
							Trade anytime,
							<span className={styles.highlight}> anywhere</span>
						</p>
						<a href='#'>Learn more</a>
						<img src={form2} alt='background' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Community;
