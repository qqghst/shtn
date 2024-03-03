import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Icon from './icon';

const PreNavbar: React.FC = () => {
	return (
		<div className={styles.preNavbar}>
			<div className={styles.center}>
				<div>
					<Icon imgSrc='/pre-navbar/phone.svg' />
					<Link href='tel:+79001111111'>
						<span>+7 (985) 971 11 11</span>
					</Link>
				</div>
				<div>
					<Icon imgSrc='/pre-navbar/mail.svg' />
					<Link href='mailto:pochtaschool@gmail.com'>
						<span>pochtaschool@gmail.com</span>
					</Link>
				</div>
			</div>
			<div className={styles.right}>
				<Icon imgSrc='/pre-navbar/telegram.svg' />
				<Icon imgSrc='/pre-navbar/whatsapp.svg' />
			</div>
		</div>
	);
};

export default PreNavbar;
