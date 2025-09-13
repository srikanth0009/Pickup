
import mongoose from "mongoose";

const  userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    email: {type: String, required: true},
    fumm_name: {type: String, required: true},
    username: {type: String, unique: true},
    bio: {type: String, default: 'Hey there! I am using Pingup'},
    profile_picture: {type: String, default: ''},
    cover_photo: {type: String, default: ''},
    location: {type: String, default: ''},
    followers: [{type: String, reference: "User"}],
    following: [{type: String, reference: "User"}],
    connections: [{type: String, reference: "User"}],
}, {timestamps: true, minimize: false})


const User = mongoose.model('User', userSchema)

export default User