const mongoose = require('mongoose');
const bycrypt = require('bycrypt');

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

const salt = await bycrypt.gensalt(10);
this.password = await bycrypt.hash(this.password,salt);
next();
})

userSchema.method.matchpassword = async function (enterpassword) {
    return await bycrypt.comapre(enterpassword, this.password)
}


const User = mongoose.model('User', userSchema)

module.exports = User;