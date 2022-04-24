import styles from '../styles/NavBar.module.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRef, useState } from 'react'

export default function NavBar() {
    const [menuState, setMenuState] = useState();
    const navContent = useRef();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>siddharth.ray()</p>
            </div>
            <a href='#' className={styles.hamburger} onClick={() => {
                console.log("clicked lol");
                setMenuState(!menuState);
                if (menuState) {
                    navContent.current.style.display = "flex";
                } else {

                    navContent.current.style.display = "none";

                }
            }}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={styles.navContainer} ref={navContent}>
                <ul className={styles.linksContainer}>
                    <li className={styles.onPage}><a>is()</a></li>
                    <li><a>about()</a></li>
                    <li><a>portfolio()</a></li>
                    <li><a>contact()</a></li>
                </ul>
                <ul className={styles.socials}>
                    <li><a href='https://www.linkedin.com/in/the-ray/' target={"_blank"}><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></a></li>
                    <li><a href='https://github.com/kidsonfilms-python-rules' target={"_blank"}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a></li>
                </ul>
            </div>
        </nav>
    )
}