import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/User/Users';
import Pcreate from './pages/Package/P_create';
import Pdashboard from './pages/Package/P_dashboard'
import Pedit from './pages/Package/P_edit'
import Pdetails from './pages/Package/P_details'
import Phome from './pages/Package/PackageUser/P_userhome'
import PUdash from './pages/Package/PackageUser/P_userdashboard'
import PUcus from './pages/Package/PackageUser/P_customize'
import PUedit from './pages/Package/PackageUser/P_uedit'
import PUview from './pages/Package/PackageUser/P_udetails'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/create' element={<Pcreate/>} />
        <Route path='/pdashboard' element={<Pdashboard/>} />
        <Route path='/edit/:id' element={<Pedit/>} />
        <Route path='/package/:id' element={<Pdetails/>} />
        <Route path='/phome' element={<Phome/>} />
        <Route path='/udashboard' element={<PUdash/>} />
        <Route path='/ucus' element={<PUcus/>} />
        <Route path='/editu/:id' element={<PUedit/>} />
        <Route path='/viewu/:id' element={<PUview/>} />


        
        

        
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
