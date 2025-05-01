import { useState } from "react"
import './index.css'
import { useNavigate } from "react-router-dom";
import { useActivityHistoryContext } from "./AppContextProvider";
import { getDate } from "./utils";

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

  const handleSearch = () => {
    // TODO: send request to db for customer names
    if (formData.name.length > 0 || formData.email.length > 0) {
      console.log('here ' + activityHistory);
      setActivityHistory([`Customer Search::${getDate()}`, ...activityHistory]);
      navigate('/customer_tool');
    }

  }
  return (<div className="customer-box">
    <h3>Customer Search</h3>
    <p>Input any field to search customer account.</p>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>

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
        type="button"
        onClick={handleSearch}
      >
        Search Customer
      </button>
    </div>



  </div>)
}