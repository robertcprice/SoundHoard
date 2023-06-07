// boardRoutes.js

const express = require('express');
const boardController = require('../controllers/board');

const router = express.Router();

router.put('/:id/sounds/:padId', boardController.changeSound);
router.post('/:id/pads', boardController.addPad);
router.delete('/:id/pads/:padId', boardController.removePad);
router.post('/:id/save', boardController.saveState);

module.exports = router;
