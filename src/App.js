import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Booking from "./pages/Booking/getbooking/Booking";
import EventBooking from "./pages/Event/getevent/Event";
import Add from "./pages/Booking/addbooking/Add";
import AddEvent from "./pages/Event/addevent/AddEvent";
import Edit from "./pages/Booking/updatebooking/Edit";
import EditEvent from "./pages/Event/updateevent/EditEvent";
import Hotels from "./pages/home/Hotels";
import Events from "./pages/home/Events";
import HotelBookingForm from "./pages/home/HotelBookingForm";
import EventBookingForm from "./pages/home/EventBookingForm";
import HomePage from "./pages/home/HomePage";
import AdminPanel from "./pages/admin_panel/adminPanel";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/adminpanel",
      element: <AdminPanel />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/eventbooking",
      element: <EventBooking />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/add_event",
      element: <AddEvent />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
    {
      path: "/editevent/:id",
      element: <EditEvent />,
    },
    {
      path: "/hotels",
      element: <Hotels />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/hotelform/:roomId",
      element: <HotelBookingForm />,
    },
    {
      path: "/eventform/:eventId",
      element: <EventBookingForm />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
