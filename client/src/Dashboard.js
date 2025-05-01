import RecentActivityTile from './RecentActivityTile'
import CustomerSearchTile from './CustomerSearchTile'
import PageHeader from './PageHeader';
import './index.css'

export default function Dashboard() {
  return (
    <div className='basic-container'>
      <PageHeader />
      <h1>Dashboard</h1>
      <p>Welcome! You are now logged in.</p>
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <RecentActivityTile />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <CustomerSearchTile />
        </div>
      </div>
    </div>
  );
}

