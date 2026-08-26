import Head from 'next/head'
import styles from '../styles/Portfolio.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import { PortfolioCard } from '../components/PortfolioCard'
import PageFunction from '../components/PageFunction'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="portfolio" />

      <main className={styles.main}>
        <h1 className={styles.title}>siddharth<PageFunction label=".portfolio()" summary="Returns selected projects across software, computer vision, and visual media." params="filter: ProjectType" returns="Project[]" /></h1>
        <p className={styles.intro}>Selected work across software, computer vision, robotics, and visual media.</p>
        <p className={styles.sectionLabel}>{'// selected projects'}</p>

        <div className={styles.cards}>
          <PortfolioCard
            number="01"
            title={<>Project <span style={{ color: '#e76666' }}>REDACTED</span></>}
            date="Computer Vision · FTC Analytics · Current"
            description="A lightweight video-analysis tool that turns FTC match footage into clear robot movement and shot insights for faster scouting and review."
            redirect="/portfolio/redacted"
            thumbnailLabel="JuiceAutoScout"
          />
          <PortfolioCard
            number="02"
            title={<>Convention/Event <span style={{ color: '#9fc4b0' }}>Management System</span></>}
            date="Event Operations · Mobile Platform"
            description="A unified event-operations platform for access control, POS, meals, schedules, announcements, and venue navigation."
            redirect="/portfolio/eventx"
            thumbnailLabel="EventX"
          />
          <PortfolioCard
            number="03"
            title={<span style={{ color: '#ffb55b' }}>Juice 16236</span>}
            date="Robotics · Software"
            description="FTC robot software led and largely developed for Team 16236, alongside competitive robotics work and supporting tools."
            redirect="/portfolio/juice"
            thumbnail="/assets/juice-portfolio.jpg"
          />
          <PortfolioCard
            number="04"
            title={<span style={{ color: '#ffb2de' }}>DJFlame</span>}
            date="Music Technology · Product Development"
            description="A collaborative music platform built around AI-assisted song selection and real-time guest participation."
            redirect="/portfolio/djflame"
            thumbnail="https://miro.medium.com/max/1400/1*JMe3z14eW_PWOaSwHSGCtA.png"
          />
          <PortfolioCard
            number="05"
            title={<>Ultra-Low Profile Backlight <span style={{ color: '#b8c7ff' }}>SmartFrame</span></>}
            date="Embedded Systems · Hardware Design"
            description="A 0.75-inch wall-mounted backlight system designed to present silk Turkish rugs with clean, controllable illumination."
            redirect="/portfolio/silk-road"
            thumbnail="/assets/silk-road-final.jpeg"
          />
          <PortfolioCard
            number="06"
            title={<> <span style={{ color: '#b8c7ff' }}>Discord</span> Bots</>}
            date="Community Tools · Archive"
            description="Moderation, community, and analytics tools for Discord servers."
            redirect="/portfolio/discordbots"
            thumbnail="https://image.shutterstock.com/image-photo/dumai-indonesia-09-november-2021-260nw-2071853249.jpg"
          />
          <PortfolioCard
            number="07"
            title={<> <span style={{ color: '#ded2ff' }}>VFX</span> &amp; Editing</>}
            date="Film · Compositing · Editing"
            description="Selected visual effects, compositing, and editing work for film and digital media."
            redirect="/portfolio/vfxediting"
            thumbnail="/assets/hallway_cycles_i7.webp"
          />
        </div>

        <a className={styles.githubLink} href="https://github.com/kidsonfilms-python-rules" target="_blank" rel="noreferrer">More work on GitHub ↗</a>
      </main>

      <Footer />
    </div>
  )
}
