import styles from "../styles/ExperienceBlock.module.css"

export default function ExperienceBlock(props) {
    return (
        <div className={styles.block}>
            <div className={styles.timeframeContainer}>
                <p>{props.timeframe}</p>
            </div>
            <div className={styles.mainBody}>
                <div className={styles.titleDiv}>
                    <h1>{props.companyName}</h1>
                    <p>{props.location}</p>
                </div>
                <h2>{props.jobTitle}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}