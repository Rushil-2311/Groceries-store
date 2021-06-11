const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
require('./user');  
const userSchema=new mongoose.Schema({
    zone:{
       type:String,
       required:true
    },
      area: {
      type:String,
      required:true
    } ,
     postedBy:{
        type:ObjectId,
        ref:"User"
     }
})

mongoose.model("Location",userSchema);