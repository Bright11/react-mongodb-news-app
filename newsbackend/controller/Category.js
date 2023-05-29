const Category = require("../models/Category")

exports.addcart= async(req,res)=>{
    const {name}= req.body
try {
    const category= await Category.create({name});
    res.status(200).json("success");
} catch (e) {
    if (e.code === 11000) return res.status(400).send("category exist");
    res.status(400).send(e.message)
}
}

exports.getcat= async(req, res)=>{
   try {
    const getcategory= await Category.find()
    res.status(200).json(getcategory)
   } catch (e) {
    res.status(400).send(e.message)
   }
}