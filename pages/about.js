import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Typing from '../components/Typing'

export default function About() {
  return (
    <div>
      <Head>
        <title>Siddharth Ray | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar page="about"/>

      <main className={styles.main}>
        <div className={styles.stinger}>
          <h1 className={styles.title}>siddharth<span className={styles.primaryColorSpan}>.portfolio()</span></h1>
          <h2>&gt; I am a <Typing/></h2>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
