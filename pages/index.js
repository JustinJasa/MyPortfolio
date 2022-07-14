import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/hero";
import Skills from "../components/skill";
import Contact from "../components/contact";
import Socials from "../components/SocialIcons/socials";
import { useGlobalContext } from "../contexts/context";
import About from "../components/AboutMe/aboutme";
import Projs from '../components/ProjectSection/projs'

export default function Home() {

	const { toggleTheme, theme } = useGlobalContext();

  return (
    <div className={styles.main} id={theme}>
      <Hero />
      <Socials />
      <About/>
      <Skills />
      <Projs />
      <Contact />
    </div>
  );
}
