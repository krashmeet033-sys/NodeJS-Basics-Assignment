const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if (req.url === '/') {

    const data = fs.readFileSync('data.json', 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <h1>Home Page</h1>
      <pre>${data}</pre>
    `);

  }

  else if (req.url === '/contact') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<h1>Contact Page</h1>');

  }

  else if (req.url === '/blogs') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end('<h1>Blogs Page</h1>');

  }

  else {

    res.writeHead(404, { 'Content-Type': 'text/html' });

    res.end('<h1>404 Not Found</h1>');

  }

});

server.listen(9000, () => {
  console.log('Server running at http://localhost:9000');
});