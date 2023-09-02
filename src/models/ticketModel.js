import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  seatingPreferences: [
    {
      type: String,
    },
  ],
  ticketQuantity: {
    type: Number,
    required: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
