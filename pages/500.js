import Head from 'next/head'
import styles from '../styles/Error404.module.css'

export default function Error500() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Siddharth Ray | 500 Server Error</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />


                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />

                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

            </Head>

            <div class={styles.container}>
                <div class={["row " + styles.content]}>
                    <div class="col-lg-12"></div>
                    <div class="col-lg-12">
                        <h1>500</h1>
                        <h2>Oops, our server is failing.</h2>
                        <p>
                            Please try again later.
                            <br/>
                            <span>
                                If you think something is broken, contact me.
                            </span>
                        </p>
                        <a href="/"><span class={styles.btn}>RETURN HOME</span></a>
                        <a href="/contact"><span class={styles.btn}>CONTACT ME</span></a>
                    </div>
                </div>
            </div>
            <div class={styles.bgImg}></div>
        </div>
    )
}