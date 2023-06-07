const User = require('./models/User');

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('sounds');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Update user (including bio)
const updateUser = async (req, res) => {
  try {
    const { bio } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.bio = bio;
    await user.save();
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Follow a user
const followUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Logic to handle following a user
    // Update the user's followers list, etc.
    res.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Unfollow a user
const unfollowUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Logic to handle unfollowing a user
    // Update the user's followers list, etc.
    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getUserById,
  updateUser,
  followUser,
  unfollowUser,
};
