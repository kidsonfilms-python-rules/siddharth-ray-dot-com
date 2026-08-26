import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function ProjectRedactedPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | Project REDACTED | Portfolio</title>
        <meta name="description" content="Project REDACTED is a lightweight computer-vision system for FTC match analysis." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>JUICE AUTOSCOUT · COMPUTER VISION</p>
          <div className={styles.titleBox}>
            <h1 className={styles.redacted}>AUTOMATED MATCH ANALYSIS</h1>
          </div>
          <p className={styles.lede}>
            A lightweight scouting system that turns FTC match video into reliable movement and shot data—built to make post-match review faster and more useful.
          </p>

          <section className={styles.paper} aria-labelledby="paper-title">
            <div className={styles.paperHeading}>
              <p className={styles.cardLabel}>TECHNICAL WHITE PAPER · JULY 2026</p>
              <a
                id="paper-title"
                className={styles.paperTitle}
                href="https://github.com/kidsonfilms-python-rules/JuiceAutoScout/blob/master/whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
              >
                A Lightweight, Perspective-Calibrated Multi-Robot Tracking and Heuristic Shot Analysis System for Competitive Mobile Robotics ↗
              </a>
            </div>

            <dl className={styles.paperMeta}>
              <div>
                <dt>Author</dt>
                <dd>Siddharth Ray</dd>
              </div>
              <div>
                <dt>Published</dt>
                <dd>July 18, 2026</dd>
              </div>
            </dl>

            <div className={styles.paperAbstract}>
              <h2>Abstract</h2>
              <p>
                This paper presents the computer-vision core of AutoScout, a lightweight monocular video-analysis system designed to extract tactical analytics from and virtually reconstruct FIRST Tech Challenge match footage. The system pairs a season-robust robot tracker with a game-specific shot-analysis module, using perspective calibration, foreground segmentation, and deterministic identity preservation through multi-robot contact. The result is a transparent, debuggable, and computationally efficient tracker intended for resource-constrained teams.
              </p>
            </div>
          </section>

          <div className={styles.detailGrid}>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>THE CHALLENGE</p>
              <p>Match footage is full of useful information, but reviewing it manually is slow. Project REDACTED creates a clearer picture of how a match unfolded.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>THE APPROACH</p>
              <p>It follows all four robots and key scoring moments from calibrated video, then translates that activity into an easy-to-review match record.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>THE OUTCOME</p>
              <p>Teams can move from raw footage to meaningful scouting context without relying on heavyweight infrastructure or a specialized workstation.</p>
            </article>
          </div>

          <section className={styles.skills}>
            <h2>Focus areas</h2>
            <div className={styles.tagList}>
              <span>Computer Vision</span>
              <span>Robotics Analytics</span>
              <span>Python</span>
              <span>OpenCV</span>
              <span>Data Visualization</span>
            </div>
          </section>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.projectMark}>
            <span><span className={styles.highlight}>{'// PROJECT'}</span></span>
            <strong className={styles.redactedMark} data-text="REDACTED">REDACTED</strong>
            <small>FTC MATCH ANALYSIS</small>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Project links</h2>
            <p><a href="https://github.com/kidsonfilms-python-rules/JuiceAutoScout" target="_blank" rel="noreferrer">GitHub repository ↗</a></p>
            <p><a href="https://github.com/kidsonfilms-python-rules/JuiceAutoScout/blob/master/whitepaper.pdf" target="_blank" rel="noreferrer">Whitepaper ↗</a></p>
            {/* <p><a href="https://github.com/kidsonfilms-python-rules/JuiceAutoScout/blob/master/assets/redacted%20side%20by%20side.mp4" target="_blank" rel="noreferrer">Example analysis ↗</a></p> */}
          </div>

          <div className={styles.sidebarSection}>
            <h2>Example analysis</h2>
            <video className={styles.analysisVideo} controls preload="metadata">
              <source src="https://raw.githubusercontent.com/kidsonfilms-python-rules/JuiceAutoScout/master/assets/redacted%20side%20by%20side.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Built for</h2>
            <p>FTC teams that want a practical, local workflow for reviewing match performance and making better-informed decisions.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
