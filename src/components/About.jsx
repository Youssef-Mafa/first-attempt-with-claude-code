import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.16, 1, 0.3, 1]

const TAGS = [
  'React', 'Figma', 'GSAP', 'Framer Motion', 'Vite', 'SEO local',
  'Mobile-first', 'Performance', 'Arabe & Français', 'Agadir',
  'Fast delivery', 'Accessible', 'Webflow', 'Copywriting', '5★ rated',
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: EASE },
})

export default function About() {
  const sectionRef = useRef(null)
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1 moves left, row 2 moves right — horizontal-on-vertical
      gsap.to(track1Ref.current, {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      gsap.to(track2Ref.current, {
        xPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const half = Math.ceil(TAGS.length / 2)
  const row1 = [...TAGS.slice(0, half), ...TAGS.slice(0, half)]
  const row2 = [...TAGS.slice(half), ...TAGS.slice(half)]

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      {/* Bio block */}
      <div className={styles.bio}>
        <div className={styles.left}>
          <motion.span className={styles.eyebrow} {...fade(0)} animate={inView ? fade(0).animate : fade(0).initial}>
            About
          </motion.span>
          <motion.h2 className={styles.heading} {...fade(0.1)} animate={inView ? fade(0.1).animate : fade(0.1).initial}>
            Designer, builder,<br />based in Agadir.
          </motion.h2>
          <motion.p className={styles.body} {...fade(0.25)} animate={inView ? fade(0.25).animate : fade(0.25).initial}>
            I&apos;m Youssef Mafamane — I design and build websites that help local
            businesses in Morocco attract more clients and look like they mean it.
            Restaurants, clinics, boutiques, coaches — I turn their goals into
            pages that convert.
          </motion.p>
          <motion.p className={styles.body} {...fade(0.35)} animate={inView ? fade(0.35).animate : fade(0.35).initial}>
            I work in French, Arabic, and English. Every project ships in under
            3 weeks, built for speed, SEO, and real results.
          </motion.p>
        </div>

        <motion.div
          className={styles.portrait}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
        >
          <span className={styles.portraitLabel}>Youssef Mafamane</span>
          <span className={styles.portraitSub}>Agadir, Morocco</span>
        </motion.div>
      </div>

      {/* Horizontal-on-vertical tag rows */}
      <div className={styles.tagsWrap}>
        <div ref={track1Ref} className={styles.tagTrack}>
          {row1.map((t, i) => <span key={i} className={styles.tag}>{t}</span>)}
        </div>
        <div ref={track2Ref} className={styles.tagTrack}>
          {row2.map((t, i) => <span key={i} className={`${styles.tag} ${styles.tagAlt}`}>{t}</span>)}
        </div>
      </div>
    </section>
  )
}
