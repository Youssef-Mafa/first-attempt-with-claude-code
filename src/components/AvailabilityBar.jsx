import { motion } from 'framer-motion'
import styles from './AvailabilityBar.module.css'

const EASE = [0.16, 1, 0.3, 1]

export default function AvailabilityBar() {
  return (
    <motion.div
      className={styles.bar}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.pulse} />
          <span className={styles.label}>Available for new projects</span>
        </div>

        <div className={styles.divider} />

        <span className={styles.detail}>
          2 spots open &nbsp;·&nbsp; Starting June 2026
        </span>

        <div className={styles.spacer} />

        <a href="#contact" className={styles.cta}>
          Let&apos;s talk
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.div>
  )
}
