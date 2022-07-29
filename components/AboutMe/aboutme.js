import React from "react";
import css from "./aboutme.module.css";
import Justin from '../../public/profileimage.png'
import Image from 'next/image'

function About() {
  return (
    <div className={css.container}>
      <div className={css.containerOne}>
        <div className={css.title}>
          <span className={css.about}>About Me </span>
          <span className={css.line}>_______________________</span>
        </div>
        <div className={css.description}>
          <p>
            Hey 👋 <br/>
            <br />
            I'm Justin, a software engineering student at UTS with a strong
            interest in developing applications that create amazing experiences
            for its users. <br /><br/>
            Currently, I’m mainly honing skills as a frond-end developer but in
            the future I wash to develop into an individual who can help in all
            parts of the engineering process. <br /><br/>
            Usually when I’m not working, I like being active 🏀, hanging out
            with friends and enjoy big buckets of fried chicken 🍗 <br /><br/>
            Here are some technologies I have worked with: <span>JavaScript,</span> <span>React.js,</span>
            <span> Next.js,</span><span> express.js,</span><span> Sanity.io,</span><span> CSS/Tailwind,</span><span> HTML</span>
          </p>
        </div>
      </div>
      <div className={css.containerTwo}>
        <Image
          className={css.image}
          src={Justin}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default About;
