import React, { Fragment } from "react";
import { Popover, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import css from './hero.module.css';
import { useGlobalContext } from "../../contexts/context";


const svg = () => { 
  return (
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  )
}



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
          <Link href={"/projects"}><span>CHECK OUT MY WORK</span></Link>
        </div>
      </div>
    </div>
  );
}


