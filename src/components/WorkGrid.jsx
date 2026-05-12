import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './WorkGrid.module.css'

const EASE = [0.16, 1, 0.3, 1]

const PROJECTS = [
  {
    id: 1, name: 'Dar Zitoun', type: 'Restaurant', year: '2025',
    tags: ['Menu digital', 'Réservations', 'SEO local'],
    shade: '#1c1a17', accent: '#c8a96e',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
  },
  {
    id: 2, name: 'Cabinet Santé+', type: 'Medical Clinic', year: '2025',
    tags: ['Prise de RDV', 'Mobile-first', 'Google Maps'],
    shade: '#14161a', accent: '#6e9ec8',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80',
  },
  {
    id: 3, name: 'Maison Riad', type: 'Boutique Hotel', year: '2025',
    tags: ['Galerie', 'Booking', 'Branding'],
    shade: '#191614', accent: '#c87a6e',
    img: 'https://images.unsplash.com/photo-1520250497591-112ba8d25d1d?w=900&q=80',
  },
  {
    id: 4, name: 'Coach Khalid', type: 'Life Coach', year: '2024',
    tags: ['Landing page', 'Funnel CTA', 'Analytics'],
    shade: '#141a16', accent: '#7ac87a',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
  },
]

function Card({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{ top: `calc(80px + ${index * 24}px)`, zIndex: index + 1 }}
    >
      <motion.div
        className={styles.cardInner}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
      >
        {/* Project image */}
        <div className={styles.visual} style={{ background: project.shade }}>
          <img
            src={project.img}
            alt={project.name}
            className={styles.visualImg}
          />
          <div className={styles.visualOverlay} style={{ '--accent': project.accent }} />
        </div>

        {/* Meta */}
        <div className={styles.meta}>
          <div className={styles.metaLeft}>
            <span className={styles.index}>0{project.id}</span>
            <div>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.typeLabel}>{project.type}</p>
            </div>
          </div>

          <div className={styles.tags}>
            {project.tags.map(t => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <div className={styles.metaRight}>
            <span className={styles.year}>{project.year}</span>
            <a href="#contact" className={styles.link} style={{ color: project.accent }}>
              View project →
            </a>
          </div>
        </div>
      </motion.div>
    </article>
  )
}

export default function WorkGrid() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Selected work</span>
        <h2 className={styles.title}>Built for results,<br />designed to convert.</h2>
      </div>

      <div className={styles.stack}>
        {PROJECTS.map((p, i) => <Card key={p.id} project={p} index={i} />)}
      </div>
    </section>
  )
}
