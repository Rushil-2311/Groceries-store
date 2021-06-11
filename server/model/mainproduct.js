var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mainProductSchema   = new Schema({

    product: {type: String},
    price: {type: String},
    description: {type: String},
    quantity: {type: Number},
    imges: { type: String},
    uploadDate: {type: Date, default: Date.now}
});

mongoose.model('MainProduct',mainProductSchema)

