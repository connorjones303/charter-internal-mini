import { useLoginContext } from "./AppContextProvider";

export default function PageHeader({ children }) {
  const { setIsLoggedIn } = useLoginContext();
  return (
    <div style={{ display: 'flex', gap: ' 10px' }}>
      <button type='button' className='btn-white-sm' onClick={() => setIsLoggedIn(false)}>
        Log Out
      </button>
      {children}
    </div>
  )


};