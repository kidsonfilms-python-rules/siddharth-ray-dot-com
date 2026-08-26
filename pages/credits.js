import Head from 'next/head'
import styles from '../styles/Credits.module.css'
import { NavBar } from '../components/NavBar'
import Footer from '../components/Footer'
import Typed from 'typed.js'
import React from 'react'

const creditsIntro = `ray@rayOS:~$ credits --list

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
`

const commandOutput = {
  help: 'Commands: help, about, projects, credits, licenses, clear, open <page>',
  about: 'Siddharth Ray — software developer working across product development, computer vision, and creative technology.',
  projects: 'Project REDACTED, DJFlame, Juice 16236, Discord Bots, UTSAV, and VFX & Editing.',
  credits: 'The full credits list is shown above.',
  licenses: 'Open /licenses to view third-party licenses.',
}

export default function Credits() {
  const el = React.useRef(null)
  const typed = React.useRef(null)
  const input = React.useRef(null)
  const [ready, setReady] = React.useState(false)
  const [showIntro, setShowIntro] = React.useState(true)
  const [command, setCommand] = React.useState('')
  const [history, setHistory] = React.useState([])

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [creditsIntro],
      typeSpeed: 20,
      startDelay: 200,
      loop: false,
      cursorChar: '▋',
      onComplete: () => setReady(true),
    })

    return () => typed.current?.destroy()
  }, [])

  React.useEffect(() => {
    if (ready) input.current?.focus()
  }, [ready])

  function runCommand(event) {
    event.preventDefault()
    const value = command.trim()
    const normalized = value.toLowerCase()
    if (!value) return

    if (normalized === 'clear') {
      setHistory([])
      setShowIntro(false)
    } else if (normalized.startsWith('open ')) {
      const page = normalized.slice(5)
      const destinations = { portfolio: '/portfolio', licenses: '/licenses', linkedin: 'https://www.linkedin.com/in/the-ray' }
      if (destinations[page]) window.location.assign(destinations[page])
      else setHistory((items) => [...items, { command: value, output: `Unknown destination: ${page}` }])
    } else {
      setHistory((items) => [...items, {
        command: value,
        output: commandOutput[normalized] || `Command not found: ${value}. Type 'help' for available commands.`,
      }])
    }

    setCommand('')
  }

  return (
    <div>
      <Head>
        <title>Siddharth Ray | Credits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <div className={styles.terminal}>
          {showIntro && <span className={styles.intro} ref={el} />}
          {history.map((entry, index) => (
            <div className={styles.historyEntry} key={`${entry.command}-${index}`}>
              <div>ray@rayOS:~$ {entry.command}</div>
              <div>{entry.output}</div>
            </div>
          ))}
          {ready && (
            <form className={styles.commandLine} onSubmit={runCommand}>
              <label htmlFor="terminal-command">ray@rayOS:~$</label>
              <input
                ref={input}
                id="terminal-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                autoComplete="off"
                spellCheck="false"
                aria-label="Terminal command"
              />
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
