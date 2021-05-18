const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 

    email:{
        type:String,
        required:true,
    }, 

    //  date:{
    //     type:String,
    //     required:true
    // },
    phonenumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }, 
    // _id:{
    //     type:String,
    //     required:true
    // }
})

module.exports = mongoose.model('UserModel', UserSchema)