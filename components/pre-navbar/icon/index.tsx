import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import IIConProps from './interface';

const Icon: React.FC<IIConProps> = ({ imgSrc }) => {
	return (
		<div className={styles.iconContainer}>
			<Image src={imgSrc} alt='icon-phone' width={25 / 2} height={25 / 2} />
		</div>
	);
};

export default Icon;
