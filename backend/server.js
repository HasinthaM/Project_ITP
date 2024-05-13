const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");

// Destination & User
const router = require("./routers/Destination/router");
const userRouter = require("./routers/User/router");

// Package
const packageRoutes = require("./routers/Package/P_routes");
const userRoutes = require("./routers/Package/P_userRoutes");

// Rent
const postRouts = require("./routers/Rent/R_bookingroute");

// Booking
const bookingRouter = require("./routers/Booking/bookingRoute.js");
const eventRouter = require("./routers/Event/eventRoute.js");

// customer support
const ticketRouter = require("./routers/Ticket/ticketRoute");

// Feedback
const feedBackRouter = require("./routers/FeedBack/router.js");

// payment
const salaryRouter = require("./routers/Payment/salaryRoute.js");
const orderformRouter = require("./routers/Payment/orderformRoute");
const paymentRouter = require("./routers/Payment/paymentdetailsRoute.js");

//Employee management
const getEmployees = require("./routers/Employee/getEmployees");
const createEmployee = require("./routers/Employee/createEmployee");
const updateEmployee = require("./routers/Employee/updateEmployee");
const deleteEmployee = require("./routers/Employee/deleteEmployee");
const getEmployeeById = require("./routers/Employee/getEmployeeById");
const searchEmployee = require("./routers/Employee/searchEmployee");

//Employee Leave management
const Leaverouter = require("./routers/Employee/Leaverouter");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://keshan:keshan123@cluster0.aw4pjl6.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Error: ", error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});

// Destination & User
app.use("/api", router);
app.use("/api/users", userRouter);

// Package
app.use("/api", packageRoutes);
app.use("/api", userRoutes);

// Rent
app.use(postRouts);

// Booking
app.use("/api", bookingRouter);
app.use("/api", eventRouter);

// customer support
app.use("/api/ticket", ticketRouter);

// FeedBack
app.use("/api", feedBackRouter);

// payment
app.use("/api/salary", salaryRouter);
app.use("/api/order", orderformRouter);
app.use("/api/payment", paymentRouter);

//Employee management
app.use("/employee", getEmployees);
app.use("/employee", createEmployee);
app.use("/employee", updateEmployee);
app.use("/employee", deleteEmployee);
app.use("/searchemployee", searchEmployee);
app.use("/employee", getEmployeeById);

//Employee leave management
app.use("/employeeleave", Leaverouter);
