import Ticket from '../models/ticketModel.js';
import User from '../models/userModel.js';
import Event from '../models/event.js';

export const bookTicket = async (req, res) => {
    try {
        const { eventId, userId, seatingPreferences, ticketQuantity } = req.body;
    
        const newTicket = new Ticket({
          eventId,
          userId,
          seatingPreferences,
          ticketQuantity,
        });
    
        await newTicket.save();
    
        res.status(201).json(newTicket);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to create ticket' });
      }
};

// Controller function to view booked tickets for a user
export const getUserTickets = async (req, res) => {
  try {
    

    const userTickets = await Ticket.find().populate('eventId');

    res.status(200).json({ tickets: userTickets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const updateTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { seatingPreference } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, { seatingPreference }, { new: true });

    if (!updatedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ message: 'Ticket updated successfully', ticket: updatedTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const deletedTicket = await Ticket.findByIdAndRemove(ticketId);

    if (!deletedTicket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    res.status(200).json({ message: 'Ticket deleted successfully', ticket: deletedTicket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
