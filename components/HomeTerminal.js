import { useEffect, useRef, useState } from 'react'
import styles from '../styles/HomeTerminal.module.css'

const commandOutput = {
  help: 'Commands: help, about, projects, credits, licenses, clear, open <page>, snake',
  about: 'Siddharth Ray — EECS student and software developer working across computer vision and creative technology.',
  projects: 'Project REDACTED, DJFlame, Juice 16236, Discord Bots, UTSAV, and VFX & Editing.',
  credits: 'Open /credits for the full credits list.',
  licenses: 'Open /licenses to view third-party licenses.',
}

const initialGame = () => ({
  snake: [{ x: 8, y: 8 }, { x: 7, y: 8 }, { x: 6, y: 8 }],
  food: { x: 12, y: 8 },
  status: 'playing',
})

function nextFood(snake) {
  const available = []
  for (let y = 0; y < 16; y += 1) {
    for (let x = 0; x < 16; x += 1) {
      if (!snake.some((segment) => segment.x === x && segment.y === y)) available.push({ x, y })
    }
  }
  return available[Math.floor(Math.random() * available.length)] || { x: 0, y: 0 }
}

export default function HomeTerminal() {
  const input = useRef(null)
  const gameArea = useRef(null)
  const direction = useRef({ x: 1, y: 0 })
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([])
  const [mode, setMode] = useState('terminal')
  const [game, setGame] = useState(initialGame)

  useEffect(() => {
    if (mode === 'terminal') input.current?.focus()
    else gameArea.current?.focus()
  }, [mode])

  useEffect(() => {
    if (mode !== 'snake') return undefined

    function handleKeyDown(event) {
      const keys = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
      }
      if (event.key === 'Escape') {
        setMode('terminal')
        return
      }
      const nextDirection = keys[event.key]
      if (!nextDirection) return
      event.preventDefault()
      if (nextDirection.x !== -direction.current.x || nextDirection.y !== -direction.current.y) {
        direction.current = nextDirection
      }
    }

    const interval = window.setInterval(() => {
      setGame((current) => {
        if (current.status !== 'playing') return current
        const head = current.snake[0]
        const nextHead = {
          x: head.x + direction.current.x,
          y: head.y + direction.current.y,
        }
        const hitWall = nextHead.x < 0 || nextHead.x > 15 || nextHead.y < 0 || nextHead.y > 15
        const hitSelf = current.snake.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y)
        if (hitWall || hitSelf) return { ...current, status: 'game over — press Enter to restart or Escape to return' }

        const ate = nextHead.x === current.food.x && nextHead.y === current.food.y
        const snake = ate ? [nextHead, ...current.snake] : [nextHead, ...current.snake.slice(0, -1)]
        return { snake, food: ate ? nextFood(snake) : current.food, status: 'playing' }
      })
    }, 115)

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.clearInterval(interval)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mode])

  function startSnake() {
    direction.current = { x: 1, y: 0 }
    setGame(initialGame())
    setMode('snake')
  }

  function runCommand(event) {
    event.preventDefault()
    const value = command.trim()
    const normalized = value.toLowerCase()
    if (!value) return

    if (normalized === 'clear') setHistory([])
    else if (normalized === 'snake') {
      setHistory((items) => [...items, { command: value, output: 'Starting snake…' }])
      startSnake()
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

  const occupied = new Set(game.snake.map((segment) => `${segment.x}-${segment.y}`))
  const board = Array.from({ length: 16 }, (_, y) => {
    const row = Array.from({ length: 16 }, (_, x) => {
      if (game.snake[0].x === x && game.snake[0].y === y) return '@'
      if (game.food.x === x && game.food.y === y) return '*'
      return occupied.has(`${x}-${y}`) ? 'o' : '·'
    }).join(' ')
    return `│ ${row} │`
  }).join('\n')

  return (
    <div className={styles.homeTerminal}>
      {mode === 'terminal' ? (
        <>
          {history.map((entry, index) => (
            <div className={styles.terminalHistory} key={`${entry.command}-${index}`}>
              <div>&gt; {entry.command}</div>
              <div>{entry.output}</div>
            </div>
          ))}
          <form className={styles.terminalLine} onSubmit={runCommand}>
            <label htmlFor="home-terminal-command">&gt;</label>
            <div className={styles.terminalInput}>
              <span aria-hidden="true">{command}<span className={styles.terminalCursor} /></span>
              <input
                ref={input}
                id="home-terminal-command"
                value={command}
                onChange={(event) => setCommand(event.target.value)}
                autoComplete="off"
                spellCheck="false"
                aria-label="Homepage terminal command"
              />
            </div>
          </form>
        </>
      ) : (
          <div
            ref={gameArea}
            className={styles.snakeGame}
          tabIndex="0"
          onKeyDown={(event) => {
            if (event.key === 'Enter' && game.status !== 'playing') startSnake()
          }}
          >
          <div className={styles.snakeHeader}>
            <span>score: {game.snake.length - 3}</span>
          </div>
          <pre className={styles.snakeBoard} role="application" aria-label="Snake game. Use arrow keys to move.">{`┌─────────────────────────────────┐\n${board}\n└─────────────────────────────────┘`}</pre>
          <p>{game.status === 'playing' ? 'Arrow keys to move · Esc to exit' : game.status}</p>
        </div>
      )}
    </div>
  )
}
