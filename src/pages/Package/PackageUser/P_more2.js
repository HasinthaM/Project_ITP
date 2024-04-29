import React from 'react';
import '../../../styles/Package/P_more2.css'
import More2 from '../../../images/Package/b.jpg';

const P_more2 = () => {
  return (
    <div className="flexm2-container">
      <div className="card2">
        <img
          src={More2}
          alt="Hill scene"
          className="card-image2"
        />
        <h2 className="card-title2">4 Days Package <br />- Hill Country-</h2>
        <p className="card-description2">
          Places: Kandy, Nuwara Eliya, Ella<br />
          Meals: Breakfast, Lunch, Dinner<br />
          Activities: Hiking/Jet sea riding<br />
          Accommodation: 5 Star Hotel<br />
          Price: 200 USD/=
        </p>
        <button className="select-button2">Select</button>
      </div>
    </div>
  );
};

export default P_more2;
