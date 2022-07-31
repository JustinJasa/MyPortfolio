import React, { Fragment } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import css from './hero.module.css';
import { useGlobalContext } from "../../contexts/context";


export default function Hero() {

  const { theme } = useGlobalContext();

  return (
    <div className={css.container} id={theme}>
      <div >
        <span className={css.intro}>Hi, my name is</span>
        <h3 className={css.justin}>Justin Jasa.</h3>
        <h3 className={css.tag}><span>A Software Engineer.</span></h3>
        <p className={css.desc}>
          I’m a software engineer specialising in front-end development. I am
          focused on building accessible and human-centric products that provide
          exceptional digital experiences.
        </p>
        <div className={css.button}>
          <Link href={"/projects"} passHref><span>CHECK OUT MY WORK</span></Link>
        </div>
      </div>
    </div>
  );
}


