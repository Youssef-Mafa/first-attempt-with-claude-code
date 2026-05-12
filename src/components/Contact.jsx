import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Contact.module.css'

const EASE = [0.16, 1, 0.3, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: EASE },
})

const BUSINESS_TYPES = [
  'Restaurant / Café', 'Clinique / Cabinet', 'Boutique / E-commerce',
  'Coaching / Formation', 'Hôtel / Riad', 'Autre',
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  const anim = (delay) => ({
    ...fade(delay),
    animate: inView ? fade(delay).animate : fade(delay).initial,
  })

  return (
    <section id="contact" ref={ref} className={styles.section}>
      <div className={styles.inner}>

        {/* Left — copy */}
        <div className={styles.left}>
          <motion.span className={styles.eyebrow} {...anim(0)}>
            Contact
          </motion.span>
          <motion.h2 className={styles.heading} {...anim(0.1)}>
            Let&apos;s build something<br />that works.
          </motion.h2>
          <motion.p className={styles.sub} {...anim(0.2)}>
            Tell me about your project. I&apos;ll come back to you within 24 hours
            with a clear plan and an honest price.
          </motion.p>

          <motion.div className={styles.details} {...anim(0.3)}>
            <a href="mailto:youssefmafanze@gmail.com" className={styles.detailRow}>
              <span className={styles.detailIcon}>✉</span>
              youssefmafanze@gmail.com
            </a>
            <a href="https://wa.me/212600000000" className={styles.detailRow}>
              <span className={styles.detailIcon}>✆</span>
              WhatsApp · Agadir, Morocco
            </a>
            <span className={styles.detailRow}>
              <span className={styles.detailIcon}>◎</span>
              Response within 24 hours
            </span>
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.form
          className={styles.form}
          {...anim(0.15)}
          onSubmit={e => e.preventDefault()}
        >
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Your name</span>
              <input className={styles.input} type="text" placeholder="Youssef Amrani" required />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input className={styles.input} type="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Type of business</span>
            <select className={styles.input}>
              <option value="">Select one…</option>
              {BUSINESS_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Tell me about your project</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="What do you sell, what's not working, what do you need?"
              rows={5}
              required
            />
          </label>

          <button type="submit" className={styles.submit}>
            Send message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.form>

      </div>
    </section>
  )
}
