import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logoText}>Tutoring with Becca</h1> {/* Removed Link */}
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === '/' ? styles.active : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === '/about' ? styles.active : ''}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/services" legacyBehavior>
            <a className={router.pathname === '/services' ? styles.active : ''}>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/testimonials" legacyBehavior>
            <a className={router.pathname === '/testimonials' ? styles.active : ''}>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className={router.pathname === '/contact' ? styles.active : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
