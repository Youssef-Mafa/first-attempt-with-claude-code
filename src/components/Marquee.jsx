import styles from './Marquee.module.css'

const ITEMS = [
  'Restaurants', 'Clinics', 'Boutiques', 'Coaches',
  'High-Converting Websites', 'Agadir, Morocco', 'Fast Delivery',
  'Custom Design', 'SEO-Ready', 'Mobile-First',
]

function Track({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className={styles.trackWrap}>
      <ul
        className={styles.track}
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {doubled.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.dot}>✦</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className={styles.marquee}>
      <Track items={ITEMS} />
      <Track items={ITEMS} reverse />
    </section>
  )
}
