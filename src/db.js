import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// cria tabela automaticamente se não existir
(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS eventos (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        data DATE NOT NULL,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tabela eventos pronta');
  } catch (err) {
    console.error('Erro ao criar tabela:', err.message);
  }
})();

export default pool;
