// Import required modules and components
import { useSession, signIn, signOut } from "next-auth/react";
import useCustomSession from "./useCustomSession";

// Define a type for the session object
type Session = {
  user?: {
    email?: string;
    // Add other user properties as needed
  };
  // Add other session properties as needed
};

const Login = () => {
  // Use the useCustomSession hook to get the session data
  const session = useCustomSession();

  // Assert that session is of type Session
  const typedSession = session as Session;

  // Check if a session exists
  if (typedSession) {
    return (
      <>
        {/* Display user information and sign-out button */}
        Signed in as {typedSession?.user?.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return (
      <>
        {/* Display not signed in message and sign-in button */}
        Not Signed In <br />
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
};

export default Login;
