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
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginTop: '20px'
      }}>
        <RecentActivityTile />
        <CustomerSearchTile />
      </div>
    </div>
  );
}

