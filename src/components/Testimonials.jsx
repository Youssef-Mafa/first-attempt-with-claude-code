import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Testimonials.module.css'

const EASE = [0.16, 1, 0.3, 1]

const REVIEWS = [
  {
    quote: "Notre site a triplé nos réservations en deux mois. Les clients nous disent qu'ils ont réservé parce que le site leur inspirait confiance.",
    name: 'Karim Benali',
    role: 'Fondateur',
    business: 'Dar Zitoun Restaurant',
    location: 'Agadir',
    initial: 'K',
  },
  {
    quote: "Youssef a livré en 18 jours, exactement comme promis. Le design est professionnel et nos patients trouvent facilement nos horaires et la prise de RDV.",
    name: 'Dr. Samira Ouali',
    role: 'Médecin généraliste',
    business: 'Cabinet Santé+',
    location: 'Marrakech',
    initial: 'S',
  },
  {
    quote: "Je voulais un site qui ressemble à une vraie boutique internationale. C'est exactement ce que j'ai eu — et mes ventes en ligne ont démarré dès la première semaine.",
    name: 'Nadia Amrani',
    role: 'Propriétaire',
    business: 'Maison Riad Boutique',
    location: 'Casablanca',
    initial: 'N',
  },
  {
    quote: "Mon ancienne page ne convertissait pas. La nouvelle landing page de Youssef a doublé mes inscriptions au coaching en moins d'un mois.",
    name: 'Khalid Idrissi',
    role: 'Life Coach',
    business: 'Coach Khalid',
    location: 'Agadir',
    initial: 'K',
  },
]

function Card({ review, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <article
      ref={ref}
      className={styles.card}
      style={{ top: `calc(88px + ${index * 20}px)`, zIndex: index + 1 }}
    >
      <motion.div
        className={styles.cardInner}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className={styles.stars}>{'★'.repeat(5)}</div>
        <blockquote className={styles.quote}>"{review.quote}"</blockquote>
        <div className={styles.author}>
          <div className={styles.avatar}>{review.initial}</div>
          <div className={styles.authorInfo}>
            <span className={styles.name}>{review.name}</span>
            <span className={styles.meta}>{review.role} · {review.business} · {review.location}</span>
          </div>
        </div>
      </motion.div>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Client results</span>
        <h2 className={styles.title}>Real businesses,<br />real growth.</h2>
      </div>
      <div className={styles.stack}>
        {REVIEWS.map((r, i) => <Card key={i} review={r} index={i} />)}
      </div>
      <div className={styles.spacer} />
    </section>
  )
}
