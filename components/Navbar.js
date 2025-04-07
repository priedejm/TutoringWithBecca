import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

const scrollToElement = (id) => {
  // Get the target element by its ID
  const element = document.getElementById(id);
  
  // If the element exists, scroll to it
  if (element) {
    // Get the screen width
    const offset = window.innerWidth < 475 ? 25 : 50; // If less than 475px, use -25px offset
    
    window.scrollTo({
      top: element.offsetTop - offset, // Adjust scroll position by the calculated offset
      behavior: 'smooth', // Smooth scroll
    });
  }
};


export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.topCorners}>
        {/* Left SVG */}
        <div className={styles.topLeft}>
          <Image src="/assets/circle.png" width={300} height={300} />
        </div>
        {/* Right SVG */}
        <div className={styles.topRight}>
          <Image src="/assets/circle.png" width={300} height={300} />
        </div>
      </div>

      <div className={styles.logoContainer}>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.logoLink}>
            <h1 className={styles.logo}>SAT TUTORING</h1>
            <h2 className={styles.subtext}>WITH BECCA</h2>
          </a>
        </Link>
      </div>  
      
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about" legacyBehavior>
            <a 
              className={router.pathname === '/#about' ? styles.active : ''} 
              onClick={(e) => { e.preventDefault(); scrollToElement('about'); }}
            >
              ABOUT ME
            </a>
          </Link>
        </li>
        <li>
          <Link href="#services" legacyBehavior>
            <a 
              className={router.pathname === '/#services' ? styles.active : ''} 
              onClick={(e) => { e.preventDefault(); scrollToElement('services'); }}
            >
              SERVICES
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact" legacyBehavior>
            <a 
              className={router.pathname === '/#contact' ? styles.active : ''} 
              onClick={(e) => { e.preventDefault(); scrollToElement('contact'); }}
            >
              REACH OUT!
            </a>
          </Link>
        </li>
        <li>
          <Link href="#testimonials" legacyBehavior>
            <a 
              className={router.pathname === '/#testimonials' ? styles.active : ''} 
              onClick={(e) => { e.preventDefault(); scrollToElement('testimonials'); }}
            >
              TESTIMONIALS
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
