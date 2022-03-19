const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    status: {
        type: String, 
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    confirmationCode: { 
        type: String,
        unique: true 
    },
    roll: {
        type: String,
        required: false
    },
    interest: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;