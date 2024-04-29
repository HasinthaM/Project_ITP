import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/User/Users';

import Home from './pages/Ticket/Home';
import CreateTicketRecords from './pages/Ticket/CreateTicket';
import ShowTicketRecords from './pages/Ticket/ShowTicketRecords';
import EditTicketRecords from './pages/Ticket/EditTicketRecords';
import DeleteTicketRecords from './pages/Ticket/DeleteTicket';
import ShowTicket from './pages/Ticket/ShowTicket';
import { SnackbarProvider } from 'notistack';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/ticket' element={<Home />} />
      <Route path='/ticket/create' element={<CreateTicketRecords />} />
      <Route path='/ticket/details/:_id' element={<ShowTicketRecords/>} />
      <Route path='/ticket/edit/:_id' element={<EditTicketRecords/>} />
      <Route path='/ticket/delete/:_id' element={<DeleteTicketRecords />} />
      <Route path='/ticket/details1/:_id' element={<ShowTicket />} />

      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
