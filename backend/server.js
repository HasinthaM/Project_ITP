const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routers/router");
const postRouts = require("./routers/Rent/R_bookingroute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(postRouts);

const uri =
  "mongodb+srv://dhananjaya:mongo2213@cluster0.u3zq0ye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB Error: ", error);
  }
};

connect();

const port = 3001;
app.use("/api", router);

const server = app.listen(port, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});
