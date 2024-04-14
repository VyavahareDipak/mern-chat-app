const express = require("express");
const { getUsers} = require("../controlers/user.controler");
const { protectRoute } = require("../midleware/protectRoute");

const router = express.Router();

router.get("/",protectRoute,getUsers)


module.exports = router ;