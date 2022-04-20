import styles from '../styles/NavBar.module.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>siddharth.ray()</p>
            </div>
            <div className={styles.navContainer}>
                <ul className={styles.linksContainer}>
                    <li className={styles.onPage}><a>is()</a></li>
                    <li><a>about()</a></li>
                    <li><a>portfolio()</a></li>
                    <li><a>contact()</a></li>
                </ul>
                <ul className={styles.socials}>
                    <li><a href='https://www.linkedin.com/in/the-ray/' target={"_blank"}><FontAwesomeIcon style={{ fontSize: 20 }} icon={faLinkedinIn} /></a></li>
                    <li><a href='https://github.com/kidsonfilms-python-rules' target={"_blank"}><FontAwesomeIcon style={{ fontSize: 20 }} icon={faGithub} /></a></li>
                </ul>
            </div>
        </nav>
    )
}