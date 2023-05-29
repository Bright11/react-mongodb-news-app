const mongoose= require("mongoose");

const CategorySchema= mongoose.Schema({
    name:{
        type:String,
        require:[true,"it can't be blank"],
        unique:true
    }
},{minimize:false});
const Category=mongoose.model("category", CategorySchema);
module.exports= Category;