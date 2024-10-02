const http = require('node:http');
const app = require('./app');

const PORT = process.env.PORT ?? 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);
