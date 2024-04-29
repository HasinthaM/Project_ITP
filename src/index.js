import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './pages/Destination/Destination';
import Login from './pages/Home/Login';
import Attraction from './pages/Destination/Attraction';
import Attraction02 from './pages/Destination/Attraction02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/login1' element={<Login/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/attractions' element= { <Attraction/> }></Route>
      <Route path='/attraction' element= { <Attraction02/> }></Route>

      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
