const express = require("express");
const router = express.Router();
//const user = require("../controller/user");
const feedback = require("../../controller/Feedback/feedback");

/*router.get("/users", user.getUsers);
router.post("/createuser", user.addUser);
router.post("/updateuser", user.updateUser);
router.post("/deleteuser", user.deleteUser);*/

router.get("/feedbacks", feedback.getFeedbacks);
router.post("/createfeedback", feedback.addFeedback);
router.post("/updatefeedback", feedback.updateFeedback);
router.post("/deletefeedback", feedback.deleteFeedback);

module.exports = router;
