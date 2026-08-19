const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>Home - Personal Portfolio</title>
        </head>

        <body>
          <h1>Welcome to My Portfolio</h1>

          <p>Hello! Welcome to my personal portfolio.</p>

          <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
          </nav>

          <h2>Home</h2>

          <p>
            This portfolio showcases my skills, projects,
            and technical knowledge.
          </p>
        </body>
      </html>
    `);

  }

  else if (req.url === '/about') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>About Me</title>
        </head>

        <body>
          <h1>About Me</h1>

          <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
          </nav>

          <h2>About Me</h2>

          <p>
            I am a Computer Science student interested in
            web development, programming, and backend development.
          </p>

          <p>
            I am continuously learning new technologies and
            developing projects to improve my technical skills.
          </p>
        </body>
      </html>
    `);

  }

  else if (req.url === '/skills') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>Skills</title>
        </head>

        <body>
          <h1>My Skills</h1>

          <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
          </nav>

          <h2>Technical Skills</h2>

          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node.js</li>
            <li>Git and GitHub</li>
          </ul>
        </body>
      </html>
    `);

  }

  else if (req.url === '/projects') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>Projects</title>
        </head>

        <body>
          <h1>My Projects</h1>

          <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
          </nav>

          <h2>Projects</h2>

          <ul>
            <li>Musical Staff Sight-Reading & Ear-Training Workspace</li>
            <li>Geography Map Quiz Game</li>
            <li>FAQify - React FAQ Accordion</li>
            <li>Personal Portfolio Website</li>
          </ul>

          <p>
            These projects helped me improve my programming,
            frontend development, and problem-solving skills.
          </p>
        </body>
      </html>
    `);

  }

  else if (req.url === '/contact') {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>Contact</title>
        </head>

        <body>
          <h1>Contact Details</h1>

          <nav>
            <a href="/">Home</a> |
            <a href="/about">About Me</a> |
            <a href="/skills">Skills</a> |
            <a href="/projects">Projects</a> |
            <a href="/contact">Contact</a>
          </nav>

          <h2>Get in Touch</h2>

          <p>Email:- krashmeet033@gmail.com</p>

          <p>
            You can contact me regarding my projects,
            technical skills, and learning journey.
          </p>
        </body>
      </html>
    `);

  }

  else {

    res.writeHead(404, { 'Content-Type': 'text/html' });

    res.end(`
      <html>
        <head>
          <title>404 - Page Not Found</title>
        </head>

        <body>
          <h1>404 - Page Not Found</h1>

          <p>The page you are looking for does not exist.</p>

          <a href="/">Go Back to Home</a>
        </body>
      </html>
    `);

  }

});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});