import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/User/Users';
import Home from './pages/Ticket/Home';
import Helpcenter from './pages/FAQ/Helpcenter';
import CreateTicketRecords from './pages/Ticket/CreateTicket';
import Contact from './pages/Email/Contact';
import EditTicketRecords from './pages/Ticket/EditTicketRecords';
import DeleteTicketRecords from './pages/Ticket/DeleteTicket';
import { SnackbarProvider } from 'notistack';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/ticket' element={<Home />} />
        <Route path='/faq' element={<Helpcenter/>} />
        <Route path='/email' element={<Contact/>} />

      <Route path='/ticket/create' element={<CreateTicketRecords />} />
      
      <Route path='/ticket/edit/:_id' element={<EditTicketRecords/>} />
      <Route path='/ticket/delete/:_id' element={<DeleteTicketRecords />} />
     

      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
