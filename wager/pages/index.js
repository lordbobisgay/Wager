// pages/index.js
import RealtimeText from '../components/RealtimeText';
import styles from '../styles/Home.module.css'; // Import component-specific CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Webpage</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.realTimeSection}>
          <h2>Real-Time Updates</h2>
          <RealtimeText />
        </section>
        <section className={styles.otherContent}>
          <h2>Other Content</h2>
          <p>Here’s some other content on the page.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 My Webpage</p>
      </footer>
    </div>
  );
}
