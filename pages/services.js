import Layout from '../components/Layout';
import styles from '../styles/Services.module.css'; // Import the Services CSS module
import Image from 'next/image';

export default function Services() {
  return (
    <Layout title="Services">
      <section id="services">
        {/* Yellow Box Section */}
        <div className={styles.yellowBoxContainer}>
          <h2 className={styles.yellowBoxHeader}>SERVICES</h2>

          {/* New Subheader "My Approach" */}
          {/* <h3 className={styles.inlineUnderlineText}>My Approach</h3> */}

          {/* New Approach Text */}
          <p className={styles.yellowBoxText}>
          <span className={styles.boldUnderlineText}>My Approach:</span> Every tutoring journey begins with a collaborative approach designed to meet each student&apos;s unique needs. During an initial consultation, we&apos;ll discuss the student&apos;s goals, review practice exam results, and outline a personalized study plan that targets key areas for improvement. This plan is flexible and evolves alongside the student&apos;s progress.<br /><br />
            Sessions are a partnership. The student and I work together to set homework expectations that feel manageable, and I provide all the necessary study materials. If a student already has their own resources, I can adapt the study plan to incorporate them as long as they&apos;re suitable for the student&apos;s level and the current version of the exam.<br /><br />
            My approach emphasizes building familiarity with the test to help students recognize the common question types and better understand what is being tested. This approach not only strengthens content knowledge but also builds confidence for test day.<br /><br />
            I offer regular progress reports to keep both students and parents informed, with space for questions and feedback. The study plan is consistently adjusted as the student improves, and I&apos;m always open to feedback on what&apos;s working and what might need to shift.<br /><br />
            Whether working remotely or in person, I strive to create a friendly yet professional environment where students feel comfortable asking questions, clarifying what they don&apos;t understand, and speaking up for themselves. My goal is not just to improve scores, but to help students become more confident, independent learners.
          </p>

          <div className={styles.blueBoxContainer}>
            <p className={styles.blueBoxText}>
              <span className={styles.boldUnderlineText}>Remote and In-Person Sessions:</span> I&apos;ve been exclusively teaching remotely for the past few years, working with students from around the world, and am comfortable with an online classroom set-up. However, if you prefer in-person sessions, I am available for tutoring in the Nairobi area, whether in your home, my home, or at a local coffee shop.
            </p>
          </div>

          <div className={styles.blueBoxContainerRates}>
            <div className={styles.ratesContent}>
              <h3 className={styles.ratesHeader}>RATES</h3>

              <div className={styles.ratesContainer}>
                {/* Individual Sessions */}
                <div className={styles.ratesSection}>
                  <h4 className={styles.ratesSubHeader}>INDIVIDUAL SESSIONS:</h4>
                  <ul className={styles.ratesList}>
                    <li>$100 per hour</li>
                    <li>$85 per hour with 12+ hours</li>
                  </ul>
                </div>

                {/* Group Sessions */}
                <div className={styles.ratesSection}>
                  <h4 className={styles.ratesSubHeader}>GROUP SESSIONS:</h4>
                  <ul className={styles.ratesList}>
                    <li>Different rates apply for pairs and groups of 3.</li>
                    <li>This is a case-by-case basis, please reach out for more info.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Market Comparison */}
          <div className={styles.marketComparison}>
            <h3 className={styles.marketComparisonHeader}>Market Comparison:</h3>
            <p className={styles.marketComparisonText}>
              If booked through partner agencies, here&apos;s a look at current market rates for the same services using the same materials and approach:
            </p>
            <ul className={styles.marketComparisonList}>
              <li>Revolution Prep: $130 per hour</li>
              <li>Manhattan Review: $180 per hour</li>
              <li>Crimson Education (34% Ivy League acceptance rate): $180 per hour</li>
            </ul>
          </div>

          <div className={styles.leftCircle}>
            <Image src="/assets/circle.png" width={300} height={300} />
          </div>

          <div className={styles.rightCircle}>
            <Image src="/assets/circle.png" width={150} height={150} />
          </div>

        </div>
      </section>
    </Layout>
  );
}
