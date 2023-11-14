import React from "react";
import css from "./footer.module.css";
import { useGlobalContext } from "../../contexts/context";
import Socials from "../SocialIcons/socials";

function Footer() {
  const { toggleTheme, theme } = useGlobalContext();

  return (
    <div className={css.footer} id={theme}>
      <div>
        <h2>2022 - Present &copy; Justin Jasa</h2>
      </div>
      <div>
        <Socials/>
      </div>
    </div>
  );
}

export default Footer;
