import Head from 'next/head'
import styles from '../styles/Error404.module.css'
import 'next/link'

export default function Error404() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Siddharth Ray | 404 Page Not Found</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />


                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />

                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

            </Head>

            <div class={styles.container}>
                <div class={["row " + styles.content]}>
                    <div className="col-lg-12"></div>
                    <div className="col-lg-12">
                        <h1>404</h1>
                        <h2>Oops, the page you're looking for does not exist.</h2>
                        <p>
                            You may want to head back to the homepage.
                            <br/>
                            <span>
                                If you think something is broken, contact me.
                            </span>
                        </p>
                        <a href="/"><span className={styles.btn}>RETURN HOME</span></a>
                        <a href="/contact"><span className={styles.btn}>CONTACT ME</span></a>
                    </div>
                </div>
            </div>
            <div className={styles.bgImg}></div>
        </div>
    )
}