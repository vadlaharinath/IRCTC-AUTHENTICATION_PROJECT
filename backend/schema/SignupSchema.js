const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    fullname:{
        type:String,
        require:true
    },
    password: {
        type: String,
        require: true
    },
    email:{
        type:String,
        require:true
    },
    country:{
        type:String,

    },
    mobile:{
        type:Number,
        require:true

    }

});
module.exports=mongoose.model("SignupSchema",signupSchema);

// userName, fullname, password, email, country, mobile