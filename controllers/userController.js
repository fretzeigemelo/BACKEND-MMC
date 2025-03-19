const { User } = require('../models'); // Import the User model

// Add User
exports.addUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Validate input
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        const user = await User.create({ name, email });
        res.status(201).json({ message: 'User added successfully', user });
        console.log("This is a demo for add user api")
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
