import express from 'express';
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
  getAllEvents,
} from '../controllers/eventController.js';
import {
  authenticateUser,
  authorizeEventOwner,
} from '../middlewares/authenticationMiddleware.js';
import { validateEventCreation, validateEventUpdate } from '../validations/eventValidations.js';

const router = express.Router();

router.post('/',  validateEventCreation, createEvent);
router.put('/:eventId', authenticateUser, authorizeEventOwner, validateEventUpdate, updateEvent);
router.delete('/:eventId', authenticateUser, authorizeEventOwner, deleteEvent);
router.get('/:eventId', getEventById);
router.get('/', getAllEvents);

export default router;
