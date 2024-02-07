const Member = require('../models/Member');

exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createMember = async (req, res) => {
    const member = new Member({
        name: req.body.name,
        boiGift: req.body.boiGift,
        tshirtGift: req.body.tshirtGift,
        increaseMember: req.body.increaseMember
    });

    try {
        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateMember = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await Member.findByIdAndUpdate(id, req.body, { new: true });
        res.json(member);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteMember = async (req, res) => {
    try {
        const { id } = req.params;
        await Member.findByIdAndDelete(id);
        res.json({ message: 'Member deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
