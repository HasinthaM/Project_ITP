import { useNavigate } from 'react-router-dom';//Hook
import React from 'react';
import "../../styles/Package/P_home.css"

export default function P_home() {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Package Home</h2>
        <button className='create-button' onClick={() => navigate('/create')}>Create Package</button>
    </div>
  );
}
