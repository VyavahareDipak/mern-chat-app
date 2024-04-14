const express = require("express");
const { login, signup,logout } = require("../controlers/auth.controler");

const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)

module.exports = router ;