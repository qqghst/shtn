import React from 'react';
import styles from './styles.module.scss';
import Masthead from '../1-masthead';

const Container: React.FC = () => {
	return (
		<div className={styles.container}>
			<Masthead />
		</div>
	);
};

export default Container;
