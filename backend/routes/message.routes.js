const express = require("express") ;
const {sendMessage,getMessages} = require("../controlers/message.controler")
const {protectRoute} = require("../midleware/protectRoute")


const router = express.Router() ;

router.get('/:id',protectRoute,getMessages)
router.post('/send/:id',protectRoute,sendMessage)
module.exports = router ;

