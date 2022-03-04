import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import Skills from '../components/skill';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
	return (
		<div className={styles.container}>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
