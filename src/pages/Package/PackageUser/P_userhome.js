import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/Package/P_userhome.css';

import packageImage1 from '../../../images/Package/a.jpg';
import packageImage2 from '../../../images/Package/b.jpg';
import packageImage3 from '../../../images/Package/cc.jpg';
import packageImage4 from '../../../images/Package/dd.jpg';

export default function P_userhome() {
    const navigate = useNavigate();

    return (
        <div>
          <div className='topic'><h1>Tour Packages</h1>
          </div>
            <div className="flexp-container">
                <div className="flex-item">
                    <img src={packageImage1} alt="Package 1" />
                    3 Days Package
                    <button className="more-button" onClick={() => navigate('/more1')}>More</button>
                </div>
                <div className="flex-item">
                    <img src={packageImage2} alt="Package 2" />
                    4 Days Package
                    <button className="more-button" onClick={() => navigate('/more2')}>More</button>
                </div>
                <div className="flex-item">
                    <img src={packageImage3} alt="Package 3" />
                    5 Days Package
                    <button className="more-button" onClick={() => navigate('/more3')}>More</button>
                </div>
                <div className="flex-item">
                    <img src={packageImage4} alt="Package 4" />
                    6 Days Package
                    <button className="more-button" onClick={() => navigate('/more4')}>More</button>
                </div>
            </div>
            <div className="button-customize">
            <button className='p-customize' onClick={() => navigate('/ucus')} style={{ backgroundColor: '#000000', fontSize: '18px', color:'white' }}> Customize Packages</button>


            </div>
        </div>
    );
}
