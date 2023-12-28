// useCustomSession.ts

import { useContext } from 'react';
import { SessionContext } from 'next-auth/react';

const useCustomSession = () => {
  const session = useContext(SessionContext);
  return session;
};

export default useCustomSession;
