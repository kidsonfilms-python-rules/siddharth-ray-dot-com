import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import Typing from '../components/Typing'
import { Controller, Scene } from 'react-scrollmagic'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="home" />

      <main className={styles.main}>
        <div className={styles.stinger}>
          <h1 className={styles.title}>siddharth<span className={styles.primaryColorSpan}>.ray()</span></h1>
          <h2>&gt; I am a <Typing /></h2>
        </div>

        <div style={{ marginTop: "250px", marginBottom: "50px" }}>
        <Controller>
          <Scene>
            <div style={{ textAlign: 'center' }}>
              <h1 >The Homepage is under construction</h1>
              <p>Check out the other pages for now :)</p>
            </div>
          </Scene>
        </Controller>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
