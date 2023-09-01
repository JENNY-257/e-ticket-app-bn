import Joi from 'joi';

// Define a Joi schema for event creation
const eventCreationSchema = Joi.object({
  eventName: Joi.string().required(),
  eventDateTime: Joi.date().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  ticketDetails: Joi.array().items(
    Joi.object({
      type: Joi.string().required(),
      price: Joi.number().required(),
    })
  ),
  eventCategory: Joi.string().required(),
  // Add more validation rules as needed
});

// Define a Joi schema for event update
const eventUpdateSchema = Joi.object({
  eventName: Joi.string(),
  eventDateTime: Joi.date(),
  location: Joi.string(),
  description: Joi.string(),
  ticketDetails: Joi.array().items(
    Joi.object({
      type: Joi.string(),
      price: Joi.number(),
    })
  ),
  eventCategory: Joi.string(),
  // Add more validation rules for update as needed
});

export const validateEventCreation = (req, res, next) => {
  const { error } = eventCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export const validateEventUpdate = (req, res, next) => {
  const { error } = eventUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
