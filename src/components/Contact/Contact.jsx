import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";

export const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} 
            alt='Email icon'
        />
        <a href='mailto:sitaljyala9@gmail.com'>sitaljyala9@gmail.com</a>
        </li>
        <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} 
            alt='Linkedin icon'/>
        <a href='https://www.linkedin.com/sital-jyala'>https://www.linkedin.com/sital-jyala </a>        
        </li>
        <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} 
            alt='Github icon'/>
        <a href='https://www.github.com/sital-jyala'>https://www.github.com/sital-jyala </a>        
        </li>
    </ul>
  </footer>
}
