import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Services.module.css'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Custom interfaces built around your brand — not templates. Every pixel earns its place.',
    details: ['UI & UX design', 'Brand identity', 'Design system'],
  },
  {
    num: '02',
    title: 'Development',
    desc: 'Fast, mobile-first websites that load in under 2 seconds and rank on Google from day one.',
    details: ['React / Vite', 'SEO-ready markup', 'CMS integration'],
  },
  {
    num: '03',
    title: 'Local SEO',
    desc: 'Get found by customers in your city. Google Business, schema markup, local backlinks.',
    details: ['Google Business', 'Schema markup', 'Arabic & French'],
  },
  {
    num: '04',
    title: 'Maintenance',
    desc: 'Monthly care plans — updates, speed audits, and priority support so you never go dark.',
    details: ['Monthly updates', 'Speed audits', 'Priority support'],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const panelsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current.filter(Boolean)

      // All panels except first start invisible below
      gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: 60 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.8,
          start: 'top top',
          end: `+=${window.innerHeight * (panels.length - 1)}`,
        },
      })

      // Each transition: new panel fades in while old fades out simultaneously
      panels.slice(1).forEach((panel, i) => {
        tl.to(panel, { autoAlpha: 1, yPercent: 0, duration: 1, ease: 'power1.inOut' })
        tl.to(panels[i], { autoAlpha: 0, yPercent: -20, duration: 1, ease: 'power1.inOut' }, '<')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.eyebrowRow}>
        <span className={styles.eyebrow}>What I offer</span>
      </div>

      <div className={styles.stage}>
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            ref={el => panelsRef.current[i] = el}
            className={styles.panel}
            style={{ zIndex: i + 1 }}
          >
            <div className={styles.num}>{s.num}</div>
            <div className={styles.body}>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.details}>
                {s.details.map(d => (
                  <li key={d} className={styles.detailItem}>
                    <span className={styles.detailDot}>✦</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
