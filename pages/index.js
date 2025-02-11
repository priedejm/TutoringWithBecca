import Image from 'next/image';
import Layout from '../components/Layout'; 
import styles from '../styles/Home.module.css';
import profilePic from '../public/assets/profilePic.png';
import * as Flags from 'country-flag-icons/react/3x2';

const testimonials = [
  { name: "Sarah from Norway", message: "Becca's teaching helped me improve 190 points!", countryCode: "NO" },
  { name: "Morgan from Florida", message: "She helped me focus despite my ADHD and improved my score by 180 points!", countryCode: "US" }, // US flag for states
  { name: "Finn from Germany", message: "Her structured approach helped me boost my score by 110 points!", countryCode: "DE" },
  { name: "Manuel from Lisbon", message: "I improved 100 points in less than a month thanks to Becca!", countryCode: "PT" },
  { name: "Jack from the UK", message: "Becca's guidance increased my score by 190 points!", countryCode: "GB" },
];

export default function Home() {
  return (
    <Layout> 
      <div className={styles.homeContainer}>
        {/* Hero Section */}
        <header className={styles.heroSection}>
          <div className={styles.textContainer}>
            <h1>Welcome to Tutoring with Becca</h1>
            <p>Expert SAT tutoring tailored to your success.</p>
            <a href="/services" className={styles.ctaButton}>View Services</a>
          </div>
          <div className={styles.imageContainer}>
            <Image 
              src={profilePic}
              alt="Becca's Profile Picture" 
              width={250} 
              height={250} 
              className={styles.profilePic}
            />
          </div>
        </header>

        {/* Scrolling Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.scrollingContainer}>
            <div className={styles.testimonialTrack}>
              {/* Repeat testimonials many times for ultra-long scrolling */}
              {Array(50).fill(testimonials).flat().map((testimonial, index) => {
                const countryCode = testimonial.countryCode;
                const FlagComponent = Flags[countryCode];

                return (
                  <div key={index} className={styles.testimonialCard}>
                    <div className={styles.testimonialHeader}>
                      <h2>{testimonial.name}</h2>
                      {FlagComponent && <FlagComponent className={styles.flagIcon} />}
                    </div>
                    <p>{testimonial.message}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
