import Head from 'next/head';
import Login from '@/components/Login'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu/SideMenu';
import Dashboard from '@/pages/dashboard';
import '../app/globals.css';
import { useSession } from 'next-auth/react';

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <Header />
        {
          session && (
            <>
                <SideMenu />
            <Dashboard />
            </>
          )
        }

        <Login />
      </main>
        {/* <main>
          {session && <Dashboard />}
          {!session && <Login />}
        </main> */}
    </div>
  );
};

export default Home;
