const { addcart,getcat } = require("../controller/Category");

const express= require("express")

const router= express("express")

router.post("/addcart",addcart)
router.get("/getcat",getcat)

module.exports = router;