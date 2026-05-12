import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Nav.module.css'

const LINKS = [
  { label: 'Work',     href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
]

export default function Nav({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const bgOpacity     = useTransform(scrollY, [0, 80], [0, 0.92])

  return (
    <>
      <motion.header
        className={styles.nav}
        style={{ '--border-op': borderOpacity, '--bg-op': bgOpacity }}
      >
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>YM</span>
          <span className={styles.logoName}>Youssef Mafamane</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.links}>
          {LINKS.map(l => (
            <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </nav>

        <div className={styles.right}>
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a href="#contact" className={styles.cta}>Let&apos;s talk</a>
          <button
            className={styles.burger}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.line} ${open ? styles.lineTop : ''}`} />
            <span className={`${styles.line} ${open ? styles.lineBot : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        className={styles.drawer}
        initial={false}
        animate={open ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -8, pointerEvents: 'none' }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {[...LINKS, { label: 'Contact', href: '#contact' }].map(l => (
          <a
            key={l.label}
            href={l.href}
            className={styles.drawerLink}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </motion.div>
    </>
  )
}
