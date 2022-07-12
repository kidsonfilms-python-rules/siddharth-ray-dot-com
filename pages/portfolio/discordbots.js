import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function DiscordBotsPortfolioPage() {
    return (
        <div style={{ backgroundImage: "linear-gradient(135deg,#7289DA,#5865F2)" }} className={styles.body}>
            <Head>
                <title>Siddharth Ray | DJFlame | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBarPortfolio page="about" />

            <main className={styles.main}>
                <div className={styles.leftBox}>
                    <div className={styles.titleBox}>
                        <h1 className={styles.discordbots}>Discord Bots</h1>
                        <a href="" style={{ fontWeight: 600 }}>Rebel Bot and InfiniBot</a>
                    </div>
                    <p>Rebel bot is a Moderation and ”Fun” bot for the popular VoIP Service, Discord. Using the Discord Bot API, the bot was made to help moderators of the Rebel Retreat guild (group of people chatting together). InfiniBot is a similar technology but it was designed for multiple guilds. At its peak, InfiniBot was used in 40+ Discord guilds and had 300+ unique users! It consisted of moderation, fun commands, games, and Guild Statistics using data collected. It had multiple algorithms made to give statistics such as the rating of the guild and what specifically to do that will gather interest for the guild members. Both Rebel Bot and InfiniBot are no longer maintained due to the deprecation of ”discord.py” and major changes to the Discord API.</p>
                    <div className={styles.associatedExperiences}>
                        {/* <h2>Associated Experiences</h2>
                        <div className={styles.associatedExperience}>
                            <img src="https://djflame.tech/assets/favicon.png" height={50} />
                            <div className={styles.associatedExperienceText}>
                                <h3>Founder, CEO</h3>
                                <p>DJFlame</p>
                            </div>
                        </div> */}
                    </div>

                    <div className={styles.skills}>
                        <h2>Skills</h2>
                        <p>Node.js ● Python ● Discord.js ● Discord.py ● Tensorflow ● NumPy ● MongoDB ● Redis</p>
                    </div>

                    <div className={styles.additonalLinks}>
                        <h2>Additional Links</h2>
                        <ul>
                            <li><a href='https://github.com/kidsonfilms-python-rules/RebelDiscordBot'>Rebel Bot GitHub Repo</a></li>
                            <li><a href='https://rebelretreat.kidsonfilms.com/'>Rebel Retreat Website</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightBox}>
                    {/* <div>
                        <h1>Website</h1>
                        <img src="http://via.placeholder.com/640x360" width={250} />
                    </div>
                    <div>
                        <h1>Desktop App</h1>
                        <img src="http://via.placeholder.com/640x360" width={250} />
                    </div>
                    <div>
                        <h1>Mobile App</h1>
                        <img src="http://via.placeholder.com/640x360" width={250} />
                    </div> */}
                </div>

            </main>

            {/* <Footer/> */}
        </div>
    )
}
