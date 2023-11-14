import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MoonIcon,
  SunIcon,
  MenuIcon,
  XIcon,
  BriefcaseIcon,
  PaperAirplaneIcon,
  BookOpenIcon,
  DocumentIcon,
  HomeIcon
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
                <div className={css.mobileNavLink}>
                    <HomeIcon className={css.navIcon} />
                    <Link href={"/"} passHref>
                      <ul className={css.item}>Home</ul>
                    </Link>
                  </div>
                  <div className={css.mobileNavLink}>
                    <BriefcaseIcon className={css.navIcon} />
                    <Link href={"/projects"} passHref>
                      <ul className={css.item}>Projects</ul>
                    </Link>
                  </div>
                  <div className={css.mobileNavLink}>
                    <BookOpenIcon className={css.navIcon} />
                    <Link href={"/learnings"} passHref>
                      <ul className={css.item}>Learnings</ul>
                    </Link>
                  </div>
                  <div className={css.mobileNavLink}>
                    <PaperAirplaneIcon className={css.navIcon} />
                    <a
                      href="https://bento.me/justinjasa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ul className={css.item}>Socials</ul>
                    </a>
                  </div>
                  <div className={css.mobileNavLink}>
                    <DocumentIcon className={css.navIcon} />
                    <a href="resume.pdf" target="_blank">
                      <ul className={css.item}>Resume</ul>
                    </a>
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
            <div className={css.navItem}>
              <BriefcaseIcon className={css.navIcon} />
              <Link href={"/projects"}> Projects </Link>
            </div>
          </ul>
          <ul className={css.item}>
            <div className={css.navItem}>
              <BookOpenIcon className={css.navIcon} />
              <Link href={"/learnings"}> Learnings </Link>
            </div>
          </ul>
          <ul className={css.item}>
            <div className={css.navItem}>
              <PaperAirplaneIcon className={css.navIcon} />
              <a
                href="https://bento.me/justinjasa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Socials
              </a>
            </div>
          </ul>
          <ul className={css.item}>
            <div className={css.navItem}>
              <DocumentIcon className={css.navIcon} />
              <a href="resume.pdf" target="_blank">
                Resume
              </a>
            </div>
          </ul>
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
