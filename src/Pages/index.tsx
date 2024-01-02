import Head from 'next/head';
import Login from '@/components/Login'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu/SideMenu';
import Dashboard from '@/pages/dashboard';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        {/* Add other head elements as needed */}
      </Head>
      <main>
        <Header />
        <SideMenu />
        <Dashboard />
        <Login />
      </main>
    </div>
  );
};

export default Home;
