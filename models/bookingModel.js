const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const bookingSchema = new Schema({
    
    userId: { type: String, required: true },
    hotelId: { type: String, required: true },
    hotelName: {type: String, require: true },
    dtd: { type: String, required: true },
});

module.exports = mongoose.model('bookings', bookingSchema);