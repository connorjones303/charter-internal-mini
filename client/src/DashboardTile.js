export default function DashboardTile({ children, style, color }) {
  return (<div className="dashboard-tile" style={{ backgroundColor: color, ...style }}>
    {children}
  </div>)
}