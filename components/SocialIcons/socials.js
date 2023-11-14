import { CssSyntaxError } from "postcss";
import React from "react";
import { SocialIcon } from "react-social-icons";
import css from "./socials.module.css";
import { useGlobalContext } from "../../contexts/context";
import { LinkIcon } from "@heroicons/react/solid";

function Socials() {
  const { toggleTheme, theme } = useGlobalContext();

  return (
    <div className={css.container}>
      <a
        href="https://bento.me/justinjasa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkIcon className={css.icon} />
      </a>
    </div>
  );
}

export default Socials;
