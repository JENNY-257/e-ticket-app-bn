export const signUpDocs = {
    tags: ["User Authentication"],
    description: "Signup a user",
    operationId: "signUpUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "User's full name",
                example: "John Doe",
              },
              email: {
                type: "string",
                description: "User email",
                example: "johndoe@example.com",
              },
              password: {
                type: "string",
                description: "User password",
                example: "Password123",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "User registered successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "User registered successfully",
                },
              },
            },
          },
        },
      },
      400: {
        description: "Invalid request data",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Invalid request data",
                },
              },
            },
          },
        },
      },
      500: {
        description: "Server error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Server error",
                },
              },
            },
          },
        },
      },
    },
  };
  
  export const login = {
    tags: ["User Authentication"],
    description: "Login a user",
    operationId: "loginUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "User email",
                example: "example@email.com",
              },
              password: {
                type: "string",
                description: "User password",
                example: "password123",
              },
            },
            required: ["email", "password"],
          },
        },
      },
    },
    responses: {
      200: {
        description: "User logged in successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                  description: "JWT access token",
                },
                refreshToken: {
                  type: "string",
                  description: "JWT refresh token",
                },
              },
            },
          },
        },
      },
      401: {
        description: "Unauthorized: Invalid credentials",
      },
      500: {
        description: "Server error",
      },
    },
  };
  