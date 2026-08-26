import styles from '../styles/PortfolioCard.module.css'

export function PortfolioCard({ title, date, description, redirect, number, thumbnail, thumbnailLabel }) {
  return (
    <a className={styles.card} href={redirect}>
      <span className={styles.number}>{number}</span>
      {thumbnail ? (
        <img className={styles.thumbnail} src={thumbnail} alt="" />
      ) : (
        <div className={styles.placeholder}>{thumbnailLabel || 'Project preview'}</div>
      )}
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <p className={styles.meta}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.arrow} aria-hidden="true">↗</span>
    </a>
  )
}
