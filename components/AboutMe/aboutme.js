import React from "react";
import css from "./aboutme.module.css";

function About() {
  return (
    <div className={css.container}>
      <div className={css.containerOne}>
        <div className={css.title}>
          <span className={css.one}>1.</span>
          <span className={css.about}>About Me </span>
          <span className={css.line}>_______________________</span>
        </div>
        <div className={css.description}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. <br/><br/>All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable.<br/> <br/> The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
      <div className={css.containerTwo}>
        <img className={css.image} src="https://picsum.photos/300/300" alt="my-image" />
      </div>
    </div>
  );
}

export default About;
