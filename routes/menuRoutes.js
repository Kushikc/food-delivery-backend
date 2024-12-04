const express = require('express');
const router = express.Router();
const { addMenuItem, getMenu } = require('../controllers/menuController');

router.post('/', addMenuItem);
router.get('/', getMenu);

module.exports = router;
