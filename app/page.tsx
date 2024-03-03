import React from 'react';
import styles from './page.module.scss';
import Container from '@/components/container';
import Masthead from '@/components/1-masthead';
import PreNavbar from '@/components/pre-navbar';

const Home = () => {
	return (
		<main>
			<PreNavbar />
			<Masthead />
		</main>
	);
};

export default Home;
