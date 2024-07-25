const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true 
         },
    role: {
        type:String,
        required:true,
        enum: ['User']
    },
    password: {
        type:String,
        required:true,
    }     
})

userSchema.pre('save', async function (next) {

const salt = await bcrypt.gensalt(10);
this.password = await bcrypt.hash(this.password,salt);
next();
})

userSchema.method.matchpassword = async function (enterpassword) {
    return await bcrypt.comapre(enterpassword, this.password)
}


const User = mongoose.model('User', userSchema)

module.exports = User;