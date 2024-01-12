import Head from 'next/head';=
import SideMenu from '@/components/SideMenu/SideMenu';
import Dashboard from '@/pages/dashboard';
import Footer from '@/components/Footer'
import '../app/globals.css';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Header from '@/components/Header'

const padding = {
  paddingLeft: "50px"
}

const Home: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other head elements as needed */}
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <Header />
        {
          session && (
            <>
              <SideMenu />
              <Dashboard />
                   <Footer />
            </>
          )
        }

        <Login/>
      </main>
    </div>
  );
};

export default Home;
