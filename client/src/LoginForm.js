import React, { useState } from 'react';
import { useLoginContext, useActivityHistoryContext } from './AppContextProvider';
import { getDate } from './utils';

export default function LoginForm() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { setIsLoggedIn, setUser } = useLoginContext();
  const { activityHistory, setActivityHistory } = useActivityHistoryContext();

  // Handle input changes
  const handleChange = (e) => {
    // name value is <input> elem name prop
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // TODO: Login everytime, add authentication
    const user = formData.username
    setUser(user);
    setActivityHistory([`Login::${getDate()}`, ...activityHistory]);
    setIsLoggedIn(true);
    e.preventDefault();
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}