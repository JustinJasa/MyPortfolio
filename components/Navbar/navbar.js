import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";
import css from "./navbar.module.css";
import Link from "next/link";
import { Switch } from "antd";
import { useGlobalContext } from "../../contexts/context";
import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  const { toggleTheme, theme } = useGlobalContext();

  const [menu, setMenu] = useState(false);
  const [display, setDisplay] = useState(false);

  const triggerDisplay = () => {
    setMenu(!menu);
    setDisplay(!display);
  };

  return (
    <div className={`${css.navbar}`} id={theme}>
      <h2>
        <Link href={"/"}>JJ.</Link>
      </h2>
      {/* <img src={MenuIcon} alt="logo" /> */}
      <div className={css.hamburger}>
        {menu === true ? (
          <div>
            <MenuIcon className={css.icon} onClick={triggerDisplay} />
            {display && (
              <Menu
                className={css.display}
                noOverlay
                customCrossIcon={
                  <XIcon className={css.cross} onClick={triggerDisplay} />
                }
              >
                <nav className={css.mobileNav}>
                  <Link href={"/projects"}>
                    <ul className={css.item}>Work </ul>
                  </Link>
                  <Link href={"/learnings"}>
                    <ul className={css.item}>Learnings </ul>
                  </Link>
                  <a href="resume.pdf" target="_blank">
                    <ul className={css.item}>Resume </ul>
                  </a>
                  <div>
                    
                  </div>
                </nav>
              </Menu>
            )}
          </div>
        ) : (
          <XIcon className={css.icon} onClick={triggerDisplay} />
        )}
      </div>

      <div className={css.container}>
        <li className={css.options}>
          <ul className={css.item}>
            <Link href={"/projects"}> Work </Link>
          </ul>
          <ul className={css.item}>
            <Link href={"/learnings"}> Learnings </Link>
          </ul>
          <a href="resume.pdf" target="_blank">
            <ul className={css.item}>Resume</ul>
          </a>
        </li>
        {theme == "dark" ? (
          <MoonIcon className={css.icon} onClick={toggleTheme} />
        ) : (
          <SunIcon className={css.icon} onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}
