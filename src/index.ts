import express from 'express';
import { initializeDatabase } from './config/database';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';

const app = express();
app.use(express.json());

initializeDatabase();

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});