// // Import required modules and hooks
// import { signIn, signOut } from "next-auth/react";
// import useCustomSession from "./useCustomSession";

// import { useSession } from "next-auth/react"

// import { signOut } from "next-auth/react";

// // Define a type for the session object
// type Session = {
//   user?: {
//     email?: string;
//     // Add other user properties as needed
//   };
//   // Add other session properties as needed
// };

// const Login = () => {
//   // Use the custom session hook to retrieve the session data
//   const session = useCustomSession();

//   // Cast the session to the defined Session type for type-checking
//   const typedSession = session as Session;

//   // Display content based on the presence of a session
//   return (
//     <>
//       {typedSession ? (
//         // Display user information and sign-out button if signed in
//         <>
//           Signed in as {typedSession?.user?.email} <br />
//           <button onClick={() => signOut()}>Sign Out</button>
//         </>
//       ) : (
//         // Display sign-in button if not signed in
//         <>
//           Not Signed In <br />
//           <button onClick={() => signIn('google')}>Sign In with Google</button>
//         </>
//       )}
//     </>
//   );
// };

// export default Login;

import styled from 'styled-components';
import { useSession, signIn, signOut } from "next-auth/react";

// Styled components
const Container = styled.div`
  font-family: 'Arial', sans-serif; /* Example font family */
  text-align: center;
  padding: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgreen;
  }
`;

const Login = () => {
  const { data: session } = useSession();

  return (
    <Container>
      {session ? (
        <>
          <Text>Signed in as {session?.user?.email}</Text>
          <Text>Welcome {session?.user?.name}</Text>
          {/* <Avatar alt={session?.user?.name} src={session?.user?.image} /> */}
          <Button onClick={() => signOut()}>Sign Out</Button>
          {/* Additional content for signed-in users can be added here */}
        </>
      ) : (
        <>
          <Text>Please log in</Text>
          <Button onClick={() => signIn()}>Sign in</Button>
        </>
      )}
    </Container>
  );
};

export default Login;
