import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function DJFlamePortfolioPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | DJFlame | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>PRODUCT · MUSIC TECHNOLOGY</p>
          <div className={styles.titleBox}>
            <h1 className={styles.djflame}>DJFlame</h1>
          </div>
          <p className={styles.lede}>A collaborative music platform exploring AI-assisted song selection, real-time guest interaction, and shared listening experiences.</p>

          <section className={styles.highlightedDetails}>
            <h2>Highlighted details</h2>
            <div className={styles.detailGrid}>
              <article className={styles.detailCard}>
                <p className={styles.cardLabel}>CROSS-PLATFORM CLIENTS</p>
                <p>The guest-facing mobile app was built with Flutter, while the desktop application used Electron and Node.js to provide the main music-control workflow.</p>
              </article>
              <article className={styles.detailCard}>
                <p className={styles.cardLabel}>SPHINX AUDIO ENGINE</p>
                <p>I built Sphinx, a custom C++ compiled binary that powered DJFlame&apos;s audio engine and supported the platform&apos;s music-mixing and manipulation workflow. Its AI-assisted mixing used a custom TensorFlow-based model that I trained.</p>
              </article>
              <article className={styles.detailCard}>
                <p className={styles.cardLabel}>BACKEND + IP</p>
                <p>Firebase hosted the server-side platform and real-time application data. The underlying product is patent pending.</p>
              </article>
            </div>
          </section>

          <div className={styles.associatedExperiences}>
            <h2>Role</h2>
            <div className={styles.associatedExperience}>
              <img src="https://djflame.tech/assets/favicon.png" height={50} alt="DJFlame logo" />
              <div className={styles.associatedExperienceText}>
                <h3>Founder &amp; CEO</h3>
                <p>Product strategy, interface design, and backend development.</p>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <h2>Capabilities</h2>
            <p>Product Design · Node.js · Firebase · Flutter · TensorFlow · Next.js</p>
          </div>

          <div className={styles.additonalLinks}>
            <h2>Links</h2>
            <ul>
              <li><a href="https://djflame.tech/">Website</a></li>
              <li><a href="https://djflame.tech/download">Desktop App Download</a></li>
            </ul>
          </div>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.mediaCard}>
            <h1>Explore DJFlame</h1>
            <p>Collaborative listening, built around shared control and discovery.</p>
          </div>
          <div className={styles.sidebarSection}>
            <h2>Platform</h2>
            <p>Available across desktop and mobile workflows.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
