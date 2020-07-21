const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    Purpose:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    Category:{
         type:String,
         required:true
    }

})


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;