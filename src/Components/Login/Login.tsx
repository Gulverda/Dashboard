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

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const containerStyle = {
  
  textAlign: 'center',
  padding: '20px',
};

const textStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: 'green',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const hoverButtonStyle = {
  backgroundColor: 'darkgreen',
};

const Login = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p style={textStyle}>Signed in as {session?.user?.email}</p>
          <p style={textStyle}>Welcome {session?.user?.name}</p>
          {/* <Avatar alt={session?.user?.name} src={session?.user?.image} /> */}
          <button style={buttonStyle} onClick={() => signOut()}>
            Sign Out
          </button>
          {/* Additional content for signed-in users can be added here */}
        </>
      ) : (
        <>
          <p style={textStyle}>Please log in</p>
          <button style={buttonStyle} onClick={() => signIn()}>
            Sign in
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
