
const express =require("express");
const { publishnews,getpublishednews,updatenews,editnews,deletenews } = require("../controller/News");


const router= express("express")

router.post("/publishnews",publishnews)
router.get("/getnews",getpublishednews)
router.get("/updatenews/:edit",updatenews)
router.patch("/edit/:edit",editnews)
router.delete("/delete/:cat",deletenews)

module.exports=router;