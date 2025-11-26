const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
    name:{type:String, required: true},
    age:{type:String, required: true},
    position:{type:String, required:true},
    department:{type:String,required:true},
    salary:{type:Number, required:true},
     
})

module.exports = mongoose.model('staff', staffSchema);