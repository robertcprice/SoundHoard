const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.post('/:id/follow', userController.followUser);
router.post('/:id/unfollow', userController.unfollowUser);

module.exports = router;
