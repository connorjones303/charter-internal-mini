import { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();
const LoginContext = createContext();

export function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  // TODO: convert activity message to  a strict typing foranalyzing by manager users
  const [activityHistory, setActivityHistory] = useState([
    // {activity message}::{date of action}.
    // ...
  ]);

  return (
    <ActivityContext.Provider value={{
      activityHistory,
      setActivityHistory,
    }}>
      <LoginContext.Provider value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser
      }}>
        {children}
      </LoginContext.Provider>
    </ActivityContext.Provider>
  )
}

export function useActivityHistoryContext() {
  return useContext(ActivityContext);
}

export function useLoginContext() {
  return useContext(LoginContext);
}
