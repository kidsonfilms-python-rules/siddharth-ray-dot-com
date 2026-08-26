import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from '../styles/PageFunction.module.css'

export default function PageFunction({ label, summary, params = 'visitor', returns = 'Page' }) {
  const trigger = useRef(null)
  const tooltipId = useId()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => setMounted(true), [])

  function updatePosition() {
    const rect = trigger.current?.getBoundingClientRect()
    if (!rect) return

    setPosition({
      top: rect.bottom + 12,
      left: Math.max(12, Math.min(rect.left, window.innerWidth - 280)),
    })
  }

  function showTooltip() {
    updatePosition()
    setOpen(true)
  }

  return (
    <>
      <span
        ref={trigger}
        className={styles.function}
        tabIndex="0"
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={showTooltip}
        onMouseMove={updatePosition}
        onMouseLeave={() => setOpen(false)}
        onFocus={showTooltip}
        onBlur={() => setOpen(false)}
      >
        {label}
      </span>
      {mounted && open && createPortal(
        <div className={styles.tooltip} id={tooltipId} role="tooltip" style={position}>
          <b>{label.replace('.', '')}</b>
          <span>{summary}</span>
          <span><i>@param</i> {params}</span>
          <span><i>@returns</i> {returns}</span>
        </div>,
        document.body,
      )}
    </>
  )
}
