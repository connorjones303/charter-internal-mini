import { useActivityHistoryContext } from "./AppContextProvider"

export default function RecentActivityTile() {
  const { activityHistory } = useActivityHistoryContext();

  console.log(activityHistory);
  return (<div style={{
    padding: '15px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px'
  }}>
    <h3>Recent Activity</h3>
    <p>This is where recent activity would go.</p>
    <div style={{ alignContent: 'center' }}>
      {activityHistory.map((activity, i) => {
        const arr = activity.split('::');
        const activityMessage = arr[0];
        const date = arr[1];
        return <li key={i} style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: "#fff",
          padding: "1rem",
          margin: "0.5rem 0",
          borderRadius: "4px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          border: "1px solid #eee"
        }}>
          <div style={{ maxWidth: '90px' }}>{activityMessage}</div>
          <div>{date}</div>
        </li>
      })}
    </div>
  </div>)
}


