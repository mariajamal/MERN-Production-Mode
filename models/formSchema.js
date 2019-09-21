const mongoose = require("mongoose")

const form = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }

})
const Form = mongoose.model('Form', form , 'People')
module.exports = Form