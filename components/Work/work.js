import React from "react";
import css from "./projs.module.css";
import { SocialIcon } from "react-social-icons";
import ProjectCard from "../ProjectCards/projectcard";
import Link from "next/link";
import Image from "next/image";

function Work() {
  return (
    <div className={css.container}>
      <div className={css.build}>
        <h1>{`Building & Design.`}</h1>
        <span className={css.desc}>
          Personal projects, Web apps and experimentals
        </span>
        <div>
          <button className={css.button}>
            <Link href="/projects">
            <span>See my work</span>
            </Link>
            
          </button>
        </div>
      </div>
      <div className={css.build}>
        <h1>I like to write,</h1>
        <span className={css.desc}>
          About my process in dev, learning and life{" "}
        </span>
        <div>
          <button className={css.button}>
            <Link href="/learnings">
            <span>Read my Articles</span>
            </Link>
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
