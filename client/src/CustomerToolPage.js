import { useNavigate } from "react-router-dom";
import './index.css'
import PageHeader from "./PageHeader";
import CustomerSearchTile from "./CustomerSearchTile";


export default function CustomerToolPage() {
  const navigate = useNavigate()
  const navToDashboardButton = <button
    onClick={() => { navigate('/dashboard') }}
    className="btn-white-sm">Dashboard
  </button>
  return (<div style={{ padding: '50px' }}>
    <PageHeader children={navToDashboardButton} />
    <h1>Customer Tool</h1>
    <p>Search information on customers and make changes to their plan.</p>
    <CustomerSearchTile />
  </div>)
}
