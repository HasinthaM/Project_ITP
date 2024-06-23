import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// destination & User
import Destination from "./pages/Destination/Destination";
import Attraction from "./pages/Destination/Attraction";
import Attraction02 from "./pages/Destination/Attraction02";
import Login from "./pages/Home/Login";
import RegistrationForm from "./pages/User/RegistrationForm";
import LogInForm from "./pages/User/LogInForm";
import Home2 from "./pages/Home/Home2";
import Profile from "./pages/User/Profile";
import Login2 from "./pages/Home/Login2";

// package
import Pcreate from "./pages/Package/P_create";
import Pdashboard from "./pages/Package/P_dashboard";
import Pedit from "./pages/Package/P_edit";
import Pdetails from "./pages/Package/P_details";
import PUdash from "./pages/Package/PackageUser/P_userdashboard";
import PUcus from "./pages/Package/PackageUser/P_customize";
import PUedit from "./pages/Package/PackageUser/P_uedit";
import PR from "./pages/Package/P_report";
import PI from "./pages/Package/PackageUser/P_uinterface";

// Rent
import R_Booking from "./pages/Rent/R_Booking";
import R_vehicle from "./pages/Rent/R_vehicle";
import R_Bdetails from "./pages/Rent/R_Bdetails";
import R_Bookdet from "./pages/Rent/R_Bookdet";
import R_Details from "./pages/Rent/R_Details";
import R_Bupdate from "./pages/Rent/R_Bupdate";
import Adminhome from "./pages/Rent/Admin/Adminhome";
import Adminbooking from "./pages/Rent/Admin/Adminbooking";
import Addvehicle from "./pages/Rent/Admin/Addvehicle";
import A_checkvehicle from "./pages/Rent/Admin/A_checkvehicle";
import A_updatevehicle from "./pages/Rent/Admin/A_updatevehicle";

// Booking & Event
import Booking from "./pages/Booking/getbooking/Booking";
import EventBooking from "./pages/Event/getevent/Event";
import Add from "./pages/Booking/addbooking/Add";
import AddEvent from "./pages/Event/addevent/AddEvent";
import Edit from "./pages/Booking/updatebooking/Edit";
import EditEvent from "./pages/Event/updateevent/EditEvent";
import Hotels from "./pages/home2/Hotels";
import Events from "./pages/home2/Events";
import HotelBookingForm from "./pages/home2/HotelBookingForm";
import EventBookingForm from "./pages/home2/EventBookingForm";
import AdminPanel from "./pages/admin_panel/adminPanel";
import BookingHotelEvents from "./pages/home2/BookingHotelEvents";

// customer support
import Home from "./pages/Ticket/Home";
import Helpcenter from "./pages/FAQ/Helpcenter";
import CreateTicketRecords from "./pages/Ticket/CreateTicket";
import Contact from "./pages/Email/Contact";
import EditTicketRecords from "./pages/Ticket/EditTicketRecords";
import DeleteTicketRecords from "./pages/Ticket/DeleteTicket";

// FeedBack
import Option from "./pages/Feedback/Option";
import Feedback1 from "./pages/Feedback/Feedback1";
import ServiceFeedback from "./pages/Feedback/ServiceFeedback";
import AddFeedback from "./pages/Feedback/AddFeedback";
import Admin from "./pages/Feedback/admin";

// Payment
import CreateSalaryRecoard from "./pages/Salary/CreateSalaryRecoard";
import ShowSalaryRecoards from "./pages/Salary/ShowSalaryRecoards";
import EditSalaryRecoard from "./pages/Salary/EditSalaryRecoard";
import DeleteSalaryRecoard from "./pages/Salary/DeleteSalaryRecoard";
import ShowSalary from "./pages/Salary/ShowSalary";
import CreateOrderForm from "./pages/OrderForm/CreateOrderForm";
import Invoice from "./pages/OrderForm/Invoice";
import Home3 from "./pages/Salary/Home";
import { SnackbarProvider } from "notistack";

