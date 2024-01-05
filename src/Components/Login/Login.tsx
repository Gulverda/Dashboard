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

import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from '@mui/material/Avatar';

const Login = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          Signed in as {session?.user?.email}
          <p>Welcome {session?.user?.name}</p>
          {/* <Avatar alt={session?.user?.name} src={session?.user?.image} /> */}
          <button onClick={() => signOut()}>Sign Out</button>
          {/* Additional content for signed-in users can be added here */}
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Login;
