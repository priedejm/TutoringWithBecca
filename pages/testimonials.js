import Layout from "../components/Layout";
import styles from "../styles/Testimonials.module.css"; // Import the Testimonials CSS module

export default function Testimonials() {
  return (
    <Layout>
      <section id="testimonials">
        {/* Yellow Box Section */}
        <div className={styles.yellowBoxContainer}>
          <h2 className={styles.yellowBoxHeader}>TESTIMONIALS</h2>

          {/* <p className={styles.yellowBoxText}>
            &quot;Hear directly from my students! They have shared their experiences and results after working together on SAT preparation. Their success stories reflect how tailored tutoring can make a big difference in improving scores.&quot;
          </p> */}

          {/* Testimonial 1 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Sarah from Norway improved 190 points!</h3>
            <p className={styles.blueBoxText}>
              &quot;I would highly recommend Becca as an SAT tutor. Her teaching style is engaging and incredibly effective, making complex topics easy to understand. She tailored lessons to my specific weaknesses, which helped me improve my score significantly—from 1080 on my practice test to 1270 on the actual SAT. Becca&apos;s encouragement and structured approach made the whole process less overwhelming, and I&apos;m really grateful for her guidance.&quot;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Morgan from Florida improved 180 points!</h3>
            <p className={styles.blueBoxText}>
              &quot;My mother and I decided to get an SAT tutor at the last minute. Becca improved my score by 180 points in total from the time we started. Having ADHD made it hard for me to focus and pay attention, but Becca surprised me. What made her stand out was her willingness to work with my attention span and keep me engaged; her patience was unmatched. I went from failing in some categories on the SAT to achieving perfect scores, I never thought it would be possible. Becca was very helpful and understanding of me, she really did help me and I am grateful my mother and I found her.&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Finn from Germany improved 110 points to receive a 1530!</h3>
            <p className={styles.blueBoxText}>
              &quot;Becca is a fantastic tutor who knows how to break down tough SAT concepts in a way that makes them manageable. Her structured approach and tailored strategies helped me focus on my weak areas while building confidence in my strengths. Thanks to her guidance, I improved my time management and gained confidence in solving hard questions.&quot;
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Manuel from Lisbon improved 100 points in less than a month!</h3>
            <p className={styles.blueBoxText}>
              &quot;Becca is kind, energetic, and an SAT-expert. She knows all types of approaches that will help you organize your time better and focus on the essentials for perfectly solving the different questions. She gives helpful tips and has a huge number of practice exams for you to train. I strongly believe that I wouldn&apos;t have improved so fast without Becca&apos;s help and positive attitude.&quot;
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Jack from the UK improved 190 points!</h3>
            <p className={styles.blueBoxText}>
              &quot;I highly recommend Becca for practising and reviewing for the SAT. My experience was very positive. I was able to be in control of my schedule along with having times and dates for assignments and meetings. Becca was extremely reliable and set me up for success come test day.&quot;
            </p>
            <p className={styles.blueBoxText}>
              <i>(Review copied from ‘Manhattan Review’)</i>
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className={styles.blueBoxContainer}>
            <h3 className={styles.testimonialHeader}>Peter from the UK improved 200 points!</h3>
            <p className={styles.blueBoxText}>
              &quot;I highly recommend Becca for SAT tutoring with Manhattan Review. As soon as we got set up she made a structured plan for me but was super flexible whenever I needed to adjust my schedule. Not only did Becca give me many resources to take home and review but she thoroughly analysed my strengths and weaknesses and adjusted the work that we did accordingly. Lastly, Becca is a great tutor who makes a very friendly and welcoming environment while being very professional!&quot;
            </p>
            <p className={styles.blueBoxText}>
              <i>(Review copied from ‘Manhattan Review’)</i>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
