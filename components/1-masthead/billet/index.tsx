import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ButtonBorder from '@/ui/button-border';

const Billet: React.FC = () => {
	return (
		<div className={styles.billet}>
			<div className={styles.content}>
				<div className={styles.left}>
					<h1>Выездные школы</h1>
					<div>
						<h1>ШТЕРН</h1>
						<h3>30 апреля - 8 мая для 1-11 классов и выпускников</h3>
					</div>
					<h3>Эффект 3 месяцев занятий всего за 8 дней</h3>
					<div className={styles.buttonBorder}>
						<ButtonBorder>Регистрация</ButtonBorder>
					</div>
				</div>

				<div className={styles.right}>
					<Image src='/1-masthead/pinguin.webp' alt='pinguin' width={1364 / 2} height={1364 / 2} />
				</div>
			</div>
		</div>
	);
};

export default Billet;
