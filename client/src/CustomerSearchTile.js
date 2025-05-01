import { useState } from "react"
import './index.css'
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "./AppContextProvider";

export default function CustomerSearchTile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSearch = () => {
    // send request to db for customer names
    // nav to customer view route
    navigate('/customer_tool')

  }
  return (<div className="customer-box">
    <h3>Customer Search</h3>
    <p>This is where customer info searching and display would go.</p>
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