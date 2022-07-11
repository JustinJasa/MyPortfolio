import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero/hero";
import Skills from "../components/skill";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Socials from "../components/SocialIcons/socials";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Socials />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
