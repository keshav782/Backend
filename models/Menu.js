const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true,
        enum:['sweet','spice','sour'],
        
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_Sales:{
        default:0,
        type:Number
    }

})

const MenuItem = mongoose.model('Menu',MenuItemSchema);
module.exports = MenuItem;