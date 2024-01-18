const express = require('express');
const router = express.Router();

const ticketCtrl = require('../controllers/ticketCtrl');

router.get('/', ticketCtrl.homePage);
router.post('/', ticketCtrl.ticketData);

module.exports  = router;
