import Head from 'next/head'
import styles from '../styles/Home.module.css'
import terminalStyles from '../styles/HomeTerminal.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import Typing from '../components/Typing'
import HomeTerminal from '../components/HomeTerminal'
import Link from 'next/link'
import PageFunction from '../components/PageFunction'
import { useState } from 'react'

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>Siddharth Ray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="home" />

      <main className={styles.main}>
        <section className={styles.stinger}>
          <h1 className={styles.title}>siddharth<PageFunction label=".ray()" summary="Returns the homepage and a concise overview of Siddharth’s work." params="visitor: Visitor" returns="HomePage" /></h1>
          {terminalOpen ? (
            <HomeTerminal />
          ) : (
            <h2>
              &gt; I am a{' '}
              <span
                className={terminalStyles.typingTrigger}
                role="button"
                tabIndex="0"
                aria-label="Typing introduction. Click and press Control C to open the terminal easter egg."
                onClick={(event) => event.currentTarget.focus()}
                onKeyDown={(event) => {
                  if (event.ctrlKey && event.key.toLowerCase() === 'c') {
                    event.preventDefault()
                    setTerminalOpen(true)
                  }
                }}
              >
                <Typing />
              </span>
            </h2>
          )}
          <p className={styles.intro}>
            I&apos;m a EECS student at UC Berkeley focused on hardware/electrical engineering, computer vision, and creative technology.
          </p>
          <div className={styles.heroActions}>
            <Link href="/portfolio" passHref>
              <a className={styles.primaryButton}>view selected work</a>
            </Link>
            <Link href="/contact" passHref>
              <a className={styles.secondaryButton}>get in touch</a>
            </Link>
          </div>
        </section>

        <section className={styles.workSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{'// selected work'}</p>
            <h2>Selected projects<span className={styles.primaryColorSpan}>.</span></h2>
            <p>Work across product development, computer vision, robotics, and visual media.</p>
          </div>

          <div className={styles.projectGrid}>
            <Link href="/portfolio/redacted" passHref>
              <a className={styles.projectCard}>
                <p className={styles.projectNumber}>01</p>
                <h3>Project REDACTED</h3>
              <p>A lightweight computer-vision system for analyzing FTC match video.</p>
                <span>view case study →</span>
              </a>
            </Link>
            <a className={styles.projectCard} href="https://djflame.tech" target="_blank" rel="noreferrer">
              <p className={styles.projectNumber}>02</p>
              <h3>DJFlame</h3>
              <p>A collaborative music platform with AI-assisted song selection and guest participation.</p>
              <span>visit project ↗</span>
            </a>
            <a className={styles.projectCard} href="https://juicerobotics.org" target="_blank" rel="noreferrer">
              <p className={styles.projectNumber}>03</p>
              <h3>Juice Robotics</h3>
              <p>Competitive robotics and supporting software built with FTC Team 16236.</p>
              <span>visit team ↗</span>
            </a>
            <Link href="/portfolio/vfxediting" passHref>
              <a className={styles.projectCard}>
                <p className={styles.projectNumber}>04</p>
                <h3>VFX + Editing</h3>
                <p>Editing, compositing, and visual effects work for film and digital media.</p>
                <span>view work →</span>
              </a>
            </Link>
          </div>
          <Link href="/portfolio" passHref>
            <a className={styles.allWorkLink}>view all projects <span>→</span></a>
          </Link>
        </section>

        <section className={styles.contactSection}>
          <p className={styles.eyebrow}>{'// contact'}</p>
          <h2>Interested in working together<span className={styles.primaryColorSpan}>?</span></h2>
          <Link href="/contact" passHref>
            <a className={styles.primaryButton}>contact me</a>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
