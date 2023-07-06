const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

var user_schema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    }
});

user_schema.pre('save',async function() {
    try {
        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(this.password,salt);
        this.password=hashPass; 
        
    } catch (error) {
        throw error;
    }
});

const userdb = mongoose.model('Users', user_schema); //(<collectionname>, <collectionshema>)

module.exports = userdb;