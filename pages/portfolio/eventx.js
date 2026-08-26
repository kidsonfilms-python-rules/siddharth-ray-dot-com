import Head from 'next/head'
import styles from '../../styles/PortfolioPage.module.css'
import { NavBarPortfolio } from '../../components/NavBar'

export default function EventXPortfolioPage() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Siddharth Ray | EventX | Portfolio</title>
        <meta name="description" content="EventX is a mobile-first event operations platform for ticketing, point of sale, meals, scheduling, announcements, and maps." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBarPortfolio page="portfolio" />

      <main className={styles.main}>
        <section className={styles.leftBox}>
          <p className={styles.kicker}>EVENTX · EVENT OPERATIONS PLATFORM</p>
          <div className={styles.titleBox}>
            <h1 className={styles.eventx}>EventX</h1>
          </div>
          <p className={styles.lede}>
            A mobile-first convention and event management system that connects the guest experience with the operational work required to run an event.
          </p>

          <div className={styles.detailGrid}>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>ONE CONNECTED SYSTEM</p>
              <p>EventX brings ticketing and access control, point of sale, meal management, live schedules, announcements, and interactive maps into one operational workflow.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>GUESTS + STAFF</p>
              <p>Guests use dedicated Android and iOS apps, while administrators and volunteers share one Android management app with access dynamically limited to each person’s role.</p>
            </article>
            <article className={styles.detailCard}>
              <p className={styles.cardLabel}>BUILT FOR EVENT DAY</p>
              <p>Critical information is available offline for scanning, check-ins, meal redemption, schedules, and maps, then synchronizes once connectivity returns.</p>
            </article>
          </div>

          <section className={styles.screenshotSection} aria-labelledby="eventx-screenshots">
            <h2 id="eventx-screenshots">App screenshots</h2>
            <div className={styles.screenshotGrid}>
              <div className={styles.screenshotSlot}><span>Guest app</span><small>Tickets, schedule, meals, and maps</small></div>
              <div className={styles.screenshotSlot}><span>Check-in + POS</span><small>Access control and purchases</small></div>
              <div className={styles.screenshotSlot}><span>Management app</span><small>Role-based event operations</small></div>
            </div>
          </section>

          <section className={styles.skills}>
            <h2>Core capabilities</h2>
            <div className={styles.tagList}>
              <span>QR + NFC ticketing</span>
              <span>POS</span>
              <span>Meal fulfillment</span>
              <span>Live schedules</span>
              <span>Announcements</span>
              <span>Interactive maps</span>
            </div>
          </section>
        </section>

        <aside className={styles.rightBox}>
          <div className={styles.projectMark}>
            <span><span className={styles.highlight}>{'// PROJECT'}</span></span>
            <strong>DELTA</strong>
            <small>MOBILE-FIRST PLATFORM</small>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Operations</h2>
            <p>Ticket tiers, Eventbrite imports, QR/NFC check-in, manual credentials, day passes, meals, merchandise, and real-time attendance context.</p>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Platform foundation</h2>
            <p>Supabase provides the database, authentication, realtime synchronization, and storage. Firebase Cloud Messaging handles push notifications, and Square processes payments without EventX storing raw card data.</p>
          </div>

          <div className={styles.sidebarSection}>
            <h2>Security model</h2>
            <p>Authentication, role-based permissions, Row-Level Security, encrypted local storage, backend validation, and audit logging support least-privilege operation. Its practices are informed by SOC 2 principles; EventX is not SOC 2 certified.</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
