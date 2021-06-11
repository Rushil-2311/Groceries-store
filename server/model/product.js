const mongoose=require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({

  name:{
    type:String,
    require:true
  }
  ,price:{
    type:String,
    require:true
  },
  pice:{
    type:String,
    require:true
  },
  url:{
    type:String,
    require:true
  }

})

mongoose.model('Product',productSchema)
