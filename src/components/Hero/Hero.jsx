import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hi, I'm Sital.
        </h1>
        <p className={styles.description }>I'm a frontend developer.
        As a passionate and ambitious individual, I am actively seeking opportunities to kick-start my career. 
        I am eager to apply my theoretical knowledge and learn practical skills in a reputable organization that helps me challenge and enhance my skill set, while I give my significant contribution to the success of company, simultaneously. 
        </p>
        <a href="mailto:sitaljyala9@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt ="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>;
};
