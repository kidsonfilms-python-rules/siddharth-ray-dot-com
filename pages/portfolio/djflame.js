import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function DJFlamePortfolioPage() {
  return (
    <div style={{ backgroundImage: "linear-gradient(135deg,#B43D86,#FF85EF)" }} className={styles.body}>
      <Head>
        <title>Siddharth Ray | DJFlame | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="about" />

      <main className={styles.main}>
        <div className={styles.leftBox}>
          <div className={styles.titleBox}>
            <h1>DJFlame</h1>
            <a href="https://djflame.tech/" style={{fontWeight: 600}}>visit website</a>
          </div>
          <p>DJFlame is a group-streaming and AI-based song mixing and manipulation application. DJFlame uses Tensorflow-based AI song selection and a Guest Companion App for Guest Interaction. I worked on all parts of the product, specializing in the GUI Design and Development as well as the Backend.</p>

          <div className={styles.associatedExperiences}>
            <h2>Associated Experiences</h2>
            <div className={styles.associatedExperience}>
              <img src="https://djflame.tech/assets/favicon.png" height={50}/>
              <div className={styles.associatedExperienceText}>
                <h3>Founder, CEO</h3>
                <p>DJFlame</p>
              </div>
            </div>
          </div>

          <div className={styles.skills}>
            <h2>Skills</h2>
            <p>Node.js ● Firebase ● Firestore ● C++ ● Tensorflow ● Flutter ● Next.js ● CSS</p>
          </div>

          <div className={styles.additonalLinks}>
            <h2>Additional Links</h2>
            <ul>
              <li><a href='https://djflame.tech/'>Website</a></li>
              <li><a href='https://djflame.tech/download'>Desktop App Download</a></li>
              <li><a href=''>App Store (iOS Mobile App)</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.rightBox}>
          <div>
            <h1>Website</h1>
            <img src="http://via.placeholder.com/640x360" width={250}/>
          </div>
          <div>
            <h1>Desktop App</h1>
            <img src="http://via.placeholder.com/640x360" width={250}/>
          </div>
          <div>
            <h1>Mobile App</h1>
            <img src="http://via.placeholder.com/640x360" width={250}/>
          </div>
        </div>

      </main>

      {/* <Footer/> */}
    </div>
  )
}
