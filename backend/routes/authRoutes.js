const express = require("express");
const router = express.Router();

const auth = require("../controllers/authController");

// ✅ FIX: root route
router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/login", auth.getLogin);
router.get("/register", auth.getRegister);

router.post("/login", auth.postLogin);
router.post("/register", auth.postRegister);

module.exports = router;