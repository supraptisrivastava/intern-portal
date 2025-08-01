import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/intern')
      .then(res => setIntern(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!intern) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Welcome, {intern.name}</h2>
      <p>Referral Code: <strong>{intern.referralCode}</strong></p>
      <p>Total Donations Raised: ₹{intern.totalDonations}</p>

      <h3>Rewards</h3>
      <ul>
        {intern.rewards.map((reward, idx) => <li key={idx}>{reward}</li>)}
      </ul>
    </div>
  );
};

export default Dashboard;
