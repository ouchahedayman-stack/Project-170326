const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Express en ligne ✅',
    timestamp: new Date().toISOString(),
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/students/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Etudiant Demo',
    course: 'TP 5 - Déploiement API Express',
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route introuvable' });
});

app.listen(port, () => {
  console.log(`Serveur Express démarré sur le port ${port}`);
});
