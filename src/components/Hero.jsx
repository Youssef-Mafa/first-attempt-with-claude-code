import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const EASE = [0.16, 1, 0.3, 1]

function SplitReveal({ text, delay = 0 }) {
  return (
    <span aria-label={text} className={styles.split}>
      {text.split(' ').map((word, wi) => (
        <span key={wi} className={styles.word}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className={styles.char}
              initial={{ opacity: 0, y: '60%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{
                delay: delay + wi * 0.06 + ci * 0.022,
                duration: 0.7,
                ease: EASE,
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < text.split(' ').length - 1 && (
            <span className={styles.space}>&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  )
}

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: EASE },
})

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <motion.div className={styles.badge} {...fade(0.1)}>
          <span className={styles.dot} />
          Available for projects &nbsp;·&nbsp; Agadir, Morocco
        </motion.div>

        <h1 className={styles.headline}>
          <SplitReveal text="Websites that" delay={0.2} />
          <br />
          <SplitReveal text="win clients." delay={0.5} />
        </h1>

        <motion.p className={styles.sub} {...fade(1.1)}>
          YM designs and builds high-converting websites
          for restaurants, clinics, boutiques, and coaches across Morocco.
        </motion.p>

        <motion.div className={styles.ctas} {...fade(1.3)}>
          <a href="#work" className={styles.btnPrimary}>See my work</a>
          <a href="#contact" className={styles.btnGhost}>Get in touch</a>
        </motion.div>

      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        scroll
      </motion.div>
    </section>
  )
}
