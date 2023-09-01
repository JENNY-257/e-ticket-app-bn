import Event from '../models/event.js'; 

export const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new Event(eventData);
    await newEvent.save();

    res.status(201).json({ message: 'Event created successfully', event: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const eventDataToUpdate = req.body;

    
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventDataToUpdate, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

   
    const deletedEvent = await Event.findByIdAndRemove(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getEventById = async (req, res) => {
  try {
    const { eventId } = req.params;


    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getAllEvents = async (req, res) => {
  try {

    const events = await Event.find();

    res.status(200).json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
