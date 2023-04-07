var mongoose = require('mongoose')
var foodSchema = mongoose.Schema({
    
    foodname: {
        type: String,
      
    },
    foodprice: {
        type: Number,
      
    },
    foodimage: {
        type:String,required:false
    },
    foodqty: {
        type: Number
    },
    foodavail: {
        type: Boolean, default: false
    },
    unlimited: {
        type: Boolean, default: false
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('food',foodSchema)
