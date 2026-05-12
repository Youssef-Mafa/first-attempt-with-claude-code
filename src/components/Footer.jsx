import styles from './Footer.module.css'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'WhatsApp', href: 'https://wa.me/212600000000' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Big name */}
      <div className={styles.nameRow}>
        <span className={styles.name}>Youssef Mafamane</span>
        <span className={styles.tagline}>Web Design Studio · Agadir, Morocco</span>
      </div>

      {/* Bottom bar */}
      <div className={styles.bar}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Youssef Mafamane. All rights reserved.
        </span>

        <nav className={styles.nav}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} className={styles.navLink}>{n.label}</a>
          ))}
        </nav>

        <div className={styles.social}>
          {SOCIAL.map(s => (
            <a key={s.label} href={s.href} className={styles.socialLink}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
