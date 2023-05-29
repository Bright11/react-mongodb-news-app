const mongoose = require("mongoose")
const db = 

mongoose.connect(db,{
    useNewUrlparser:true,
}).then(()=>console.log("connected")).catch((err)=>{
    console.log(err)
})