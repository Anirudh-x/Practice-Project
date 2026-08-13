const express = require("express");
const { loginAdmin, registerUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginAdmin)
router.post("/register", registerUser)


module.exports = router;