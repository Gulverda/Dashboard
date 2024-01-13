import React from "react";
import { useSession, signIn} from "next-auth/react";

const containerStyle = {
  marginTop: "50px",
  padding: '20px',
};

const textStyle1 = {
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

const Login = () => {
  const { data: session } = useSession();

  return (
    <div style={containerStyle}>
      {session ? (
        <>
          {/* <p style={textStyle}>Signed in as {session?.user?.email}</p> */}
          {/* <p style={textStyle}>Welcome {session?.user?.name}</p> */}
          {/* <Avatar alt={session?.user?.name} src={session?.user?.image} /> */}
          {/* <button style={buttonStyle1} onClick={() => signOut()}>
            Sign Out
          </button> */}
          {/* Additional content for signed-in users can be added here */}
        </>
      ) : (
        <>
          <p style={textStyle1}>Please log in</p>
          <button style={buttonStyle} onClick={() => signIn()}>
            Sign in
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
