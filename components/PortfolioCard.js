import styles from '../styles/PortfolioCard.module.css'


export function PortfolioCard(props) {
    const thumnail = props.thumbnail
    const title = props.title
    const date = props.date
    const description = props.description
    const redirect = props.redirect

    return (
        <div className={styles.card} 
        onClick={() => window.location = redirect}
        >
            <div className={styles.imgWrapper}>
                <img src={thumnail}></img>
            </div>
            <div className={styles.bodyContent}>
                <h1>{title}</h1>
                <h2>{date}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function PortfolioCardShowMore() {
    return (
        <div className={styles.card} onClick={() => window.location ="https://github.com/kidsonfilms-python-rules/"}>
            <div className={styles.bodyContent}>
                <h1>See More</h1>
                <h2>Click here to check out my GitHub</h2>
            </div>
        </div>
    )
}