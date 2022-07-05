const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/lista.route');
const connectToDatabase = require('./src/database/database')

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/listas', routes);
connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
