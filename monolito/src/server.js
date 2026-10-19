const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

// Forzar a Node a mantener el proceso vivo
setInterval(() => {}, 1000000);
