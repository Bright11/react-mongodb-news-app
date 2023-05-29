const Category = require("../models/Category");
const News = require("../models/News");

exports.publishnews= async(req,res)=>{

   try {
    const {name,description,image,category,publishedby,date}= req.body;
    const getcat= await Category.findById(category);
    
    const publishnewnews= await News.create({
        name,description,image,category,publishedby,date,categoryname:getcat.name
    });
    res.status(200).json("news published")
 
   } catch (e) {
    if (e.code === 11000) return res.status(400).send("category exist");
    res.status(400).send(e.message)
   }
}


exports.getpublishednews= async(req,res)=>{
 try {
   //  const news= await News.find().populate('category');
    const worldnews= await News.find({categoryname:"World news"}).populate("category").limit(3);
    const breaking= await News.find({categoryname:"breaking news"}).populate("category").limit(3);
    const sports= await News.find({categoryname:"sports"}).populate("category").limit(3);

    const politice= await News.find({categoryname:"politice"}).populate("category").limit(3);

    const entertainment= await News.find({categoryname:"Entertainment"}).populate("category").limit(3);
    const business= await News.find({categoryname:"business"}).populate("category").limit(3);

    

    res.status(200).json({breaking,worldnews,sports,politice,entertainment,business}) 
 } catch (e) {
    res.status(400).send(e.message)
 }
}

exports.updatenews= async(req,res)=>{
  const{edit}= req.params;

   try {
      // console.log(editnews)
      const getnews= await News.findById(edit).populate("category") ;
      res.status(200).json(getnews)
   //  console.log("good",getnews.category)
     
   } catch (e) {
      res.status(400).send("An error occured");
   }
}



exports.editnews= async(req,res)=>{
   const {edit}= req.params;
   const {name,description,image,category}= req.body;
   console.log("h")
   if(edit){
   try {
      const getcat= await Category.findById(category);
      if(getcat){
         console.log(getcat.name)
      }
      if(!image){
         const update = await News.findByIdAndUpdate(
            edit,{name,description,category,categoryname:getcat.name}
         );
      }else{
        const update = await News.findByIdAndUpdate(
      edit,
         {name,description,category,image,categoryname:getcat.name}
        )

      }
      res.status(200).json("updated")
   } catch (e) {
      res.status(400).send("An error occured");
   }

   }
}


exports.deletenews= async(req,res)=>{
   const {cat}=req.params;
   try {
      await News.findByIdAndDelete(cat)
      console.log("yes")
      res.status(200).json("deleted")
   } catch (e) {
      res.status(400).send("An error occured");
   }
}