const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const feedback = require("../controller/feedback");
const ServiceFeedback = require("../controller/ServiceFeedback");

router.get("/users", user.getUsers);
router.post("/createuser", user.addUser);
router.post("/updateuser", user.updateUser);
router.post("/deleteuser", user.deleteUser);

router.get("/feedbacks", feedback.getFeedbacks);
router.post("/createfeedback", feedback.addFeedback);
router.post("/updatefeedback", feedback.updateFeedback);
router.post("/deletefeedback", feedback.deleteFeedback);

router.get("/servicefeedbacks", ServiceFeedback.getServiceFeedbacks);
router.post("/createservicefeedback", ServiceFeedback.addServiceFeedback);
router.post("/updateservicefeedback", ServiceFeedback.updateServiceFeedback);
router.post("/deleteservicefeedback", ServiceFeedback.deleteServiceFeedback);

module.exports = router;