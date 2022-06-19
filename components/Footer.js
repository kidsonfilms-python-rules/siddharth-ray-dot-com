import styles from '../styles/Footer.module.css'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h4>socials()</h4>
                <ul className={styles.socials}>
                    <li><Link href='https://www.linkedin.com/in/the-ray/' target="_blank" rel="noreferrer"><FontAwesomeIcon style={{ fontSize: 20 }} icon={faLinkedinIn} /></Link></li>
                    <li><Link href='https://github.com/kidsonfilms-python-rules' target="_blank" rel="noreferrer"><FontAwesomeIcon style={{ fontSize: 20 }} icon={faGithub} /></Link></li>
                </ul>
            </div>
            <div className={styles.center}>
                <div>
                <p className={styles.bigtextthing}><span>siddharthray</span>.com</p>
                <Link href='https://github.com/kidsonfilms-python-rules/siddharth-ray-dot-com' target="_blank" rel="noreferrer">view source code</Link>
                </div>
                <p className={styles.copyright}>© {new Date().getFullYear()} Siddharth Ray</p>
            </div>
            <div className={styles.right}>
                <h4>builtWith()</h4>
                <ul>
                    <li><Link href='https://nextjs.org/' target="_blank" rel="noreferrer">Next.js</Link></li>
                    <li><Link href='/credits'>view all credits</Link></li>
                    <li><Link href='/licenses'>view all licenses</Link></li>
                </ul>
            </div>
        </footer>
    )
}