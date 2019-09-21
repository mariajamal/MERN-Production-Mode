const mongoose = require("mongoose")

mongoose.connect( 'mongodb://localhost/mern-form', {useNewUrlParser:true, useUnifiedTopology: true },(err)=> err ? console.log(err): console.log("MongoDB connected"))


module.exports.Form = require('./formSchema');