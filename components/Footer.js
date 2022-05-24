import styles from '../styles/Footer.module.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h4>socials()</h4>
                <ul className={styles.socials}>
                    <li><a href='https://www.linkedin.com/in/the-ray/' target={"_blank"}><FontAwesomeIcon style={{ fontSize: 20 }} icon={faLinkedinIn} /></a></li>
                    <li><a href='https://github.com/kidsonfilms-python-rules' target={"_blank"}><FontAwesomeIcon style={{ fontSize: 20 }} icon={faGithub} /></a></li>
                </ul>
            </div>
            <div className={styles.center}>
                <div>
                <p className={styles.bigtextthing}><span>siddharthray</span>.com</p>
                <a href='https://github.com/kidsonfilms-python-rules/siddharth-ray-dot-com' target="_blank">view source code</a>
                </div>
                <p className={styles.copyright}>© 2022 Siddharth Ray</p>
            </div>
            <div className={styles.right}>
                <h4>builtWith()</h4>
                <ul>
                    <li><a href='https://nextjs.org/' target="_blank">Next.js</a></li>
                    <li><a href='https://github.com/mattboldt/typed.js/' target="_blank">typed.js</a></li>
                    <li><a href='/credits'>view all credits</a></li>
                </ul>
            </div>
        </footer>
    )
}