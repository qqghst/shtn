import React from 'react';
import styles from './styles.module.scss';
import BigButton from '@/ui/big-button';

const Masthead = () => {
	return (
		<section className={styles.masthead}>
			<div className={styles.masthead__container}>
				<BigButton>Регистрация</BigButton>
			</div>
		</section>
	);
};

export default Masthead;
