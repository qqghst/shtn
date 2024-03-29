import React from 'react';
import styles from './styles.module.scss';
import IButtonBorderProps from './interface';

const ButtonBorder: React.FC<IButtonBorderProps> = ({children}) => {
	return (
		<button className={styles.buttonBorder}>
			<span>{children}</span>
		</button>
	);
};

export default ButtonBorder;
