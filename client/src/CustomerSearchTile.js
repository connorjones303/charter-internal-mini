import { useState } from "react"
import './index.css'
import { useNavigate } from "react-router-dom";
import { useActivityHistoryContext } from "./AppContextProvider";
import { getDate } from "./utils";
import DashboardTile from "./DashboardTile";

export default function CustomerSearchTile() {
  const navigate = useNavigate();
  const { activityHistory, setActivityHistory } = useActivityHistoryContext();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = (e) => {
    // TODO: send request to db for customer names
    if (formData.name.length > 0 || formData.email.length > 0) {
      setActivityHistory([`Customer Search:\n${Object.values(formData).join(' ')}::${getDate()}`, ...activityHistory]);
      navigate('/customer_tool');
      e.preventDefault()
    }

  }
  return (<DashboardTile color="var(--green-light)">
    <h3>Customer Search</h3>
    <p>Input any field to search customer account.</p>
    <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}
      onSubmit={handleSearch}
    >

      <input
        id='name' name='name'
        onChange={handleChange}
        placeholder="input customer name"
        value={formData.name}
      />
      <input
        id='email' name='email'
        onChange={handleChange}
        placeholder="input customer email"
        value={formData.email}
      />
      <button
        className="btn-blue"
        type="submit"
      >
        Search Customer
      </button>
    </form>



  </DashboardTile>)
}