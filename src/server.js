import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import userRouter from '../src/routes/userRoutes.js';
import router from './routes/eventRoutes.js';
import ticketRouter from './routes/ticketRoutes.js';
import { swaggerDocument } from './swagger.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/users', userRouter);
app.use('/api/v1/events',router);
app.use('/api/v1/tickets',ticketRouter)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;