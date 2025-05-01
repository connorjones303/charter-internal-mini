import { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();
const LoginContext = createContext();

export function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activityHistory, setActivityHistory] = useState([]);

  return (
    <ActivityContext.Provider value={{ activityHistory, setActivityHistory }}>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </LoginContext.Provider>
    </ActivityContext.Provider>
  )
}

export function useActivityHistory() {
  return useContext(ActivityContext);
}

export function useLoginContext() {
  return useContext(LoginContext);
}
