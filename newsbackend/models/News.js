const mongoose= require("mongoose");
const NewsSchema= mongoose.Schema({
    name:{
        type:String,
        require:[true,"can't be blank"]
    },
    description:{
        type:String,
        require:[true,"can't be blank"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        require: [true, "can't be blank"],
      },
      categoryname:{
        type:String,
      },
      image:{
        type:String,
        require:[true,"can't be empty"]
      },
      date:{
        type:String,
      },
      publishedby:{
        type:String
      }
});
const News=mongoose.model("news", NewsSchema);
module.exports= News;