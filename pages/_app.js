// pages/_app.js
import '../styles/globals.css'; // Import global styles
import Layout from '../components/Layout'; // Import the Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout> {/* Wrap all page components with the Layout */}
      <Component {...pageProps} /> {/* This renders the individual page content */}
    </Layout>
  );
}

export default MyApp;
