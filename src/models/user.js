
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    id: { type: String, required: false },
    contact: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
    blocked: {
        type: Boolean, default: false
    }
}, { timestamp: true }
)


module.exports = mongoose.model('user',userSchema)