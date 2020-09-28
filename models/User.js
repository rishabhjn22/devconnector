const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique: true    
    },
    password: {
        type:String,
        required:true
    },
    avatar : {                  //to attach a profile in email
        type:String
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports= User = mongoose.model('user',UserSchema);