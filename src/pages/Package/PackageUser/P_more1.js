import React from 'react';
import '../../../styles/P_more1.css'
import More1 from '../../../images/a.jpg';

const P_more1 = () => {
  return (
    <div className="flexm1-container">
      <div className="card1">
        <img
          src={More1}
          alt="Beach scene"
          className="card-image1"
        />
        <h2 className="card-title1">3 Days Package <br />- Down South-</h2>
        <p className="card-description1">
          Places: Hikkaduwa, Galle, Thalpe, Mirissa<br />
          Meals: Breakfast, Lunch, Dinner<br />
          Activities: Kayaking/Boat riding<br />
          Accommodation: 5 Star Hotel<br />
          Price: 100 USD/=
        </p>
        <button className="select-button1">Select</button>
      </div>
    </div>
  );
};

export default P_more1;
