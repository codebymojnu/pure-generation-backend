const GiftData = require('../models/GiftData');

// Controller to create a new gift data entry
exports.createGiftData = async (req, res) => {
    try {
        const newGiftData = new GiftData(req.body);
        await newGiftData.save();
        res.status(201).json(newGiftData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to get all gift data entries
exports.getAllGiftData = async (req, res) => {
    try {
        const giftData = await GiftData.find();
        res.status(200).json(giftData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to get a single gift data entry by ID
exports.getGiftDataById = async (req, res) => {
    const { id } = req.params;
    try {
        const giftData = await GiftData.findById(id);
        if (!giftData) {
            return res.status(404).json({ message: 'Gift data not found' });
        }
        res.status(200).json(giftData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to update a gift data entry
exports.updateGiftData = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedGiftData = await GiftData.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedGiftData) {
            return res.status(404).json({ message: 'Gift data not found' });
        }
        res.status(200).json(updatedGiftData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller to delete a gift data entry
exports.deleteGiftData = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedGiftData = await GiftData.findByIdAndDelete(id);
        if (!deletedGiftData) {
            return res.status(404).json({ message: 'Gift data not found' });
        }
        res.status(200).json({ message: 'Gift data deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