// Employee
import Employee from "./pages/Employee/Employee";
import Dashboard from "./components/Employee/Dashboard";
import EmpLeave from "./pages/Employee/EmpLeave";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/attractions" element={<Attraction />}></Route>
      <Route path="/attraction" element={<Attraction02 />}></Route>
      <Route path="/userRegistration" element={<RegistrationForm />} />
      <Route path="/userLogin" element={<LogInForm />} />
      <Route path="/home" element={<Home2 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login2" element={<Login2 />} />

      <Route path="/create" element={<Pcreate />} />
      <Route path="/pdashboard" element={<Pdashboard />} />
      <Route path="/edit/:id" element={<Pedit />} />
      <Route path="/package/:id" element={<Pdetails />} />
      <Route path="/udashboard" element={<PUdash />} />
      <Route path="/ucus" element={<PUcus />} />
      <Route path="/editu/:id" element={<PUedit />} />
      <Route path="/preport" element={<PR />} />
      <Route path="/pintfc" element={<PI />} />

      <Route path="/R_Booking" element={<R_Booking />} />
      <Route path="/R_vehicle" element={<R_vehicle />} />
      <Route path="/R_Bdetails/:id" element={<R_Bdetails />} />
      <Route path="/R_Bookdet" element={<R_Bookdet />} />
      <Route path="/R_Details" element={<R_Details />} />
      <Route path="/R_Bupdate/:id" element={<R_Bupdate />} />
      <Route path="/Adminhome" element={<Adminhome />} />
      <Route path="/Adminbooking" element={<Adminbooking />} />
      <Route path="/Addvehicle" element={<Addvehicle />} />
      <Route path="/A_checkvehicle" element={<A_checkvehicle />} />
      <Route path="/A_updatevehicle/:id" element={<A_updatevehicle />} />

      <Route path="/booking" element={<Booking />} />
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/eventbooking" element={<EventBooking />} />
      <Route path="/add" element={<Add />} />
      <Route path="/add_event" element={<AddEvent />} />
      <Route path="/editbooking/:id" element={<Edit />} />
      <Route path="/editevent/:id" element={<EditEvent />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/events" element={<Events />} />
      <Route path="/hotelform/:roomId" element={<HotelBookingForm />} />
      <Route path="/eventform/:eventId" element={<EventBookingForm />} />
      <Route path="/booking&event" element={<BookingHotelEvents />} />

      <Route path="/ticket" element={<Home />} />
      <Route path="/faq" element={<Helpcenter />} />
      <Route path="/email" element={<Contact />} />
      <Route path="/ticket/create" element={<CreateTicketRecords />} />
      <Route path="/ticket/edit/:_id" element={<EditTicketRecords />} />
      <Route path="/ticket/delete/:_id" element={<DeleteTicketRecords />} />

      <Route path="/feedback" element={<Feedback1 />} />
      <Route path="/feedback1" element={<Feedback1 />} />
      <Route path="/servicefeedback" element={<ServiceFeedback />} />
      <Route path="/addfeedback" element={<AddFeedback />} />
      <Route path="/Admin" element={<Admin />} />

      <Route path="/salary/create" element={<CreateSalaryRecoard />} />
      <Route path="/salarys" element={<Home3 />} />
      <Route path="/salary/details/:_id" element={<ShowSalaryRecoards />} />
      <Route path="/salary/edit/:_id" element={<EditSalaryRecoard />} />
      <Route path="/salary/delete/:_id" element={<DeleteSalaryRecoard />} />
      <Route path="/salary/details1/:_id" element={<ShowSalary />} />
      <Route path="/orderform" element={<CreateOrderForm />} />
      <Route path="/invoice/:_id" element={<Invoice />} />

      <Route path="/employee" element={<Employee />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/empleave" element={<EmpLeave />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
