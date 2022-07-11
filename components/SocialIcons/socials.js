import { CssSyntaxError } from 'postcss';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import css from './socials.module.css'

function Socials() {
  return (
    <div className={css.container}>
        <SocialIcon network="instagram" style={{ height: 30, width: 30 }} className={css.icon}/>
        <SocialIcon network="github" style={{ height: 30, width: 30 }} className={css.icon} bgColor="#FFFFFF"/>
        <SocialIcon network="twitter" style={{ height: 30, width: 30 }} className={css.icon}/>
        <SocialIcon network="linkedin" style={{ height: 30, width: 30 }} className={css.icon}/>
    </div>
  )
}

export default Socials