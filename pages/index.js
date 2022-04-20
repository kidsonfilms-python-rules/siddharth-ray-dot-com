import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Typing from '../components/Typing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <div className={styles.stinger}>
          <h1 className={styles.title}>siddharth<span className={styles.primaryColorSpan}>.ray()</span></h1>
          <h2>> I am a <Typing/></h2>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
