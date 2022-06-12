import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Credits.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import Typed from 'typed.js'
import React from 'react'

export default function Credits() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
`ray@rayOS:~$ credits --list

--------------------------------------
       SIDDHARTHRAY.COM CREDITS
--------------------------------------

SECTION 1: WEBSITE CORE

<a href="https://www.npmjs.com/package/next" target="_blank">next</a>
<a href="https://www.npmjs.com/package/next-seo" target="_blank">next-seo</a>
<a href="https://www.npmjs.com/package/react" target="_blank">react</a>
<a href="https://www.npmjs.com/package/react-dom" target="_blank">react-dom</a>
<a href="https://www.npmjs.com/package/react-scrollmagic" target="_blank">react-scrollmagic</a>

SECTION 2: ICONS

<a href="https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core" target="_blank">@fortawesome/fontawesome-svg-core</a>
<a href="https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons" target="_blank">@fortawesome/free-brands-svg-icons</a>
<a href="https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons" target="_blank">@fortawesome/free-solid-svg-icons</a>
<a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome" target="_blank">@fortawesome/react-fontawesome</a>

SECTION 3: MISC

<a href="https://www.npmjs.com/package/crypto" target="_blank">crypto</a>
<a href="https://www.npmjs.com/package/typed.js" target="_blank">typed.js</a>

<a href="/licenses">VIEW ALL LICENSES HERE (CLICK)</a>

~~~~~~~~~~~~~~END CREDITS~~~~~~~~~~~~~

ray@rayOS:~$
`
            ],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 200,
            loop: false,
            cursorChar: "▋",
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div>
            <Head>
                <title>Siddharth Ray | Credits</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar/>

            <main className={styles.main}>
                <div className={styles.terminal}>
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
            </main>

            <Footer />
        </div>
    )
}
