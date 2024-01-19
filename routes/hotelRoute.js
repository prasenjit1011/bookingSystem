const express   = require('express');
const router    = express.Router();

const hotelCtrl = require('../controllers/hotelController');
router.get('/api/hotels/list/:id?', hotelCtrl.getHotelList);
router.post('/api/hotels/book', hotelCtrl.bookNow);
router.get('/api/hotels/booking/list', hotelCtrl.bookingList);

module.exports = router;