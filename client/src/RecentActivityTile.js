import { useActivityHistoryContext } from "./AppContextProvider"
import DashboardTile from "./DashboardTile"
import { useState } from "react";

export default function RecentActivityTile() {
  const { activityHistory } = useActivityHistoryContext();
  const maxDisplayCount = 5;
  const [displayPagePosition, setDisplayPagePosition] = useState(1);

  const getPageCount = () => {
    return Math.ceil(activityHistory.length / maxDisplayCount);
  };

  const displayPages = () => {
    let jsxArray = [];
    for (let i = 0; i < getPageCount(); i++) {
      jsxArray = [...jsxArray, <button className="btn-pagination" style={{ borderBlockEnd: i + 1 == displayPagePosition ? 'solid' : null }} key={i + 1} onClick={() => setDisplayPagePosition(i + 1)}>{i + 1}</button>];
    }
    return jsxArray;
  }

  const displayedActivitiesArr = () => {
    const index1 = (displayPagePosition * maxDisplayCount) - maxDisplayCount;
    const index2 = (displayPagePosition * maxDisplayCount) // index is exclusive in slice method
    return activityHistory.slice(index1, index2);
  };

  return (<DashboardTile >
    <h3>Recent Activity</h3>
    <p>This is where recent activity would go.</p>
    {activityHistory.length > maxDisplayCount && (<div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
      <button className="btn-pagination" onClick={displayPagePosition == 1 ?
        null : () => {
          setDisplayPagePosition(displayPagePosition - 1)
        }}> {/* html entity name for '<' */} &lt;</button>
      {displayPages()}
      <button className="btn-pagination" onClick={displayPagePosition == getPageCount() ?
        null : () => {
          setDisplayPagePosition(displayPagePosition + 1)
        }}> {/* html entity name for '>' */} &gt;</button>
    </div>)}
    <div style={{ alignItems: 'center' }}>
      {displayedActivitiesArr().map((activity, i) => {
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
          border: "1px solid #eee",
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '70px', fontSize: 11 }}>{activityMessage}</div>
          <div style={{ fontSize: 11 }}>{date}</div>
        </li>
      })}
    </div>
  </DashboardTile>);
}


