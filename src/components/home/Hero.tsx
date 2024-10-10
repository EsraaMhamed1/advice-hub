import Image from 'next/image';
import React from 'react';
import { TiTick } from 'react-icons/ti';
import twin from '../../../public/twin.jpg';
import styles from './hero.module.css';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.heroLeft}>
				<h1 className={styles.title}> ADVICE HUB</h1>
				<p className={styles.desc}>
					Benefits of Using Advice Hub Evrey Day & Find Aevice You Need{' '}
				</p>
				<div className={styles.services}>
					<div className={styles.serviceItem}>
						<TiTick />
						Find your advice here
					</div>
					<div className={styles.serviceItem}>
						<TiTick />
						Save your fav adevices
					</div>
					<div className={styles.serviceItem}>
						<TiTick />
						Discover new advice
					</div>
				</div>
			</div>
			<div>
				<Image src={twin} alt='cloud' width={500} height={500} />
			</div>
		</div>
	);
};

export default Hero;
