import React from 'react';
import '../../../styles/P_more4.css'
import More4 from '../../../images/dd.jpg';

const P_more4 = () => {
  return (
    <div className="flexm3-container">
      <div className="card3">
        <img
          src={More4}
          alt="East scene"
          className="card-image4"
        />
        <h2 className="card-title4">6 Days Package <br />- East Country-</h2>
        <p className="card-description4">
          Places: Trincomalee, Batticaloa, Ampara<br />
          Meals: Breakfast, Lunch, Dinner, Tea<br />
          Activities: Surfing/Ship Tours<br />
          Accommodation: 5 Star Hotel<br />
          Price: 600 USD/=
        </p>
        <button className="select-button4">Select</button>
      </div>
    </div>
  );
};

export default P_more4;
