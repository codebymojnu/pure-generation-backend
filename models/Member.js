const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: String,
    boiGift: Number,
    tshirtGift: Number,
    increaseMember: Number
});

module.exports = mongoose.model('Member', memberSchema);
