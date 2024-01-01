
import type { AppProps } from 'next/app';
import '@/styles/globals.css'; // Make sure the path is correct based on your project structure
import { SessionProvider } from 'next-auth/react';
import Custom404 from './Custom404';
interface MyAppProps extends AppProps {
  session: any; // Define the session type based on your application's session data structure
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { session, ...pageProperties } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...pageProperties} />
      <Custom404 />
    </SessionProvider>
  );
}

export default MyApp;
