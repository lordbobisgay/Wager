// pages/_app.js
import '../styles/globals.css'; // Import global CSS here only


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
