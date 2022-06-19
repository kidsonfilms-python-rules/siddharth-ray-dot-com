import Head from 'next/head'
import styles from '../styles/Error404.module.css'
import Link from 'next/link'

export default function Error404() {
    return (
        <div className={styles.body}>
            <Head>
                <title>Siddharth Ray | 404 Page Not Found</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />


                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />

                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" async></script>

            </Head>

            <div className={styles.container}>
                <div className={["row " + styles.content]}>
                    <div className="col-lg-12"></div>
                    <div className="col-lg-12">
                        <h1>404</h1>
                        <h2>Oops, the page you&apos;re looking for does not exist.</h2>
                        <p>
                            You may want to head back to the homepage.
                            <br/>
                            <span>
                                If you think something is broken, contact me.
                            </span>
                        </p>
                        <Link href="/"><span className={styles.btn}>RETURN HOME</span></Link>
                        <Link href="/contact"><span className={styles.btn}>CONTACT ME</span></Link>
                    </div>
                </div>
            </div>
            <div className={styles.bgImg}></div>
        </div>
    )
}