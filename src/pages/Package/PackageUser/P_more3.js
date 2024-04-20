import React from 'react';
import '../../../styles/P_more3.css'
import More3 from '../../../images/cc.jpg';

const P_more3 = () => {
  return (
    <div className="flexm3-container">
      <div className="card3">
        <img
          src={More3}
          alt="North scene"
          className="card-image3"
        />
        <h2 className="card-title3">5 Days Package <br />- North Country-</h2>
        <p className="card-description3">
          Places: Mannar, Elephent Park, Kilinochchi,Jaffna<br />
          Meals: Breakfast, Lunch, Dinner, Tea<br />
          Activities: Sea Bathing/Dolphin Watching<br />
          Accommodation: 3 Star Hotel<br />
          Price: 300 USD/=
        </p>
        <button className="select-button3">Select</button>
      </div>
    </div>
  );
};

export default P_more3;
