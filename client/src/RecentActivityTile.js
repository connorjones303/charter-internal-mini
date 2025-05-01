import { useState } from "react"

export default function RecentActivityTile() {
  const [activityList, setActivityList] = useState([]);




  return (<div style={{
    padding: '15px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px'
  }}>
    <h3>Recent Activity</h3>
    <p>This is where recent activity would go.</p>
  </div>)
}


