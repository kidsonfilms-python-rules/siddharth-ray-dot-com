import styles from '../styles/NavBar.module.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRef, useState } from 'react'
import Link from 'next/link'

export function NavBar(props) {
    const [menuState, setMenuState] = useState();
    const navContent = useRef();
    const page = props.page

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>siddharth.ray()</p>
            </div>
            <Link href='#' className={styles.hamburger} onClick={() => {
                console.log("clicked lol");
                setMenuState(!menuState);
                if (menuState) {
                    navContent.current.style.display = "flex";
                } else {

                    navContent.current.style.display = "none";

                }
            }}>
                <div>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </Link>
            <div className={styles.navContainer} ref={navContent}>
                <ul className={styles.linksContainer}>
                    <li className={page == "home" ? styles.onPage : ""}><Link href="/">home()</Link></li>
                    <li className={page == "about" ? styles.onPage : ""}><Link href="/about">about()</Link></li>
                    <li className={page == "portfolio" ? styles.onPage : ""}><Link href="/portfolio">portfolio()</Link></li>
                    <li className={page == "contact" ? styles.onPage : ""}><Link href="/contact">contact()</Link></li>
                </ul>
                <ul className={styles.socials}>
                    <li><Link href='https://www.linkedin.com/in/the-ray/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></Link></li>
                    <li><Link href='https://github.com/kidsonfilms-python-rules' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export function NavBarPortfolio(props) {
    const [menuState, setMenuState] = useState();
    const navContent = useRef();
    const page = props.page

    return (
        <nav className={styles.navbar} style={{ paddingLeft: "5vw", background: "transparent", backdropFilter: "none" }}>
            <div className={styles.logoContainer} style={{cursor: "pointer"}}>
                <Link href='/portfolio'><FontAwesomeIcon icon={faAngleLeft} className={styles.icon} /></Link>
                <Link href='/portfolio'><p className={styles.logo} style={{ color: "white" }}>back</p></Link>
            </div>
            <div className={styles.navContainer} ref={navContent}>
                <ul className={styles.socials}>
                    <li><a href='https://www.linkedin.com/in/the-ray/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} style={{ color: "white" }} /></a></li>
                    <li><a href='https://github.com/kidsonfilms-python-rules' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.icon} style={{ color: "white" }} /></a></li>
                </ul>
            </div>
        </nav>
    )
}