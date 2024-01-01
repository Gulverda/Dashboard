// Import required modules and components
import Head from 'next/head';
import styles from '@/app/page.module.css';
import Dashboard from '@/Pages/dashboard'; // Assuming this is the correct path
import Header from '@/Components/Header';
import SideMenu from '@/Components/SideMenu/SideMenu';
import Login from '@/Components/Login'
import styled from 'styled-components';

// Styled Header component
const StyledHeader = styled(Header)`
  // Your CSS styles here
  background-color: #333;
  color: white;
  padding: 1rem;
`;

// Styled SideMenu component
const StyledSideMenu = styled(SideMenu)`
  // Your CSS styles here
  width: 250px;
  background-color: #f4f4f4;
`;

// Styled Dashboard component
const StyledDashboard = styled(Dashboard)`
  // Your CSS styles here
  margin-top: 20px;
`;

// Styled Login component
const StyledLogin = styled(Login)`
  // Your CSS styles here
  margin-top: 20px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        {/* Add other head elements as needed */}
      </Head>
      <main>
        <StyledHeader />
        <StyledSideMenu />
        <StyledDashboard />
        <StyledLogin />
      </main>
    </div>
  );
}
