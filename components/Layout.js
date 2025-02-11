import Head from 'next/head';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title = "Tutoring with Becca" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="SAT Tutoring with Becca - Personalized coaching for high scores" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.container} style={{ paddingTop: "80px" }}> 
        {children}
      </main>
    </>
  );
}
