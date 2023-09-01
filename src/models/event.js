import mongoose from 'mongoose';

// Define the schema for the Event model
const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ticketDetails: [
    {
      type: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  eventCategory: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
