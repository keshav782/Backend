const mongoose = require('mongoose');

// Define the person Schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['waiter','chef','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    address:{
        type:String
    },
    Salary:{
        type:Number,
        required:true
    }


})

// create person model

const Person = mongoose.model('Person',personSchema);
module.exports = Person