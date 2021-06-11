const express=require('express');
const app = express()
var cors = require('cors')
var multer = require('multer');
const mongoose  = require('mongoose')
const {MONGO_URL} = require('./keys');
const PORT = process.env.PORT || 5008

app.use(cors())
app.use(express.json());

mongoose.connect(MONGO_URL.toString(),{
    useNewUrlParser:true,
    useUnifiedTopology: true,
//  zuFdcLWiGqtxWqwB
})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

const db=mongoose.connection;
// app.use(multer({ dest: './images',
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//    }));
require('./model/user');   
require('./model/product');
require('./model/cart');
require('./model/Location');
require('./model/mainproduct');
require('./work');
app.use(require('./routs/auth'));




app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})