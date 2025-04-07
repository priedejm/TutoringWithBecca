import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css'; // Import the Contact CSS module

export default function Contact() {
  return (
    <Layout title="Contact">
      <section id="contact">
        {/* Yellow Box Section */}
        <div className={styles.yellowBoxContainer}>
          <h2 className={styles.yellowBoxHeader}>REACH OUT</h2>

          <p className={styles.yellowBoxText}>
            Would you like to book a free 30-minute consultation? Do you have any questions regarding how to start studying for the SAT? Please feel free to reach out for any questions or bookings:
          </p>

          {/* Contact Options Section */}
          <div className={styles.blueBoxContainer}>
            <div className={styles.ratesContent}>
              <h3 className={styles.blueBoxHeader}>BOOK A FREE 30 MINUTE CONSULTATION!</h3>

              <div className={styles.ratesContainer}>
                {/* WhatsApp Section */}
                <div className={styles.ratesSection}>
                  <h4 className={styles.ratesSubHeader}>WHATSAPP:</h4>
                  <ul className={styles.ratesList}>
                    <li><a href="https://wa.me/13364550449" target="_blank" className={styles.contactLink}>+1 336 455 0449</a></li>
                  </ul>
                </div>

                {/* Email Section */}
                <div className={styles.ratesSection}>
                  <h4 className={styles.ratesSubHeader}>EMAIL:</h4>
                  <ul className={styles.ratesList}>
                    <li><a href="mailto:becca.priede@gmail.com" className={styles.contactLink}>becca.priede@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* 
        <div className={styles.leftCircle}>
            <Image src="/assets/circle.png" width={400} height={400} />
          </div>

          <div className={styles.rightCircle}>
            <Image src="/assets/circle.png" width={200} height={200} />
          </div> */}
      </section>
    </Layout>
  );
}
