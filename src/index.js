import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import eventosRoutes from './rotas/origem/rotas/eventos.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/eventos', eventosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
