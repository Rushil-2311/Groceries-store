const mongoose = require('mongoose');
const MainProduct=mongoose.model('MainProduct')
const fs = require('fs');
// const imgPath='./routs/banana.png';
var mainProduct = new MainProduct({
    product:"cocacola",
    price:"3.4$",
    description:"this is a roco baby",
    quantity:"4",
    imges:'https://pngtree.com/freepng/fruits-composition-beautiful-fresh-fruits_4961925.html'
})
// mainProduct.img1.data = fs.readFileSync(imgPath);
// mainProduct.img1.contentType = 'image/png';
mainProduct.save(function(err, products) {
    if (err) return console.error(err);
    console.dir(products);
})