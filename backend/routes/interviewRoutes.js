const express = require("express");
const router = express.Router();

const interview = require("../controllers/interviewController");

router.get("/home", interview.getHome);
router.get("/interview", interview.getInterview);

router.post("/check-answer", interview.checkAnswer);
router.post("/save-result", interview.saveResult);

router.get("/result", interview.getResult);

module.exports = router;