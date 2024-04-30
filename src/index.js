import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pcreate from './pages/Package/P_create';
import Pdashboard from './pages/Package/P_dashboard'
import Pedit from './pages/Package/P_edit'
import Pdetails from './pages/Package/P_details'
import Phome from './pages/Package/PackageUser/P_userhome'
import PUdash from './pages/Package/PackageUser/P_userdashboard'
import PUcus from './pages/Package/PackageUser/P_customize'
import PUedit from './pages/Package/PackageUser/P_uedit'
import PUview from './pages/Package/PackageUser/P_udetails'
import PUMore1 from './pages/Package/PackageUser/P_more1'
import PUMore2 from './pages/Package/PackageUser/P_more2'
import PUMore3 from './pages/Package/PackageUser/P_more3'
import PUMore4 from './pages/Package/PackageUser/P_more4'
import POM from './pages/Package/P_operationM'
import PR from './pages/Package/PackageUser/P_report'
import PI from './pages/Package/PackageUser/P_uinterface'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/create' element={<Pcreate/>} />
        <Route path='/pdashboard' element={<Pdashboard/>} />
        <Route path='/edit/:id' element={<Pedit/>} />
        <Route path='/package/:id' element={<Pdetails/>} />
        <Route path='/phome' element={<Phome/>} />
        <Route path='/udashboard' element={<PUdash/>} />
        <Route path='/ucus' element={<PUcus/>} />
        <Route path='/editu/:id' element={<PUedit/>} />
        <Route path='/udetails/:id' element={<PUview/>} />
        <Route path='/more1' element={<PUMore1/>} />
        <Route path='/more2' element={<PUMore2/>} />
        <Route path='/more3' element={<PUMore3/>} />
        <Route path='/more4' element={<PUMore4/>} />
        <Route path='/o-manager' element={<POM/>} />
        <Route path='/preport' element={<PR/>} />
        <Route path='/pintfc' element={<PI/>} />






        
        

        
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
