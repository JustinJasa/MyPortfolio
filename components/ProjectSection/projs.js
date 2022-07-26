import React from "react";
import css from "./projs.module.css";
import { SocialIcon } from "react-social-icons";
import ProjectCard from "../ProjectCards/projectcard";
import Link from "next/link";
import Image from 'next/image';

function Projects() {
  return (
    <div className={css.container}>
      <div className={css.containerOne}>
        <div className={css.title}>
          <span className={css.line}>_______________________</span>
          <span className={css.one}>2.</span>
          <span className={css.about}>Projects</span>
        </div>
      </div>
      <div className={css.projectOne}>
        <div className={css.sneakerImage}>
          <Image
            src="https://raw.githubusercontent.com/JustinJasa/SneakerDon/main/public/images/LandingPageImage.png"
            alt="SneakerDon"
            layout="fill"
          />
        </div>
        <div className={css.description}>
          <div className={css.featured}>
            <span>Featured Project</span>
          </div>
          <div className={css.projTitle}>
            <h4>
              <Link href="/projects/sneakerdon"><span>SneakerDon.</span></Link>
            </h4>
          </div>
          <p>
            SneakerDon is a front-end application that tracks prices of sneakers
            and clothing using the{" "}
            <span className={css.sneaks}>
              <Link href="https://github.com/druv5319/Sneaks-API">
                <a target="_blank" rel="noopener noreferrer">
                  Sneaks API
                </a>
              </Link>
            </span>{" "}
            from the top 4 most popular marketplaces on the web.
          </p>
          <ul className={css.technologies}>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Figma</li>
          </ul>
          <SocialIcon
            network="github"
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com/in/justin-jasa-08ba5a181/"
            className={css.icon}
            bgColor="#FFFFFF"
          />
        </div>
      </div>
      <div className={css.projectOne}>
        <div className={css.sneakerImage}>
          <Image
            src="https://raw.githubusercontent.com/JustinJasa/SneakerDon/main/public/images/LandingPageImage.png"
            alt="SneakerDon"
            layout="fill"
          />
        </div>
        <div className={css.description}>
          <div className={css.featured}>
            <span>Featured Project</span>
          </div>
          <div className={css.projTitle}>
            <h4>
              <Link href="/projects/sneakerdon"><span>SneakerDon.</span></Link>
            </h4>
          </div>
          <p>
            SneakerDon is a front-end application that tracks prices of sneakers
            and clothing using the{" "}
            <span className={css.sneaks}>
              <Link href="https://github.com/druv5319/Sneaks-API">
                <a target="_blank" rel="noopener noreferrer">
                  Sneaks API
                </a>
              </Link>
            </span>{" "}
            from the top 4 most popular marketplaces on the web.
          </p>
          <ul className={css.technologies}>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Figma</li>
          </ul>
          <SocialIcon
            network="github"
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com/in/justin-jasa-08ba5a181/"
            className={css.icon}
            bgColor="#FFFFFF"
          />
        </div>
      </div>
      
      {/* will work on this later when I have more projects
      <div className={css.more}>
        <h2>More Awesome Projects</h2>
        <ProjectCard/>
      </div>
    */}
    </div>
  );
}

export default Projects;
