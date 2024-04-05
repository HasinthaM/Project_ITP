import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function P_userhome() {
    const navigate = useNavigate();
  return (
    <div>
        <button className='p-customize' onClick={() => navigate('/ucus')}> Customize </button>
    </div>
  )
}
