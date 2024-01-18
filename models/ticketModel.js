const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  rowdata: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);