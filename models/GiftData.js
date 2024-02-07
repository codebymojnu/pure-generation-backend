const mongoose = require('mongoose');

// Define a function to format the date
const formatDate = () => {
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
};

const giftDataSchema = new mongoose.Schema({
    date: {
        type: String, // Change the type to String to store the formatted date
        default: formatDate // Set the default value to the formatted date
    },
    name: String,
    challengeName: String,
    wardNo: String,
    villageName: String,
    invitationMember1: String,
    invitationMember2: String,
    post: Boolean,
    contactNumber: String
});

module.exports = mongoose.model('GiftData', giftDataSchema);
