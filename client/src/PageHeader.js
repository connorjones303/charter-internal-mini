import { Children } from "react";

export default function PageHeader({ logOut = () => { }, Children }) {

  return (
    <div style={{ display: 'flex', gap: ' 10px' }}>
      <button type='button' className='btn-white-sm' onClick={logOut}>
        Log Out
      </button>
      {Children}
    </div>
  )


};