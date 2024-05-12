import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './pages/Destination/Destination';
import Attraction from './pages/Destination/Attraction';
import Attraction02 from './pages/Destination/Attraction02';
import Login from './pages/Home/Login';
import RegistrationForm from './pages/User/RegistrationForm';
import LogInForm from './pages/User/LogInForm';
import Home2 from './pages/Home/Home2';
import Profile from './pages/User/Profile';
import Login2 from './pages/Home/Login2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/attractions' element= { <Attraction/> }></Route>
        <Route path='/attraction' element= { <Attraction02/> }></Route>
        <Route path='/userRegistration' element={ <RegistrationForm/> } />
        <Route path='/userLogin' element={ <LogInForm/> } />
        <Route path='/home' element={ <Home2/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/login2' element={ <Login2/> } />

      </Routes>
  </BrowserRouter>
);

reportWebVitals();