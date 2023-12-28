// Import required modules and components
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    // Use the useSession hook to get the session data
    const { data: session } = useSession();

    // Check if a session exists
    if (session) {
        return (
            <>
                {/* Display user information and sign-out button */}
                Signed in as {session?.user?.email} <br/>
                <button onClick={() => signOut() }>Sign Out</button>
            </>
        );
    } else {
        return (
            <>
                {/* Display not signed in message and sign-in button */}
                Not Signed In <br/>
                <button onClick={() => signIn() }>Sign In</button>
            </>
        );
    }
}

export default Login;
