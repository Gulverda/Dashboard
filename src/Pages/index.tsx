// Import required modules and components
import Head from 'next/head';
import styles from '@/app/page.module.css';
import Dashboard from '@/Pages/dashboard'; // Assuming this is the correct path
import Header from '@/Components/Header';
import SideMenu from '@/Components/SideMenu/SideMenu';
import Login from '@/Components/Login'


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
        <Login />
      </main>
    </div>
  );
}
