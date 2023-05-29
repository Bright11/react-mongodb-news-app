
const express = require("express");
const { adminallnews } = require("../controller/admin");

const router = express("express")
router.get("/adminallnews",adminallnews)

module.exports= router;
