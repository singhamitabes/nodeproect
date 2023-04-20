 const mongoose = require("mongoose")

 const contactSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true,"fill this first"]
    },
    email :{
        type: String,
        required: [true,"fill email first"]
    }
 })

 module.exports = mongoose.model("contact",contactSchema)