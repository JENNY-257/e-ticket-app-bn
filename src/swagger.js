import {
    signUpDocs,
    login 
  } from './documentation/users.js'; 
  
  import {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
  } from "./documentation/events.js";

  import {
    bookTicket,
    getUserTickets,
    updateTicket,
    deleteTicket 

  } from "./documentation/tickets.js";
  export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'E-Ticket App API Documentation',
      description: 'API documentation for the E-Ticket App backend',
      termsOfService: '',
      contact: {
        name: 'E-Ticket-App',
        email: 'eticketapp@gmail.com',
        url: 'https://www.eticketapp.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000', 
        description: 'Local development server',
      },
      {
        url: `${process.env.DEPLOYED_VERSION}`, // Hosted version URL
        description: 'Hosted production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },
    paths: {
        
        '/api/v1/users/signup': {
            post:signUpDocs,
          },
          '/api/v1/users/login': {
            post:login,
          },
          '/api/v1/events/create-event': {
            post:createEvent,
          },
          '/api/v1/events': {
            get:getEvent,
          },
          '/api/v1/events/{eventId}': {
            patch:updateEvent,
            delete:deleteEvent,
          },
          '/api/v1/tickets/book-ticket': {
             post: bookTicket,
          },
           '/api/v1/tickets': {
             get: getUserTickets,
          },
          '/api/v1/tickets/{ticketId}': {
             patch: updateTicket,
             delete: deleteTicket,
          },
    },
  };
  