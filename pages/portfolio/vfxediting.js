import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function VFXEditingPortfolioPage() {
  return (
    <div style={{ backgroundImage: 'linear-gradient(135deg, #0d0f14, #171225)' }} className={styles.body}>
      <Head>
        <title>Siddharth Ray | VFX &amp; Editing | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>FILM · COMPOSITING · EDITING</p>
          <div className={styles.titleBox}>
            <h1 className={styles.vfxediting}>VFX &amp; Editing</h1>
          </div>
          <p className={styles.lede}>Selected visual effects, compositing, and editing work across short-form film and digital media.</p>

          <div className={styles.skills}>
            <h2>Tools &amp; disciplines</h2>
            <p>DaVinci Resolve · Blender · Premiere Pro · After Effects · Image Manipulation</p>
          </div>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.mediaCard}>
            <h1>Sci-fi Hallway</h1>
            <img src="/assets/hallway_cycles_i7.webp" width={250} alt="Sci-fi hallway visual effects shot" />
          </div>
          <div className={styles.mediaCard}>
            <h1>MEGH (2021) Opening Titles</h1>
            <iframe src="https://www.youtube.com/embed/usT6LtGhnPs" width="250" height="140" title="MEGH (2021) Teaser | Utsav Production" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className={styles.mediaCard}>
            <h1>CGI Tiger</h1>
            <img src="/assets/vfxediting-portfoliopage-tiger.png" width={250} alt="CGI tiger visual effects shot" />
          </div>
        </aside>
      </main>
    </div>
  )
}
