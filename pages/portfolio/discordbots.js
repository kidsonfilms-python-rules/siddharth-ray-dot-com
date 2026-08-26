import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function DiscordBotsPortfolioPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | Discord Bots | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>COMMUNITY TOOLS · AUTOMATION</p>
          <div className={styles.titleBox}>
            <h1 className={styles.discordbots}>Discord Bots</h1>
          </div>
          <p className={styles.lede}>Rebel Bot and InfiniBot were moderation, community, and analytics tools built for Discord servers.</p>

          <div className={styles.skills}>
            <h2>Capabilities</h2>
            <p>Node.js · Python · Discord.js · Discord.py · MongoDB · Redis</p>
          </div>

          <div className={styles.additonalLinks}>
            <h2>Links</h2>
            <ul>
              <li><a href="https://github.com/kidsonfilms-python-rules/RebelDiscordBot">Rebel Bot GitHub Repository</a></li>
              <li><a href="https://rebelretreat.kidsonfilms.com/">Rebel Retreat</a></li>
            </ul>
          </div>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.mediaCard}>
            <h1>Community at scale</h1>
            <p>Built to give server teams practical moderation and engagement tools.</p>
          </div>
          <div className={styles.sidebarSection}>
            <h2>Project status</h2>
            <p>Archived following major changes to the Discord API.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
