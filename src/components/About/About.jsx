import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} 
        alt='Me sitting with the laptop' 
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} 
                alt= "Cursor icon" />
                <div className={styles.aboutItemText}>
                <h3>Frontend developer</h3>
                <p>I'm frontend developer. I am actively seeking opportunities to kick-start my career as a Frontend Developer. 
                I am eager to apply my theoretical knowledge and learn practical skills in Web Development, Frontend Technologies</p>
                </div>              
            
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} 
                alt= "Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>Data analysis</h3>
                    <p>Seeking opportunities to apply my knowledge, collaborate with experienced professionals, and contribute to innovative projects. 
                    Open to continuous learning and growth in the field of data analysis.</p>
                </div>              
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} 
                alt= "UI icon" />
                <div className={styles.aboutItemText}>
                    <h3>Prediction models</h3>
                    <p>Seeking opportunities to apply my predictive modeling skills, collaborate with experienced professionals, and contribute to innovative projects. 
                    Open to continuous learning and growth in the field of data analysis.</p>
                </div>              
            </li>
        </ul>
    </div>
  </section>;
  
}
