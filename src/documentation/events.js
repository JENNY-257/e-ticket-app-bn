export const createEvent = {
    tags: ["Event Management"],
    description: "Create a new event",
    operationId: "createEvent",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              eventName: {
                type: "string",
                description: "Name of the event",
              },
              eventDateTime: {
                type: "string",
                format: "date-time",
                description: "Date and time of the event",
              },
              location: {
                type: "string",
                description: "Location of the event",
              },
              description: {
                type: "string",
                description: "Description of the event",
              },
             
            },
            required: ["eventName", "eventDateTime", "location", "description"],
          },
        },
      },
    },
    responses: {
      201: {
        description: "Event created successfully",
      },
      400: {
        description: "Bad request: Invalid event data",
      },
      500: {
        description: "Server error",
      },
    },
  };
  
  export const getEvent = {
    tags: ["Event Management"],
    description: "Get event details by ID",
    operationId: "getEvent",
    parameters: [
      {
        name: "eventId",
        in: "path",
        description: "ID of the event to retrieve",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Event details retrieved successfully",
        content: {
          "application/json": {
            schema: {
              
            },
          },
        },
      },
      404: {
        description: "Event not found",
      },
      500: {
        description: "Server error",
      },
    },
  };

  export const updateEvent = {
    tags: ["Event Management"],
    description: "Update event details by ID",
    operationId: "updateEvent",
    parameters: [
      {
        name: "eventId",
        in: "path",
        description: "ID of the event to update",
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
            
          },
        },
      },
    },
    responses: {
      200: {
        description: "Event details updated successfully",
      },
      400: {
        description: "Bad request: Invalid event data",
      },
      404: {
        description: "Event not found",
      },
      500: {
        description: "Server error",
      },
    },
  };

  export const deleteEvent = {
    tags: ["Event Management"],
    description: "Delete an event by ID",
    operationId: "deleteEvent",
    parameters: [
      {
        name: "eventId",
        in: "path",
        description: "ID of the event to delete",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Event deleted successfully",
      },
      404: {
        description: "Event not found",
      },
      500: {
        description: "Server error",
      },
    },
  };
  