export const bookTicket = {
    tags: ["Ticket Booking"],
    description: "Book tickets for an event",
    operationId: "bookTicket",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              eventId: {
                type: "string",
                description: "ID of the event to book tickets for",
              },
              userId: {
                type: "string",
                description: "ID of the user booking the tickets",
              },
              seatingPreferences: {
                type: "string",
                description: "User's seating preferences",
              },
              ticketQuantity: {
                type: "integer",
                description: "Number of tickets to book",
              },
            },
            required: ["eventId", "userId", "ticketQuantity"],
          },
        },
      },
    },
    responses: {
      201: {
        description: "Tickets booked successfully",
      },
      400: {
        description: "Bad request: Invalid ticket booking data",
      },
      404: {
        description: "Event not found",
      },
      500: {
        description: "Server error",
      },
    },
  };

  export const getUserTickets = {
    tags: ["Ticket Booking"],
    description: "View booked tickets for a user",
    operationId: "getUserTickets",
    parameters: [
      {
        name: "userId",
        in: "path",
        description: "ID of the user to view tickets for",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "User's tickets retrieved successfully",
        content: {
          "application/json": {
            schema: {
              // Define the schema for ticket details here
            },
          },
        },
      },
      404: {
        description: "User not found or no tickets booked",
      },
      500: {
        description: "Server error",
      },
    },
  };

  export const updateTicket = {
    tags: ["Ticket Booking"],
    description: "Update ticket details by ID",
    operationId: "updateTicket",
    parameters: [
      {
        name: "ticketId",
        in: "path",
        description: "ID of the ticket to update",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            // Define the schema for ticket updates here
          },
        },
      },
    },
    responses: {
      200: {
        description: "Ticket details updated successfully",
      },
      400: {
        description: "Bad request: Invalid ticket data",
      },
      404: {
        description: "Ticket not found",
      },
      500: {
        description: "Server error",
      },
    },
  };

  export const deleteTicket = {
    tags: ["Ticket Booking"],
    description: "Delete a ticket by ID",
    operationId: "deleteTicket",
    parameters: [
      {
        name: "ticketId",
        in: "path",
        description: "ID of the ticket",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Ticket deleted successfully",
      },
      404: {
        description: "Ticket not found",
      },
      500: {
        description: "Server error",
      },
    },
  };
    