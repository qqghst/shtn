import React from 'react';
import styles from './styles.module.scss';
import IBigButtonProps from './interface';

const BigButton: React.FC<IBigButtonProps> = ({ children }) => {
	return (
		<button className={styles.bigButton}>
			<span>{children}</span>
		</button>
	);
};

export default BigButton;
