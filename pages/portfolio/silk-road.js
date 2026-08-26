import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function SilkRoadPortfolioPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | SmartFrame | Portfolio</title>
        <meta name="description" content="Project Silk Road is an ultra-low-profile smart backlight designed for wall-mounted silk Turkish rugs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>PROJECT SILK ROAD · EMBEDDED HARDWARE</p>
          <div className={styles.titleBox}>
            <h1 className={styles.silkroad}>SmartFrame</h1>
          </div>
          <p className={styles.lede}>
            An ultra-low-profile backlight designed to mount behind wall-hung silk Turkish rugs, bringing controlled illumination to a display without distracting from the textile itself.
          </p>

          <div className={styles.detailGrid}>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>ULTRA-THIN FORM</p>
              <p>The frame is designed around a 0.75-inch profile so it can sit close to the wall and remain visually quiet behind the artwork.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>POWER + CONTROL</p>
              <p>An Arduino Nano controls the system, with a single supply split into dedicated 12V and 5V rails for the lighting and low-voltage electronics.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>STATUS AT A GLANCE</p>
              <p>An RGB button communicates system state while providing a compact physical control point. A phototransistor enables automatic day/night activation, and the design features 54W of LED lighting capacity.</p>
            </article>
          </div>

          <section className={styles.screenshotSection} aria-labelledby="silk-road-photos">
            <h2 id="silk-road-photos">Build photos</h2>
            <div className={styles.screenshotGrid}>
              <figure className={styles.screenshotFigure}>
                <img src="/assets/silk-road-controls.jpeg" alt="SmartFrame control panel" />
                <figcaption>Control panel</figcaption>
              </figure>
              <figure className={styles.screenshotFigure}>
                <img src="/assets/silk-road-build-process.jpeg" alt="SmartFrame during the build process" />
                <figcaption>Build process</figcaption>
              </figure>
              <figure className={styles.screenshotFigure}>
                <img src="/assets/silk-road-final.jpeg" alt="Completed SmartFrame backlight" />
                <figcaption>Final product</figcaption>
              </figure>
            </div>
          </section>

          <section className={styles.skills}>
            <h2>System elements</h2>
            <div className={styles.tagList}>
              <span>Arduino Nano</span>
              <span>LED lighting</span>
              <span>Power distribution</span>
              <span>RGB status control</span>
              <span>Ambient-light sensing</span>
              <span>Enclosure design</span>
            </div>
          </section>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.projectMark}>
            <span><span className={styles.highlight}>{'// PROJECT'}</span></span>
            <strong>SILK ROAD</strong>
            <small>LOW-PROFILE BACKLIGHT</small>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Design target</h2>
            <p>Lighting hardware that presents the rug clearly while staying hidden within a slim wall-mounted form.</p>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Electrical layout</h2>
            <p>One input supply feeds 12V lighting and a regulated 5V control rail, keeping the power architecture compact and serviceable.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
