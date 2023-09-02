import express from 'express';
import {
  bookTicket,
  getUserTickets,
  updateTicket,
  deleteTicket,
} from '../controllers/ticketController.js';

const ticketRouter = express.Router();

ticketRouter.post('/book-ticket', bookTicket);
ticketRouter.get('/', getUserTickets);
ticketRouter.patch('/:ticketId', updateTicket);
ticketRouter.delete('/:ticketId', deleteTicket);

export default ticketRouter;
