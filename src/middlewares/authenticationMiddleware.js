import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
 
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  
  jwt.verify(token, 'JWT_SECRET', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;

    next();
  });
};

export const authorizeEventOwner = (req, res, next) => {
    const { eventId } = req.params.eventId;
    const userId = req.user.userId; 
  
    if (eventOwnerId !== userId) {
      return res.status(403).json({ message: 'Forbidden: You are not the event owner' });
    }
  
    next();
  };
