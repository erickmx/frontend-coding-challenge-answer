const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = next({ dev });

const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> !!Ready on http://localhost:${port}`);
  });
});
