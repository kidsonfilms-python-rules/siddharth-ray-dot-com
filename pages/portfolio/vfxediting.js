import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function VFXEditingPortfolioPage() {
  return (
    <div style={{ backgroundImage: "linear-gradient(45deg,#ab58e2,#7326f0)" }} className={styles.body}>
      <Head>
        <title>Siddharth Ray | VFX & Editing | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="about" />

      <main className={styles.main}>
        <div className={styles.leftBox}>
          <div className={styles.titleBox}>
            <h1 className={styles.vfxediting}>VFX & Editing</h1>
            {/* <a href="https://djflame.tech/" style={{fontWeight: 600}}>visit website</a> */}
          </div>
          <p>I make VFX shots and edited videos that usually involve some type of CGI or Image Manipulation. These videos can be found in various YouTube Channels, but here I listed my favorites!</p>

          <div className={styles.associatedExperiences}>
          </div>

          <div className={styles.skills}>
            <h2>Skills</h2>
            <p>VFX ● Editing ● Davinci Resolve ● Blender ● Premier Pro ● After Effects ● Midjourney</p>
          </div>

          <div className={styles.additonalLinks}>
            {/* <h2>Additional Links</h2>
            <ul>
              <li><a href='https://djflame.tech/'>Website</a></li>
              <li><a href='https://djflame.tech/download'>Desktop App Download</a></li>
              <li><a href=''>App Store (iOS Mobile App)</a></li>
            </ul> */}
          </div>
        </div>

        <div className={styles.rightBox}>
          <div>
            <h1>Sci-fi Hallway</h1>
            <img src="https://media.discordapp.net/attachments/981336069540827176/981336469757124648/hallway_cycles_i7.png" width={250}/>
          </div>
          <div>
            <h1>MEGH (2021) Opening Titles</h1>
            {/* <img src="http://via.placeholder.com/640x360" width={250}/> */}
            <iframe src="https://www.youtube.com/embed/usT6LtGhnPs" width="250" height="140" title="MEGH (2021) Teaser | Utsav Production" frameborder="0" allowfullscreen></iframe>
          </div>
          <div>
            <h1>CGI Tiger</h1>
            <img src="/assets/vfxediting-portfoliopage-tiger.png" width={250}/>
          </div>
        </div>

      </main>

      {/* <Footer/> */}
    </div>
  )
}
