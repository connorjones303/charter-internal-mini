import { useNavigate } from "react-router-dom";
import './index.css'
import PageHeader from "./PageHeader";
import CustomerSearchTile from "./CustomerSearchTile";


export default function CustomerView({ logOut = () => { } }) {
  const navigate = useNavigate()
  const navToDashboardButton = <button onClick={() => { navigate('/dashboard') }} className="btn-white-sm">Back to Dashboard</button>
  return (<div className="customer-box">
    <PageHeader logOut={logOut} Children={navToDashboardButton} />
    <h1>Customer Tool</h1>
    <p>Search information on customer make changes to their plan</p>
    <CustomerSearchTile />
  </div>)
}
