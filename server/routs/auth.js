const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const MainProduct=mongoose.model('MainProduct')
const User=mongoose.model('User');
const Product=mongoose.model('Product')
const Cart=mongoose.model('Cart')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys');
const { response } = require('express');
const Location=mongoose.model('Location');
let c=0;

// if(c==0){
//     Product.insertMany({
//         name:"organic banana",
//         price:"$4.5",
//         pice:"7pcs,perkg",
//         url:"./banana.png"
//     })
//     c++;
// }
router.get('/',(req,res)=>{
    res.send("hey dosto");
})

router.get('/mainproduct',(req,res)=>{
    MainProduct.find()
    .then(response=>{
        res.status(200).json(response)
    })
    .catch(err=>console.log(err));
})

router.delete('/:id',(req,res)=>{
    console.log("hry")
    // const {id}=req.params.id;
    // console.log(id)
    Cart.deleteOne({_id:req.params.id})
    .then((response)=>{
        res.status(200).json({message:"removed suceesfully"});
      console.log(response)
    })
    .catch((err)=>console.log(err));
})

router.post('/cartproduct',(req,res)=>{
    const {id}=req.body;
    Product.findOne({"_id":id})
    .then((cartDetails)=>{
        console.log(cartDetails)
        const cart = new Cart({
            name:cartDetails.name,
            price:cartDetails.price,
            pice:cartDetails.pice,
            url:cartDetails.url
        })
        cart.save()
        .then(user=>{
            res.status(200).json({message:"Added to the cart"});
        })

    })
    .catch((err)=>console.log(err))
})

router.get('/allcartproduct',(req,res)=>{
    Cart.find()
    .then((cart)=>{
        console.log(cart)
        res.status(200).json(cart)
    })
    .catch((err)=>console.log(err))
 })

router.get('/allproduct',(req,res)=>{
   Product.find()
   .then((product)=>{
       console.log(product)
       res.status(200).json(product)
   })
   .catch((err)=>console.log(err))
})
router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body 
    if(!email || !password || !name){
       return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
              const user = new User({
                  email,
                  password:hashedpassword,
                  name,
              })
      
              user.save()
              .then(user=>{
                  // transporter.sendMail({
                  //     to:user.email,
                  //     from:"no-reply@insta.com",
                  //     subject:"signup success",
                  //     html:"<h1>welcome to instagram</h1>"
                  // })
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
       
    })
    .catch(err=>{
      console.log(err)
    })
  })

  router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"successfully signed in"})
               const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
               const {_id,name,email} = savedUser
               res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.post('/location',(req,res)=>{
    const {zone,area}=req.body
    if(!zone||!area){
        return res.status(422).json({error:"please enter your zone and area"});
    }
    const location = new Location({
        zone,
        area
     })
     location.save()
    .then(user=>{
        res.json({message:"saved successfully"})
    })
    .catch(err=>{
        console.log(err)
    })
})




module.exports=router;