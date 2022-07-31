import { CssSyntaxError } from 'postcss';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import css from './socials.module.css'
import { useGlobalContext } from "../../contexts/context";


function Socials() {

  const { toggleTheme, theme } = useGlobalContext();

  return (
    <div className={css.container} id={theme}>
        <SocialIcon network="instagram" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/justin-jasa-08ba5a181/" className={css.icon}/>
        <SocialIcon network="github" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/justin-jasa-08ba5a181/" className={css.icon} bgColor="#FFFFFF"/>
        <SocialIcon network="twitter" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/justin-jasa-08ba5a181/" className={css.icon}/>
        <SocialIcon network="linkedin" style={{ height: 35, width: 35 }} url="https://www.linkedin.com/in/justin-jasa-08ba5a181/" className={css.icon}/>
    </div>
  )
}

export default Socials