import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/hero";
import Skills from "../components/skill";
import Socials from "../components/SocialIcons/socials";
import { useGlobalContext } from "../contexts/context";
import About from "../components/AboutMe/aboutme";
import Projs from '../components/Work/work';
import Contact from "../components/Contact/contact";

export default function Home() {

	const { toggleTheme, theme } = useGlobalContext();

  return (
    <div className={styles.main} id={theme}>
      <Hero />
      <About/>
      <Skills />
      <Projs />
      <Contact />
    </div>
  );
}
