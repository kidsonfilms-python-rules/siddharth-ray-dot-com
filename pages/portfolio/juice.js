import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function JuicePortfolioPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | Juice 16236 | Portfolio</title>
        <meta name="description" content="FTC software and competitive results from Juice Robotics, Team 16236." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>JUICE 16236 · FTC ROBOT SOFTWARE</p>
          <div className={styles.titleBox}>
            <h1 className={styles.juice}>Juice Robotics</h1>
            <p className={styles.projectSite}><a href="https://juicerobotics.org" target="_blank" rel="noreferrer">juicerobotics.org ↗</a></p>
          </div>
          <p className={styles.lede}>
            As software lead for FTC Team 16236, I directed and wrote much of the competition code—built around reliable closed-loop control, autonomous navigation, and sensor processing for high-stakes match play.
          </p>

          <section className={styles.highlightedDetails}>
            <h2>Highlighted details</h2>
            <div className={styles.detailGrid}>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>CONTROL SYSTEMS</p>
              <p>PID loops and motion profiling controlled drivetrain and mechanism movement, allowing the robot to move precisely while respecting the limits of real hardware.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>AUTONOMOUS MOTION</p>
              <p>Custom path-following tools—including PID2Point and an in-house Pure Pursuit implementation—gave autonomous routines a flexible foundation for navigating the field.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>SENSOR PROCESSING</p>
              <p>Kalman filtering and other sensor-processing techniques improved the quality of noisy measurements used for localization, control, and match-critical decisions.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>VISION TARGETING</p>
              <p>A custom EasyOpenCV pipeline detected purple and green game pieces, using blob size and relative position to choose a target and plan an intercept path for multi-piece intake.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>LOCALIZATION</p>
              <p>Two dead-wheel odometry and an IMU fed a dedicated coprocessor for continuous field-relative pose estimates, while AprilTags provided absolute relocalization when visible.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>ROBUST CAPTURE</p>
              <p>An Arducam global-shutter camera replaced a rolling-shutter webcam to reduce motion distortion during fast target acquisition. Limelight MegaTag2 supplied high-precision AprilTag pose estimates.</p>
            </article>
            </div>
          </section>

          <section className={styles.skills}>
            <h2>Software focus</h2>
            <div className={styles.tagList}>
              <span>Java</span>
              <span>FTC SDK</span>
              <span>PID control</span>
              <span>Motion profiling</span>
              <span>Pure Pursuit</span>
              <span>Kalman filters</span>
              <span>EasyOpenCV</span>
              <span>AprilTags</span>
            </div>
          </section>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.mediaCard}>
            <img src="/assets/juice-portfolio.jpg" alt="Juice Robotics FTC Team 16236" />
          </div>

          <div className={styles.mediaCard}>
            <iframe src="https://www.youtube.com/embed/mQwJkxTkFwQ" title="Juice Robotics match video one" allowFullScreen />
          </div>

          <div className={styles.mediaCard}>
            <iframe src="https://www.youtube.com/embed/pXXhu5e-Res" title="Juice Robotics match video two" allowFullScreen />
          </div>

          <div className={styles.sidebarSection}>
            <h2>Competition record</h2>
            <ul className={styles.achievementList}>
              <li>2023 NorCal Champions</li>
              <li>2023 World Championship Division Finalist Captains</li>
              <li>2× NorCal Grand Finalists</li>
              <li>9th in the world during the 2023 season</li>
              <li>2025 Multinational Tech Invitational — 6th place</li>
              <li>2026 World Championship Playoffs Captain</li>
              <li>2× NorCal Division Finalists</li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h2>2024–25 sponsors</h2>
            <ul className={styles.sponsorList}>
              <li>Prototek Digital Manufacturing</li>
              <li>Google</li>
              <li>Micron</li>
              <li>Apple</li>
              <li>Gene Haas Foundation</li>
              <li>Western Digital</li>
              <li>CNC Madness</li>
              <li>ACEC Sierra Chapter</li>
              <li>Inductive Automation</li>
              <li>PG&amp;E</li>
              <li>Dream Maker Fund</li>
              <li>Powdercraft Rocklin</li>
              <li>Axon Robotics</li>
              <li>MonsterBolts</li>
              <li>MISUMI</li>
              <li>goBilda</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}
