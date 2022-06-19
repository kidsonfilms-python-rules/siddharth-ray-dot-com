import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'
import {NavBar} from '../components/NavBar'
import Footer from '../components/Footer'
import {PortfolioCard, PortfolioCardShowMore} from '../components/PortfolioCard'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="portfolio" />

      <main className={styles.main}>
        <div className={styles.cards}>
          <h1 className={styles.title}>siddharth<span className={styles.primaryColorSpan}>.portfolio()</span></h1>
          <PortfolioCard
            title={(<span className={styles.djflameSpan}>DJFlame</span>)}
            date="December 2019 - Present"
            description="DJFlame is a group-streaming and AI-based song mixing and manipulation application. DJFlame uses Tensorflow-based AI song selection and a Guest Companion App for Guest Interaction." 
            thumbnail="https://miro.medium.com/max/1400/1*JMe3z14eW_PWOaSwHSGCtA.png"
            redirect="/portfolio/djflame"/>

          <PortfolioCard
            title={(<><span style={{ color: '#FF9626', fontWeight: "bold" }}>Juice 16236</span></>)}
            date="August 2021 - Present"
            description="Juice 16236 is a high school robotics team that competes in FIRST Tech Challenge." 
            thumbnail="https://lh3.googleusercontent.com/pw/AM-JKLWvp3ofLIlLliRwP_GCS16WWDMtuz1RXAUqGoWvcsCfn5DYlk3KE0JI-htkCHrrx9LNDfYPmd2J-XZNhk8xMZkrdU0AIm5kVuwu5UNi20ZZMGZOXCEe-HOBUZS2eyT11P0JvHubGERKv_Ouu5F6A0A=w1822-h1366-no?authuser=2"
            redirect="/portfolio/juice"/>
            
          <PortfolioCard
            title={(<><span style={{ color: '#5865F2', fontWeight: "bold" }}>Discord</span> Bots</>)}
            date="2020 - 2022"
            description="Dicord is a VoIP Chat Service which has a Bot API to help enchance the experiance of chats." 
            thumbnail="https://image.shutterstock.com/image-photo/dumai-indonesia-09-november-2021-260nw-2071853249.jpg"
            redirect="/portfolio/discordbots"/>

          <PortfolioCard
            title={(<><span style={{ color: '#8b0d19', fontWeight: "bold" }}>UTSAV Inc.</span> Website and Apps</>)}
            date="Circa 2015"
            description="Utsav is a nonprofit (a 501(c)(3) Nonprofit Organization), charitable and cultural organization involved in promoting Indian culture in the Sacramento region." 
            thumbnail="https://pbs.twimg.com/media/FR6y5PWWQAI0CGj.jpg"
            redirect="/portfolio/utsav"/>

          <PortfolioCard
            title={(<><span className={styles.vfxSpan}>VFX</span> and <span className={styles.vfxSpan}>Editing</span></>)}
            date="2015 - Present"
            description="Editing is a art where you combine and tweak video clips. Visual Effects (VFX) is a form of art where the artist makes completly digital images which either are combined in real videos/photos or are standalone." 
            thumbnail="https://media.discordapp.net/attachments/981336069540827176/981336469757124648/hallway_cycles_i7.png"
            redirect="/portfolio/vfxediting"/>

            <PortfolioCardShowMore/>

        </div>
      </main>

      <Footer />
    </div>
  )
}
