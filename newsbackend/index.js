const express = require("express");
const cors = require("cors");
const category = require("./routes/category")
const news = require("./routes/newsroute")
const admin = require('./routes/adminroute')
 require('./connection')
const app = express()

const PORT=1000;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use("/category",category)
app.use('/news',news)
app.use("/admin",admin)
app.listen(PORT, ()=>{
    console.log("Server is runing at",PORT)
})