 import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Criar evento
router.post('/', async (req, res) => {
  const { titulo, data } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO eventos (titulo, data) VALUES ($1, $2) RETURNING *',
      [titulo, data]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Listar eventos
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM eventos ORDER BY data'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

export default router;
