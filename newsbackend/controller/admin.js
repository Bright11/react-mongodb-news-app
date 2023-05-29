const News = require("../models/News")

exports.adminallnews= async(req,res)=>{

    try {
        const news= await News.find();
        res.status(200).json(news)
    } catch (e) {
        res.status(400).send(e.message)
    }
}