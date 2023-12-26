import Head from 'next/head';
import styles from './page.module.css';
import Dashboard from '@/Pages/dashboard'; // Update the import path
import Header from '@/Pages/Header'
import SideMenu from '@/Pages/SideMenu/SideMenu';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        {/* Add other head elements as needed */}
      </Head>
      <main className={styles.main}>  
      <Header />
      <SideMenu />
        <Dashboard />
      </main>
    </div>
  );
}
