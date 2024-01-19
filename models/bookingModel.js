const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const bookingSchema = new Schema({
    
    userId: { type: String, required: true },
    hotelId: { type: String, required: true },
    hotelName: {type: String, require: false },
    dtd: { type: String, required: false },
    guestNumber: { type: String, required: false},
    price: { type: String, required: false}
});

module.exports = mongoose.model('bookings', bookingSchema);