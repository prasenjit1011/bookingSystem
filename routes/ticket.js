const express = require('express');
const router = express.Router();

const ticketCtrl = require('../controllers/ticket');

router.get('/', ticketCtrl.homePage);
router.post('/', ticketCtrl.ticketData);

