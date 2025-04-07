import Layout from '../components/Layout';
import Services from './services';
import Testimonials from './testimonials';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Contact from './contact';

export default function Home() {
  return (
    <Layout>
      <div className={styles.homeContainer} id="home-container">
        {/* White Strip with Header and Subtext */}
        <section className={styles.whiteStrip} id="white-strip">
         <div className={styles.whiteStripContent} id="white-strip-content">
          <div className={styles.whiteStripHeaders} id="white-strip-headers">
            <h2 id="white-strip-header">Personalized SAT Prep for all sections at all levels!</h2>
            <h2 className={styles.subtext}>Nairobi or Online</h2>
           </div>
           <p id="white-strip-text">
             Whether starting your SAT prep or fine-tuning specific sections, personalized study plans and targeted strategies can help you build confidence and improve scores. From mastering math concepts to honing reading and writing skills, the focus will be on what matters most to ensure you feel fully prepared come test day.
           </p>
         </div>
        </section>

        {/* About Me Section */}
        <section className={styles.aboutMeContainer} id="about">
          <h2 className={styles.aboutMeHeader} id="about-me-header">ABOUT ME</h2>
          <div className={styles.aboutMeContent} id="about-me-content">
            <Image
              src="/assets/profilePic.png"
              alt="Profile Picture"
              className={styles.profilePic}
              width={150}
              height={150}
              id="profile-picture"
            />
            <p className={styles.aboutMeText} id="about-me-text">
              Hi there! My name is Becca and I am originally from North Carolina in the U.S. I have a Bachelor&apos;s degree in International Relations from Pepperdine University and a Master&apos;s in Development Economics from Universit&eacute; Paris-Est Cr&eacute;teil. With over 5 years of SAT tutoring experience, I&apos;ve had the privilege of supporting more than 300 students throughout their college preparation journey.<br /><br />

              Specializing in all subjects of the SAT and having designed customized curricula for the evolving digital format, I understand the exam inside and out. Whether students are aiming for top-tier scores or just looking to improve, I approach each student the same in identifying strengths and weaknesses and working together to come up with a plan and goal. I focus on providing targeted strategies that students can apply both on test day and in their academic journey beyond. I have worked with students from all over with many different backgrounds (check out my testimonials!) and am able to adapt to different learning styles and educational backgrounds.<br /><br />

              Standardized testing can be daunting without knowing what to expect, but it becomes more manageable with the right guidance. As your SAT tutor, I ensure you walk into exam day confident, fully prepared, and knowing exactly what to expect, making your goals more achievable.
            </p>
          </div>
          <div className={styles.leftCircle}>
            <Image src="/assets/circle.png" width={400} height={400} />
          </div>

          <div className={styles.rightCircle}>
            <Image src="/assets/circle.png" width={200} height={200} />
          </div>
        </section>

        {/* Blue Box Section */}
        <section className={styles.blueBoxContainer}>
          
          <div className={styles.blueBoxText}>
            <p>
              &quot;Her teaching style is engaging and incredibly effective, making complex topics easy to understand&quot;
            </p>
            <p className={styles.sarahText}>- Sarah from Norway</p>
          </div>
        </section>

        {/* Services Page Content */}
        <Services />

        {/* Blue Box Section */}
        <section className={styles.blueBoxContainer}>
          <div className={styles.blueBoxText}>
            <p>
              &quot;I went from failing in some categories on the SAT to acheiving perfect scores&quot;
            </p>
            <p className={styles.sarahText}>- Morgan from Florida</p>
          </div>
        </section>

        {/* Contact Page Content */}
        <Contact />

        {/* Testimonials Page Content */}
        <Testimonials />
      </div>
    </Layout>
  );
}
