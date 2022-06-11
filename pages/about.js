import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import Typing from '../components/Typing'
import ExperienceBlock from '../components/experienceBlock'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function About() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="about" />

      <main className={styles.main}>
        <div className={styles.stinger}>
          <h1 className={styles.title}>siddharth<span className={styles.primaryColorSpan}>.about()</span></h1>
          <div className={styles.buttonRow}>
            <a href='/download/Siddharth Ray Resume.pdf' target={"_blank"}><FontAwesomeIcon icon={faDownload} className={styles.icon} /> download PDF</a>
            <p>●  last updated June 7th 2022</p>
          </div>
          <p>
            I am a Software Developer based in Folsom, California and a rising freshman at Vista del Lago High School. I also do video production, visual effects, and play the cello as hobbies!
          </p>
          <div className={styles.resumeRow}>
            <div className={styles.experience}>
              <h2>Experience</h2>
              <ExperienceBlock timeframe="Dec 2019 - Now" 
              companyName="DJFlame" 
              location="Folsom, CA" 
              jobTitle="Founder, CEO" 
              description={(<>DJFlame is a group-streaming and AI-based song mixing and manipulation application. I worked on a cross-platform desktop application for an automated DJ using multiple methods. DJFlame uses Tensorflow-based AI song-selection and a Guest Companion App for Guest Interaction. It was used at multiple public events for beta testing and planned public release Q4 2022. Check out our website at <a href='https://djflame.tech' target="_blank">djflame.tech</a>.</>)} />
              <ExperienceBlock timeframe="2015 - 2021" 
              companyName="UTSAV Inc" 
              location="Folsom, CA" 
              jobTitle="UTSAV Tech and Media Committee Lead" 
              description={(<>I served on the Tech and Media committee at UTSAV for 4 years before stepping down. During these 4 years, I rennovated their website (<a href='https://utsavsac.org' target={"_blank"}>utsavsac.org</a>), upgraded their workflow to fit the current times, and developed a Event Managing App System which was later sought for by other local organizations. The Event Managing App, called "Utsav Events" was made with a Flutter front-end and a BaaS called Firebase, a Google service.</>)} />
            </div>
            <div className={styles.education}>
              <h2>Education</h2>
              <ExperienceBlock timeframe="2022 - 2026" 
              companyName="Vista del Lago High School" 
              location="High School Diploma"
              jobTitle="Incoming Freshman" />
              <ExperienceBlock timeframe="2019 - 2022" 
              companyName="Folsom Middle School" 
              jobTitle="GPA: 4.0" />
            </div>
            <div className={styles.competitions}>
              <h2>Competitions</h2>
              <ExperienceBlock timeframe="2021 – now" 
              companyName="FIRST® Tech Challenge"
              location="Team Juice 16236"
              jobTitle="Software Division Lead, Vice Captain" 
              description="We built a robot using water-jet cut aluminum parts and programmed the robot using Java and tools like TensorFlow. Went to local and international companies to get sponsorships and made publicly used and open-source tools for the FTC community. We were finalists in the 2022 NorCal Regional Championships and won multiple other awards."/>
              <ExperienceBlock timeframe="2016–2019" 
              companyName="FIRST® Lego League"
              location="Team Golden State Builders 30208"
              jobTitle="Team Member" 
              description="We built a LEGO-based robot. In our last year won Qualifiers and made 6th place in NorCal Championships."/>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
