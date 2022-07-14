import React from "react";
import css from "./contact.module.css";
import { MailIcon } from "@heroicons/react/outline";

export default function Contact() {

  const triggerEmail = () => { 
    window.open('mailto:jjasa.2000@gmail.com')
  }


  return (
    <div className={css.container}>
      <div className={css.title}>
        <span>4.</span>
        <h2 className={css.about}>Get in Touch</h2>
      </div>
      <div className={css.line}>
        <span>______________</span>
      </div>
      <div className={css.desc}>
        <p>
          My inbox is always open for opportunities to contribute to new
          projects and improve my skills! I will reply to opportunties that are
          interesting and align with my values.
        </p>
      </div>
      <div className={css.button} onClick={triggerEmail}>
        <span>Contact Me</span>
        <MailIcon className={css.icon} />
      </div>
    </div>
  );
}
