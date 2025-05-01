import { useLoginContext, useActivityHistoryContext } from "./AppContextProvider";

export default function PageHeader({ children }) {
  const { setIsLoggedIn, user } = useLoginContext();
  return (
    <div style={{ display: 'flex', gap: ' 10px' }}>
      <button type='button' className='btn-white-sm' onClick={() => setIsLoggedIn(false)}>
        Log Out
      </button>
      {children}
      <div style={{ color: 'GrayText', alignSelf: 'center' }}>
        Logged in is as {user}
      </div>
    </div>
  )


};